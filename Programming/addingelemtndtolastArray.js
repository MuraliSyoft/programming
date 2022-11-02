let arr = [1, 2, 3, 4, 5, 6, 7]; 
let d = 2;
let n = 7;
let temp = [];

for(i=0;i<d;i++)
{
   temp.push(arr.shift())
}
console.log(arr.concat(temp))
