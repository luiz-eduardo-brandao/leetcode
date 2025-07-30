class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        const new_node = new Node(value);
        new_node.next = this.head;
        if (this.head !== null) {
            this.head.prev = new_node;
        } else {
            this.tail = new_node;
        }
        this.head = new_node;
    }

    addToEnd(value) {
        const new_node = new Node(value);
        new_node.prev = this.tail;
        if (this.tail !== null) {
            this.tail.next = new_node;
        } else {
            this.head = new_node;
        }
        this.tail = new_node;
    }

    removeFromFront() {
        if (this.head === null) return null;

        const removed = this.head;
        this.head = this.head.next;

        if (this.head !== null) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        return removed.value;
    }

    removeFromEnd() {
        if (this.tail === null) return null;

        const removed = this.tail;
        this.tail = this.tail.prev;

        if (this.tail !== null) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        return removed.value;
    }

    printList() {
        let curr = this.head;
        const values = [];
        while (curr !== null) {
            values.push(curr.value);
            curr = curr.next;
        }
        console.log(values.join(" <-> "));
    }
}

const list = new DoublyLinkedList();

// Testes: Adicionando ao final
list.addToEnd(1);
list.addToEnd(2);
list.addToEnd(3);


list.printList(); // Esperado: 1 <-> 2 <-> 3

// Testes: Adicionando ao início
list.addToFront(0);
list.addToFront(-1);
list.printList(); // Esperado: -1 <-> 0 <-> 1 <-> 2 <-> 3


console.log(list)

// Remover do início
console.log("Removido do início:", list.removeFromFront()); // -1
list.printList(); // Esperado: 0 <-> 1 <-> 2 <-> 3

// Remover do final
console.log("Removido do final:", list.removeFromEnd()); // 3
list.printList(); // Esperado: 0 <-> 1 <-> 2

// Remover todos
list.removeFromFront(); // 0
list.removeFromFront(); // 1
list.removeFromFront(); // 2
console.log("Lista vazia:");
list.printList(); // Esperado: (sem saída)
