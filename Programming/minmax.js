// let size = 6
// let arr = [1333, 11, 445, 1, 330, 3444];
// let res = arr.sort()
// console.log(arr)
// console.log(res[0], res[arr.length-1])

function minmax(arr) {
    let min = 0;
    let max = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        else if (arr[i] < min) {
            min = arr[i]
        }
    }

    console.log(`min value is ${min} and max value is ${max}`)
}

let arr = [5000, 7000, 200, 400000, 90009, 6000]
minmax(arr)