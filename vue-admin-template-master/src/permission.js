import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' //  引入进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式

const whiteList = ['/login', '/404'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  NProgress.start() // 开启进度条
  // 是否有无token
  if (store.getters.token) {
    if (to.path === '/login') { // 判断是否去登录页
      next('/') // 跳去主页
    } else {
      if (!store.getters.userId) { // 如果没有id的值，调用action
        await store.dispatch('user/getUserInfo') // 为什么要写await 因为我们想获取完资料再去放行 同步操作会等到其执行完开始执行
      }
      next() // 直接放行
    }
  } else { // 无token
    if (whiteList.indexOf(to.path) > -1) { // 是否白名单
      next() // 放行
    } else {
      next('/login') // 去登陆页
    }
  }
  NProgress.done() // 手动强制关闭一次 为了解决 手动切换地址时，进度条不关闭问题
})

router.afterEach(() => {
  NProgress.done() // 关闭进度条
})

