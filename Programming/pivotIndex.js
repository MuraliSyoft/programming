
 var pivotIndex = function(nums) {
    
    if(nums.length === 0) return -1;
    if(nums.length === 1) return 0;
    
    let leftSum = 0;
        
    const totalSum = nums.reduce((acc, cur) => acc + cur);
    
    for(let i=0;i<nums.length; i++)
        {
            if(totalSum - leftSum - nums[i] === leftSum){
                return i
            }
            leftSum += nums[i]
        }
    return -1;
};