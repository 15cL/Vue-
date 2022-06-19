import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: getToken() // 设置token初始化  token持久化==》放到缓存中
  },
  mutations: {
    setToken(state, token) {
      state.token = token // vuex token 和缓存同步
      setToken(token)
    },
    removeToken(state, token) {
      state.token = null // vuex token 同步移除
      removeToken()
    }
  },
  actions: {
    async login(context, data) {
      const res = await login(data)
      context.commit('setToken', res)
    }
  }
}
