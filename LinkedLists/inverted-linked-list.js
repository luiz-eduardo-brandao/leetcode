/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let new_list = null

    while (head != null) {
        let next_node = head.next
        head.next = new_list
        new_list = head
        head = next_node
    }

    return new_list
};

// https://leetcode.com/problems/reverse-linked-list/