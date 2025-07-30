class MinStack {
    constructor () {
        this.stack = []
        this.minStack = []
    }

    push(val) {
        this.stack.push(val)

        if (this.minStack.length > 0) {
            val = Math.min(this.minStack[this.minStack.length], val)
        }

        this.minStack.push(val)
    }

    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    top() {
        return this.stack[this.length]
    }

    getMin() {
        return this.minStack[this.length]
    }
}