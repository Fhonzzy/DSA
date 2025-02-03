/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:
Input: list1 = [], list2 = []
Output: []
Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode()
  let tail = dummy

  while(l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
        tail.next = l1
        l1 = l1.next
    } else {
        tail.next = l2
        l2 = l2.next
    }
    tail = tail.next
  }
  tail.next = l1 !== null ? l1 : l2
  return dummy.next
};
