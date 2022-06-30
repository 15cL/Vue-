import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: getToken(), // 设置token初始化  token持久化==》放到缓存中
    userInfo: {} // 定义一个空的对象, 不是null  因为后边我要开发userInfo的属性给别人用 userInfo.name
  },
  mutations: {
    setToken(state, token) {
      state.token = token // vuex token 和缓存同步
      setToken(token)
    },
    removeToken(state, token) {
      state.token = null // vuex token 同步移除
      removeToken()
    },

    // 设置用户信息
    setUserInfo(state, userInfo) {
      state.userInfo = { ...userInfo } // 用浅拷贝的方式去赋值对象,因为这样数据更新之后,才会触发组件的更新;
    },
    // 删除用户数据
    removeUserInfo(state) {
      state.userInfo = {}
    }
  },
  actions: {
    // 定义login action  也需要参数 调用action时 传递过来的参数
  // async 标记的函数其实就是一个异步函数 -> 本质是还是 一个promise
    async login(context, data) {
      // 经过响应拦截器的处理之后 这里的res实际上就是 token
      const res = await login(data)
      context.commit('setToken', res)
      // 写入时间戳
      setTimeStamp() // 将当前的最新时间写入缓存
    },

    async getUserInfo(context) {
      const result = await getUserInfo() // 获取返回值
      const baseInfo = await getUserDetailById(result.userId) // 获取头像
      const baseResult = { ...result, ...baseInfo }
      console.log('res', baseResult)
      context.commit('setUserInfo', baseResult) // 将整个人的个人信息设置到用户的vuex数据中
      return result // 这里为什么要返回  为后面买下伏笔
    },
    async logout(context) {
      context.commit('removeToken') //  删除 vuex 和缓存中的 token
      context.commit('removeUserInfo') // 删除用户信息
    }
  }
}
