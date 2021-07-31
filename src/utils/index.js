export function getStorage(key) {
    return localStorage.getItem(key)
}
export function setStorage(key, val) {
    if (typeof val === 'object') {
        localStorage.setItem(key, val)
    } else {
        localStorage.setItem(key, JSON.stringify(val))
    }

}
export function removeStorage() {
     localStorage.removeItem(key)
}