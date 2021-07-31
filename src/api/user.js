import request from '@/utils/request'

export function go(data = {}) {
  return request({
    url: '/index/login',
    method: 'post',
    data
  })
}

export function getUserinfo(data = {}) {
  return request({
    url: '/index/userinfo',
    method: 'post',
    data
  })
}
export function refreshToken(data = {}) {
  return request({
    url: '/index/refresh_token',
    method: 'post',
    data
  })
}