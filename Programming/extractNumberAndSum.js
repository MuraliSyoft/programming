let s = "23ksdk45je7"
s=s.match(/\d/g)
// s=s.match(/\d/g) 
let sum=0
for(let i=0;i<s.length; i++)
{
    sum=sum+parseInt(s[i])
}
console.log("Welcome to Programiz!", sum);