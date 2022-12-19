let arr1 = [3, 4, 2, 5, 3]
let arr2 = [2, 4, 3, 5, 3,6]

let ans = 0
for(let i=0;i<arr1.length; i++)
{
    ans=ans^arr1[i]
}

for(let i=0;i<arr2.length; i++)
{
    ans=ans^arr2[i]
}
console.log(ans)