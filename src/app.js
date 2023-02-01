var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function minCostClimbingStairs(cost) {
    var mountain = __spreadArray(__spreadArray([0], cost, true), [0], false);
    var ptr1 = 0, ptr2 = 1;
    var length = mountain.length - 1;
    var minCost = new Array(2).fill(0);
    for (var i = 0; i < length; i++) {
        var minJump1 = void 0, minJump2 = void 0;
        if (ptr2 + 1 < length && ptr2 + 2 < length) {
            if (mountain[ptr2 + 1] > mountain[ptr2 + 2]) {
                minJump1 = ptr2 + 2;
            }
            else if (mountain[ptr2 + 1] < mountain[ptr2 + 2]) {
                minJump1 = ptr2 + 1;
            }
            else {
                minJump1 = ptr2 + 2;
            }
            minCost[1] += mountain[minJump2];
            ptr2 = minJump2;
        }
        if (ptr1 + 1 < length && ptr1 + 2 < length) {
            if (mountain[ptr2 + 1] > mountain[ptr2 + 2]) {
                minJump1 = ptr2 + 2;
            }
            else if (mountain[ptr2 + 1] < mountain[ptr2 + 2]) {
                minJump1 = ptr2 + 1;
            }
            else {
                minJump1 = ptr2 + 2;
            }
            minCost[0] += mountain[minJump1];
            ptr1 = minJump1;
        }
    }
    return Math.min.apply(Math, minCost);
}
console.log(minCostClimbingStairs([0, 1, 1, 1]));
