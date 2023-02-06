function deleteAndEarn(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length < 2) {
        return Math.max.apply(Math, nums);
    }
    var hashMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
        }
        else {
            hashMap.set(nums[i], 1);
        }
    }
    console.log(hashMap);
    return 3;
}
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
