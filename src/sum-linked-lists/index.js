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
 const add = (l1, l2, l3, carry = 0) => {
    console.log('l1', l1)
    console.log('l2', l2)
    console.log('l3 entry', l3)
    console.log('carry', carry)
    console.log('----')

    if(l1?.val && l2?.val){
        const val = l1.val + l2.val + carry
        const newNode = new ListNode(val%10)
        const nextNode = add(l1.next, l2.next, newNode, Math.trunc(val/10))
        if(!l3) return nextNode
        else l3.next = nextNode
    } else if(!l1 && !l2 && carry > 0){
      const newNode = new ListNode(carry)
      l3.next = newNode
      return l3
    } else if(!l1 && !l2 && carry === 0) {
      console.log('$$$$$$$$l3 exit', l3)
      return l3
    } else if(!l2 && l1.val) {
      console.log('$$$$$$$$ exit', l1)
      return l1
    }
    console.log('l1 exit', l1)
    console.log('l2 exit', l2)
    console.log('**********l3 exit', l3)
    return l3
 }
var addTwoNumbers = function(l1, l2) {
    return add(l1, l2)
};

export default addTwoNumbers;
