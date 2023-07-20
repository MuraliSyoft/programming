function removeKthElement(arr, len, removeElem) {
    let sortedArr = arr.sort((a, b) => { return a - b })
    for (let i = 0; i < len; i++) {
        if (removeElem === sortedArr[i]) {
            sortedArr.splice(i, 1);
        }
    }
    console.log(sortedArr)
}

let arr = [7, 2, 3, 8, 1]
let len = arr.length
let removeElem = 1
removeKthElement(arr, len, removeElem)