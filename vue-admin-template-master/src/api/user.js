import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'sys/login',
    method: 'post',
    data
  })
}

// 获取用户的基本资料
export function getUserInfo() {
  return request({
    url: 'sys/profile',
    method: 'post'
  })
}
export function getInfo(token) {

}

export function logout() {

}

export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}
