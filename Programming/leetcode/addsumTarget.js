var twoSum = function (nums, target) {
    const arr = {}
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i]
        if (need in arr) {
            return [arr[need], i]
        }
        arr[nums[i]] = i
    }
};