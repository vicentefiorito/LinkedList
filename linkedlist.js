// Node class
class Node {
    constructor(value) {
        this.value = value || null
        this.nextNode = null
    } 
}

// Linked List class implementation
class LinkedList {
    constructor() {
        this.listHead = null;
      }

    // // append --> adds node to the end of the list
    //  append = (value) => {
    //     const node = Node(value, null);
    //     console.log(node)
    //     // looks for the last element of the list
    //     current = list.nextNode
    //     console.log(current)

    //   };

    // prepend --> adds value to the beginnig of the list
    prepend(value) {
        // creates new node
        const newNode = new Node(value)
        // sets the current head to be after the node to be inserted
        newNode.nextNode = this.listHead
        // sets the new node as the head
        this.listHead = newNode
        console.log(this.listHead)
      }
    // // size --> returns the number of nodes in the list
    //  size = () => {
    //     const _size = list.length
    //     console.log('Size: ' + _size)
    //     return _size
    // }

    // // head --> returns the first node of the list
    // const head = () => {
    //     const _head = list[0]
    //     console.log('Head: ' + _head)
    //     return _head
    // }

    // // tail --> returns the last element of the list
    // const tail = () => {
    //     const _tail = list[list.length - 1]
    //     console.log('Tail: ' + _tail)
    //     return _tail
    // }

    // // at --> returns the node at a given index
    // const at = (index) => {
    //     // if the index is out of bounds of the current list
    //     if(index >= list.length) {
    //         console.log('Index is out of bounds of the array')
    //     } else {
    //         console.log(list[index])
    //     }
    // }

    // // pop --> removes the last element of the list
    // const pop = () => {
    //     list.pop()
    //     console.log(list)
    // }

    // // contains --> returns true if the passed value is in the list
    // const contains = (value) => {
    //     if(list.includes(value)) {
    //         console.log('Node: ' + value + ' is in the list')
    //         return true
    //     } else {
    //         console.log('Node: ' + value + ' is not in the list')
    //         return false
    //     }
    // }

    // // find --> returns the index of the node containing value, or null if not found
    // const find = (value) => {
    //     const index = list.indexOf(value)
    //     console.log(index)
    //     return index
    // }

    // // toString --> stringifies the linked list 
    // const toString = () => {
    //     let res = ''
    //     for(i = 0; i < list.length; i++) {
    //         // res += '( ' + node.value + ' ) -> ' + ' ( ' + node.nextNode + ' ) ->' 
    //     }
    //     res += ' null'
    //     console.log(res)
    //     return res
    // }


}

// testing

// empty list
const linkedList = new LinkedList()
linkedList.prepend(4) // 4 -> null
linkedList.prepend(3) // 3 -> 4 -> null





// console.log('Node Value --> ' + node1.value)
// console.log('Node next pointer --> ' + node1.nextNode)