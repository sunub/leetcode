"use strict";
function canJump(nums) {
    let maxJump = nums[0];
    while (maxJump < nums.length - 1) {
        if (nums[maxJump] === 0) {
            break;
        }
        else {
            maxJump += nums[maxJump];
        }
    }
    if (maxJump >= nums.length - 1) {
        return true;
    }
    else if (maxJump < nums.length - 1) {
        let inRangeMaxJump = 0;
        for (let i = 1; i < maxJump; i++) {
            if (inRangeMaxJump < nums[i]) {
                inRangeMaxJump = nums[i];
            }
        }
        while (inRangeMaxJump < nums.length - 1) {
            if (nums[inRangeMaxJump] === 0) {
                break;
            }
            else {
                inRangeMaxJump += nums[inRangeMaxJump];
            }
        }
        return inRangeMaxJump >= nums.length - 1 ? true : false;
    }
}
console.log(canJump([1, 1, 2, 2, 0, 1, 1]));
//# sourceMappingURL=app.js.map