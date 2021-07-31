import { getStorage, setStorage, removeStorage } from '@/utils'

const TokenKey = 'learn-token'
const RefreshTokenKey = 'learn-refresh-token'

// 读取token
export function getToken() {
    return getStorage(TokenKey);
}

// 读取刷新token
export function getRefreshToken() {
    return getStorage(RefreshTokenKey)
}

// 设置token
export function setToken(toekn,refreshToken) {
     setStorage(TokenKey, refreshToken);
     setStorage(RefreshTokenKey, refreshToken);
}

// 删除token
export function removeToken() {
    removeStorage(TokenKey)
    removeStorage(RefreshTokenKey)
}