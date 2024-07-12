import addTwoNumbers, {ListNode} from './index'

describe("addTwoNumbers", () => {
    test('adding two numbers of length 1 with no carry', () => {
      const l1 = new ListNode(7)
      const l2 = new ListNode(2)
      const l3 = new ListNode(9)
      expect(addTwoNumbers(l1, l2)).toEqual(l3);
    });

    test('adding two numbers of length 1 with carry', () => {
      const l1 = new ListNode(7)
      const l2 = new ListNode(3)

      const l3 = addTwoNumbers(l1, l2)

      expect(l3.val).toEqual(0);
      expect(l3.next.val).toEqual(1);
      expect(l3.next.next).toBeNull();
    });

    test('adding two numbers of length >1 without carry', () => {
      //l1 = 7 -> 2 -> 3
      const l1 = new ListNode(7)
      const n2 = new ListNode(2)
      const n3 = new ListNode(3)
      l1.next = n2
      n2.next = n3
      // l2 = 5 -> 4 -> 1
      const l2 = new ListNode(5)
      const n4 =  new ListNode(4)
      const n5 =  new ListNode(1)
      l2.next = n4
      n4.next=n5

      const l3 = addTwoNumbers(l1, l2)
      console.log('result', l3)
      // l3 = 2 -> 7 -> 4
      expect(l3.val).toEqual(2);
      expect(l3.next.val).toEqual(7);
      expect(l3.next.next.val).toEqual(4);
      expect(l3.next.next.next).toBeNull();
    });

    test('adding two numbers of length >1 with carry in last digit', () => {
      //l1 = 7 -> 2 -> 8
      const l1 = new ListNode(7)
      const n2 = new ListNode(2)
      const n3 = new ListNode(8)
      l1.next = n2
      n2.next = n3
      // l2 = 5 -> 4 -> 4
      const l2 = new ListNode(5)
      const n4 =  new ListNode(4)
      const n5 =  new ListNode(4)
      l2.next = n4
      n4.next=n5

      const l3 = addTwoNumbers(l1, l2)
      console.log('result', l3)
      // l3 = 2 -> 7 -> 2 -> 1
      expect(l3.val).toEqual(2);
      expect(l3.next.val).toEqual(7);
      expect(l3.next.next.val).toEqual(2);
      expect(l3.next.next.next.val).toEqual(1);
      expect(l3.next.next.next.next).toBeNull();
    });

    test('adding two numbers of differnet lengths', () => {
      //l1 = 7 -> 2 -> 8
      const l1 = new ListNode(7)
      const n2 = new ListNode(2)
      const n3 = new ListNode(8)
      l1.next = n2
      n2.next = n3
      // l2 = 5 -> 4
      const l2 = new ListNode(5)
      const n4 =  new ListNode(4)
      l2.next = n4

      const l3 = addTwoNumbers(l1, l2)
      console.log('result', l3)
      // l3 = 2 -> 7 -> 8
      expect(l3.val).toEqual(2);
      expect(l3.next.val).toEqual(7);
      expect(l3.next.next.val).toEqual(8);
      expect(l3.next.next.next).toBeNull();
    });
});
