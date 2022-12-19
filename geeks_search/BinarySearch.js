function binarySearch(arr, x)
{
    let start=0, end=arr.length-1;
    let mid;
    
    while(start<=end)
    {
        mid = Math.floor(start+(end - start)/2);
        if(arr[mid] === x){
            console.log(arr[mid])
            return true;
        }
        else if(arr[mid]<x){
            start = mid+1
        }
        else
        {
            end = mid-1
        }
    }
    return false;
}

let arr = [10,20,30,40,50,60,70,80,90,100]
let x = 600
let res = binarySearch(arr, x)
console.log(res)