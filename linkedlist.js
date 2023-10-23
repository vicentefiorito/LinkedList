// Node factory 
const Node = (value,nextNode) => {
    this.value = null
    this.nextNode = null
    return {value,nextNode}
}

// Linked List function implementation
const LinkedList = (list) => {
    // append --> adds node to the end of the list
    const append = (value) => {
            list.push(value)
            console.log(list)
    }

    // prepend --> adds value to the beginnig of the list
    const prepend = (value) => {
            list.unshift(value)
            console.log(list)
    }

    // head --> returns the first node of the list
    const head = () => {
        const headElement = list[0]
        console.log('Head: ' + headElement)
        return headElement
    }

    // tail --> returns the last element of the list
    const tail = () => {
        const tailElement = list[list.length - 1]
        console.log('Tail: ' + tailElement)
        return tailElement
    }

    // at --> returns the node at a given index
    const at = (index) => {
        // if the index is out of bounds of the current list
        if(index >= list.length) {
            console.log('Index is out of bounds of the array')
        } else {
            console.log(list[index])
        }
    }

    // pop --> removes the last element of the list
    const pop = () => {
        list.pop()
        console.log(list)
    }

    // contains --> returns true if the passed value is in the list
    const contains = (value) => {
        if(list.includes(value)) {
            console.log('Node: ' + value + ' is in the list')
            return true
        } else {
            console.log('Node: ' + value + ' is not in the list')
            return false
        }
    }

    return {append,prepend,contains,pop,at,head,tail}
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
linkedList1.at(4)
linkedList1.head() // 8
linkedList1.tail() // 6



// console.log('Node Value --> ' + node1.value)
// console.log('Node next pointer --> ' + node1.nextNode)