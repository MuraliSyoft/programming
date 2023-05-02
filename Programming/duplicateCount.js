let data = [2, 3, 2, 4, 5, 5]

let res = data.reduce((obj, value) => {
    if (obj[value] === undefined) {
        obj[value] = 1;
        return obj
    }
    else {
        obj[value]++;
        return obj;
    }
}, {})
console.log(res)

