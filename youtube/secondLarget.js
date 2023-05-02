const arr = [2, 8, 7, 9]
const largetValue = (arr) => {
    let firstLargetValue = Math.max(...arr)
    index = arr.indexOf(firstLargetValue)
    arr.splice(index, 1)
    let secondLargetValue = Math.max(...arr)
    return (secondLargetValue)
}
console.log(largetValue(arr))