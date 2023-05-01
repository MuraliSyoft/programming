let data = [100,2000,8,2,90000,8]
// let res = new Set(data)

let res = data.filter((ele, index, arr)=>arr.indexOf(ele)!==index)
