

//1. prime or not
const num = 19
let isPrime = true;

if (num === 1) {
    console.log("NOt prime and composite")
}
else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`numer ${num} is a prime`)
    }
    else {
        console.log(`numer ${num} is not prime ${num}`)
    }
}
else {
    console.log("NOT prime")
}


