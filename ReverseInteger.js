// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

// Constraints:

// -231 <= x <= 231 - 1

var reverse = function (x) {

  if (x > (231 - 1) || (x < -231)) {
    return 0;
  }

  let finalNums = [];
  let result;

  let nums = x.toString().split("");

  for (var i = nums.length - 1; i > 0; i--) {
    if (nums[nums.length - 1] === '0') {
      continue;
    }
    finalNums.push(nums[i]);
  }

  result = finalNums.join()
  return parseInt(result);
};