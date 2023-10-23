// Node factory 
const Node = (value,nextNode) => {
    this.value = null
    this.nextNode = null
    return {value,nextNode}
}

// Linked List function implementation
const LinkedList = (list) => {
    // append --> adds node to the end of the list
    const append = (node) => {
        // if the node is already in the list
        if(list.includes(node)) {
            console.log('Value you are trying to append is on the list already')
            return
        } else {
            list.push(node)
        }
    }

    // prepend --> adds node to the beginnig of the list
    const prepend = (node) => {
         // if the node is already in the list
         if(list.includes(node)) {
            console.log('Value you are trying to prepend is on the list already')
            return
         } else {
            list.unshift(node)
         }
    }

    return {append,prepend}
}

// testing

// initial array
const list1 = [3,5,6]

// generating Linked List
const linkedList1 = LinkedList(list1)

// test Nodes
const node1 = Node(4,7)
const node2 = Node(8,5)

linkedList1.append(node1.value) // [3,5,6,4]
console.log(list1)
linkedList1.prepend(node2.value) // [8,3,5,6,4]
console.log(list1)



// console.log('Node Value --> ' + node1.value)
// console.log('Node next pointer --> ' + node1.nextNode)