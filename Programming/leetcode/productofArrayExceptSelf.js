let arr = [1, 2, 3, 4, 5]
let newArray = [];
for (let i = 0; i < arr.length; i++) {
    newArray[i] = 1;
    for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
            newArray[i] = newArray[i] * arr[j]
        }
    }
}
console.log(newArray)