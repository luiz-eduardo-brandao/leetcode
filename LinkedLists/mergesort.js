// find middle

// merge two linked lists

// agroup these two steps

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let findMiddle = function(head) {
    let slow = head
    let fast = head.next

    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

let mergeLists = function(list1, list2) {
    let dummyHead = new ListNode()
    let current = dummyHead

    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            current.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            current.next = new ListNode(list2.val)
            list2 = list2.next
        }

        current = current.next
    }

    current.next = list1 != null ? list1 : list2
    return dummyHead.next
}

let mergesort = function(head) {
    if (head == null || head.next == null) {
        return head
    }

    let middle = findMiddle(head)
    let afterMiddle = middle.next
    middle.next = null
    let left = mergesort(head)
    let right = mergesort(afterMiddle)

    let sortedList = mergeLists(left, right)

    return sortedList
}

// [9, 3, 8, 1, 2, 7]
// [9, 3] [1, 7]
// [9] [3] [1] [7]

let list = new ListNode(9)
list.next = new ListNode(3)
list.next.next = new ListNode(8) 
list.next.next.next = new ListNode(1) 
list.next.next.next.next = new ListNode(2) 
list.next.next.next.next.next = new ListNode(7) 

let res = mergesort(list)
console.log(res)

