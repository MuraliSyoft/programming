function binarySearch(arr, x) {
    let start = 0, end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === x) {
            return true;
        }
        else if (x < arr[mid]) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
    return false;
}

let arr = [20, 17, 16, 14, 13, 9, 8, 4]
let x = 9
let res = binarySearch(arr, x)
console.log(res)