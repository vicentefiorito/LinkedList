// Node factory 
const Node = (value,nextNode) => {
    this.value = null
    this.nextNode = null
    return {value,nextNode}
}

// Linked List function implementation
const LinkedList = (list) => {
    // append module
    const append = (value) => {
        // if the value is already in the list
        if(list.includes(value)) {
            console.log('Value you are trying to append is on the list already')
            return
        } else {
            list.push(value)
        }
    }

    return {append}
}

// testing
const list1 = [3,5,6]

const linkedList1 = LinkedList(list1)

const node1 = Node(5,7)

linkedList1.append(node1.value)

// console.log('Node Value --> ' + node1.value)
// console.log('Node next pointer --> ' + node1.nextNode)