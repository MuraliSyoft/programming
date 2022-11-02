let num = -152;
let rev;
if (num < 0) {
    rev = -1 * parseInt(num.toString().split("").reverse().join(''));
    console.log(rev)
}
else {
    rev = num.toString().split("").reverse()
    console.log(rev.join(''))
}
