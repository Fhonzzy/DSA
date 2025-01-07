/*
Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

 

Example 1:

Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
Example 2:

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
Example 3:

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let firstPositiveNumber = () => {
    let l = 0,
      r = nums.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (nums[mid] > 0) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return l;
  };

  let firstNegativeNumber = () => {
    let l = 0,
      r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (nums[mid] < 0) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return r
  };

  let firstPositive = firstPositiveNumber()
  let firstNegative = firstNegativeNumber()

  let pos = nums.length - firstPositive
  let neg = firstNegative + 1

  return Math.max(pos, neg)
};
// var maximumCount = function (nums) {
//   let pos = 0;
//   let neg = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       neg++;
//     } else if (nums[i] === 0) {
//       continue;
//     } else {
//       pos++;
//     }
//   }
//   return Math.max(pos, neg);
// };

console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
