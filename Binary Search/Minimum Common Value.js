/*
Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

 

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.
Example 2:

Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let binarySearch = (target, nums) => {
    let l = 0,
      r = nums.length - 1;

    while (l <= r) {
      let m = Math.floor(l + (r - l) / 2);

      if (nums[m] > target) {
        r = m - 1;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        return true;
      }
    }
    return false;
  };

  if (nums1.length > nums2.length) {
    return getCommon(nums2, nums1);
  }

  for (const num of nums1) {
    if (binarySearch(num, nums2)) {
      return num;
    }
  }
  return -1;
};

console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5]));
