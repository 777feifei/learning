// 防抖  延迟执行
export function debounce(callback, time = 1000) {
    var timeOut;
    return function () {
        clearInterval(timeOut)
        timeOut = setTimeout(() => {
            callback.apply(this, arguments)
        }, time)
    }
}