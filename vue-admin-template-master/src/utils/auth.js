// token缓存
import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token' // 独一无二的key

// 获取token的key
export function getToken() {
  return Cookies.get(TokenKey)
}

// 设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 删除token
export function removeToken() {
  return Cookies.remove(TokenKey)
}

// token超时，客户端主动介入
const timeKey = 'hrsaas-timestamp-key' // 独一无二的key

// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(timeKey)
}

// 设置时间戳
export function setTimeStamp(timeKey) {
  return Cookies.set(timeKey, Date.now())
}
