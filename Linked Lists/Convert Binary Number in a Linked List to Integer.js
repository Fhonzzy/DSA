/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.
The most significant bit is at the head of the linked list.
Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:
Input: head = [0]
Output: 0
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var getDecimalValue = function (head) {
  let arr = [];
  let cur = head;

  while (cur !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }

  const bString = arr.join("");
  return parseInt(bString, 2);
};

const LL = new ListNode(1, new ListNode(0, new ListNode(1, null)));
console.log(getDecimalValue(LL));