function prefixSum(arr, size, preSum) {
    preSum[0] = arr[0]
    for (let i = 0; i < size; i++) {
        preSum[i] = preSum[i - 1] + arr[i]
    }
}

let arr = [10, 20, 30, 40, 50]
let preSum = new Array(arr.size)
let res = prefixSum(arr, arr.size, preSum)
console.log(res)