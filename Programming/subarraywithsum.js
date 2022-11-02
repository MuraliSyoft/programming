let arr = [4, 2, 1, 2, 0]
let s = 5
let sum = 0;
let start = 0, end;

for (let j = 0; j < arr.length; j++) {
    if (arr[j] < s) {
        sum = sum + arr[j]
        console.log("each :", start, end)
        if (sum === s) {
            end = j;
            console.log("satified", start + 1, end + 1)
            break;
        }
        else if (sum > s) {
            start = j;
            sum = arr[j];
        }
    }
}
