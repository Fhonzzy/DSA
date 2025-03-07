/*
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);

    let missing = arr[mid] - (mid + 1);
    if (missing < k) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l + k;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
