/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:
Input: root = [1,null,2]
Output: 2
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  if (root === null) return 0;

  let queue = [{ node: root, depth: 1 }];
  let maxDepth = 0;

  while (queue.length > 0) {
    let { node, depth } = queue.shift();
    maxDepth = Math.max(maxDepth, depth);

    if (node.left !== null) {
      queue.push({node: node.left, depth: depth + 1});
    }
    if (node.right !== null) {
      queue.push({node: node.right, depth: depth + 1});
    }
  }
  return maxDepth;
};
