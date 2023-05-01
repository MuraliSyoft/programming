let data = [100, 2000, 8, 2, 90000, 8]

const res = (data) => {
    return data.reduce(function (prev, cur) {
        return prev > cur ? prev : cur
    })
}
console.log(res(data))