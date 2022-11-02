function maximSumWithContElem(arr, n) {
    let currSum = 0;
    let max = 0;
    for (let i = 0; i < n; i++) {
        currSum += arr[i];
        if (currSum > max) {
            max = currSum;
        }
        if (currSum < 0) {
            currSum = 0;
        }
    }
    return max;
}

let n = 5;
let arr = [1, 2, 3, -2, 5];
let res = maximSumWithContElem(arr, n)
console.log(res)