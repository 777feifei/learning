// 深度遍历


function text(value) {
    let text = Object.prototype.toString.call(value)
    return text.substring(8, text.length - 1)
}

export function deepClone(value) {
    // 不是复杂数据类型直接返回原参数
    if (typeof value !== 'object') return value;
    // 以下为复杂数据类型处理
    
    var params;
    if (value && text(value) == 'Object') {
        params = {}
        for (let k in value) {
            params[k] = deepClone(value[k])

        }
    } else if (value && text(value) == 'Array') {
        params = []
        value.forEach(item => {
            params.push(deepClone(item))
        })
    }
    return params;
}
