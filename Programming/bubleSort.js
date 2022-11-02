let temp;
function kthElm(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i) - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        console.log(arr)
    }
    return arr
}


let arr = [15, 14, 13, 12, 11]
arr = kthElm(arr)
console.log(arr)