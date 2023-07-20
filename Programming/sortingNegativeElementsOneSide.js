let arr = [-1, 2, 3, 4, 5, 6, -7, 8, 9, -6, 3]
let len = arr.length;
let left = 0, right = arr.length - 1;
while (left < right) {
    if (arr[left] < 0) {
        left++
    }
    else if (arr[right] > 0) {
        right--
    }
    else {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
}
console.log(arr)