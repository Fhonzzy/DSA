/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isSameTree = function (p, q) {
  let pQueue = [p];
  let qQueue = [q];

  while (pQueue.length > 0 && qQueue.length > 0) {
    let pNode = pQueue.shift();
    let qNode = qQueue.shift();

    if (!pNode && !qNode) continue;

    if (!pNode || !qNode || pNode.val !== qNode.val) return false;

    pQueue.push(pNode.left, pNode.right);
    qQueue.push(qNode.left, qNode.right);
  }
  return pQueue.length === 0 && qQueue.length === 0;
};

let p = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);
let q = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);

console.log(isSameTree(p, q));