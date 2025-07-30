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
    constructor (val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

var list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(-1);
    let current = newList;

    while (list1 != null && list2 != null) {
        console.log('current: ', current.next)
        console.log('list1: ', list1.next)
        console.log('list2: ', list2.next)

        if (list1.val < list2.val ) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }

        current = current.next
    }

    current.next = list1 !== null ? list1 : list2

    return newList.next
};

var result = mergeTwoLists(list1, list2)

console.log('result: ', result)