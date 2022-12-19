let n = 15;
let count = 0;
while (n != 0) {
    n = n & n << 1
    count++
}
console.log(count)