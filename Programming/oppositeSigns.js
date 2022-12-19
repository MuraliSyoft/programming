function oppositeSigns(num1, num2)
{
    return ((num1^num2)<0);
}

let num1=100, num2=200
let v = oppositeSigns(num1, num2)
if(v===true)
{
    console.log("opposite sign")
}
else
{
    console.log("Not same sign")
}


