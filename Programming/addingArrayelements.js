function addNums(nums) {
    let sum = 0;
    if (nums.length > 1) {
        for (var i = 0; i < nums.length; i++) {
            sum = sum + nums[i]
            console.log(sum)
        }
    }
}

let nums = [1, 2, 3, 4]
addNums(nums)