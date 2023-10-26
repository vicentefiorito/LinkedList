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
        this._size = 0 //size for an empty list
      }

    // // append --> adds node to the end of the list
     append(value) {
        // node to be inserted
        const newNode = new Node(value)
        // if the list is empty, sets the new node as the head
        if(this.listHead === null){
            this.listHead = newNode
            this._size++
        } else {
            let cur = this.listHead
            // iterates through the list to find the last element
            while(cur.nextNode !== null) {
                cur = cur.nextNode
            }
            // inserts the new node after the last element
            cur.nextNode = newNode
            this._size++
            console.log(this.listHead)
            
        }
      };

    // prepend --> adds value to the beginnig of the list
    prepend(value) {
        // creates new node
        const newNode = new Node(value)
        // sets the current head to be after the node to be inserted
        newNode.nextNode = this.listHead
        // sets the new node as the head
        this.listHead = newNode
        this._size++
        console.log(this.listHead)
      }

    // size --> returns the number of nodes in the list
     size() {
        console.log('Size: ' + this._size)
        return this._size
    }

    // head --> returns the first node of the list
    head () {
        console.log('Head--> value: ' + this.listHead.value + ' nextNode: ' + this.listHead.nextNode)
        return this.listHead
    }

    // tail --> returns the last element of the list
    tail(){
        // sets tail to the current head
        let _tail = this.listHead
        // iterates through the list to find the element that has a null nextNode, making it the last element of the list
        while(_tail.nextNode !== null) {
            _tail = _tail.nextNode
        }
        console.log('Tail: ' + _tail.value)
    }

    // at --> returns the node at a given index
    at(index) {
        // start at the head of the list
        let cur = this.listHead
        // iterates until the index
        for(let i = 0; i < index; i++) {
            cur = cur.nextNode
            // if the item doesn't exist in the list
            if(cur === null) console.log('Item does not exist in the list')
        }
        console.log('Node at: ' + index + ' is: ' + cur.value)
    }

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

linkedList.append(3) // 3 -> null
linkedList.prepend(4) // 4 -> 3 -> null
linkedList.prepend(5) // 5 -> 4 -> 3 -> null
linkedList.size() // Size: 3
linkedList.head()//Node -> value:5, nextNode:{Node:value:4, nextNode}
linkedList.tail() // 3
linkedList.at(0)






// console.log('Node Value --> ' + node1.value)
// console.log('Node next pointer --> ' + node1.nextNode)