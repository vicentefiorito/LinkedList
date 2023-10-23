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
            list.push(node)
            console.log(list)
    }

    // prepend --> adds node to the beginnig of the list
    const prepend = (node) => {
            list.unshift(node)
            console.log(list)
    }

    // pop --> removes the last element of the list
    const pop = () => {
        list.pop()
        console.log(list)
    }

    // contains --> returns true if the passed value is in the list
    const contains = (node) => {
        if(list.includes(node)) {
            console.log('Node: ' + node + ' is in the list')
            return true
        } else {
            console.log('Node: ' + node + ' is not in the list')
            return false
        }
    }

    return {append,prepend,contains,pop}
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
linkedList1.prepend(node2.value) // [8,3,5,6,4]
linkedList1.contains(5) // Should return true
linkedList1.pop() // [8,3,5,6]



// console.log('Node Value --> ' + node1.value)
// console.log('Node next pointer --> ' + node1.nextNode)