class Stack {
    constructor(){
        this.storage = {}
        this.tail = 0
    }
    addToStack(item){
        this.tail++
        this.storage[this.tail] = item
    }
    removeFromStack(){
        let removed = this.storage[this.tail]
        delete this.storage[this.tail]
        this.tail--
        return removed
    }
    peek(){
        return this.storage[this.tail]
    }
}

const a = new Stack()

a.addToStack('Jim')
a.addToStack('Bob')
a.addToStack('Pete')

console.log(a, a.peek())


a.removeFromStack()
console.log(a, a.peek())
