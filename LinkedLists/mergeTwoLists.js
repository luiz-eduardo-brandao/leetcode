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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(0)
    let current = dummyHead

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            current.next = new ListNode(list2.val)
            list2 = list2.next
        }

        current = current.next
    }

    current.next = list1 == null ? list2 : list1

    return dummyHead.next
};

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4) 

let l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4) 

let r1 = mergeTwoLists(l1, l2)
console.log(r1)