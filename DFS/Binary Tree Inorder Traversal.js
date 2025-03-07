/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]

Output: [1,3,2]

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
 * @return {number[]}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var inorderTraversal = function (root) {
  let res = [];

  let traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return res;
};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));
console.log(inorderTraversal(root));

