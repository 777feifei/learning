// 节流  多次触发只执行一次

export function throttle(callback, time = 1000) {
    // 阀门
    let flag = true;
    return function () {
        if (flag) {
            flag = false;
            setTimeout(() => {
                // 执行函数，
                callback.apply(this, arguments)
                valve = true
            }, time)
        }
    }
}