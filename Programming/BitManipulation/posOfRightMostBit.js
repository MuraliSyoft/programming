function getRightMostSetBit(n)
{
    if(n==0)
        return 0;
    return Math.log2(n&-n)+1
}

function posOfRightMostBit(m,n)
{
    return getRightMostSetBit(m^n)
}

let m=8, n=2
let res = posOfRightMostBit(m,n)
console.log(res)