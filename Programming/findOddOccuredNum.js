let ar = [2,2,2,2, 3, 5, 4, 5, 3, 4,100];
let size = ar.length;
function findOddOccuredNum(ar, size)
{
    let res=ar[0];
    for(let i=1;i<size;i++)
    {
        res = res^ar[i]
    }
    
    return res
}
console.log(findOddOccuredNum(ar, size))