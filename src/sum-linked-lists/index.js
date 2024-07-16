/**
 * https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 export function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const add = (l1, l2, carry = 0) => {
    if(!l1 && !l2) {
      return carry > 0 ? new ListNode(carry) : null
    } else if(!l1 || !l2) {
      const valueNode = l1 || l2
      const val = valueNode.val + carry
      const newNode = new ListNode(val % 10)
      newNode.next = add(l1 ? l1.next : null, l2 ? l2.next : null, Math.trunc(val/10))
      return newNode
    } else {
        const val = l1.val + l2.val + carry
        const newNode = new ListNode(val%10)
        newNode.next = add(l1.next, l2.next, Math.trunc(val/10))
        return newNode
    }
 }
var addTwoNumbers = function(l1, l2) {
    return add(l1, l2)
};

export default addTwoNumbers;
