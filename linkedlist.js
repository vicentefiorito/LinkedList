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
        }
      };

    prepend(value) {
        // creates new node
        const newNode = new Node(value)
        // sets the current head to be after the node to be inserted
        newNode.nextNode = this.listHead
        // sets the new node as the head
        this.listHead = newNode
        this._size++
      }

    size() {
        console.log('Size: ' + this._size)
        return this._size
    }

    head () {
        console.log('Head--> value: ' + this.listHead.value + ' nextNode: ' + this.listHead.nextNode)
        return this.listHead
    }

    tail(){
        // sets tail to the current head
        let _tail = this.listHead
        // iterates through the list to find the element that has a null nextNode, making it the last element of the list
        while(_tail.nextNode !== null) {
            _tail = _tail.nextNode
        }
        console.log('Tail: ' + _tail.value)
    }

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

    pop() {
        // set to the current list head
        let cur = this.listHead
        // set to the previous node, in this case null
        let prev = null
        // iterates through the list to find the last element
        while(cur.nextNode !== null) {
            prev = cur
            cur = cur.nextNode
        }
        // after iterating, delete the node by setting the next node of the previous to be null
        prev.nextNode = null

    }

    contains(value) {
        // sets to the current head
        let cur = this.listHead
        // iterate through the list
        while(cur !== null) {
            // checks to see if the value of the current node is the target
            if(cur.value === value) {
                console.log("Value has been found")
                return true
            }
            cur = cur.nextNode
        }
        // return false otherwise
        console.log("Value is not in the list")
        return false
    }

    find(value) {
        // sets current head
        let cur = this.listHead
        let index = 0 
        // iterates through the list
        while(cur !== null) {
            // if the value is found, return the index
            if(cur.value === value) {
                console.log('Node with value: ' + value + ' was found at index: ' + index)
                return index
            }
            cur = cur.nextNode
            index++
        }
        // if the value is not found in the list
        console.log('Value was not found in the list')
        return null
    }

    toString() {
        let list = ''
        let cur = this.listHead
        while(cur !== null) {
            list += '(' + cur.value + ')' + ' -> '
            cur = cur.nextNode
        }
        // adds the last null at the end to signify the end of the list
        list +='null'
        console.log(list)
        return list
    }

    insertAt(value,index) {
        // if list is empty, add to the beginning
        if(this.listHead === null){
            this.prepend(value)
        } else{
            let cur = this.listHead
            let prev = null
            // find where the new node is going to be inserted
            for(let i=0;i<index;i++){
                prev = cur
                cur = cur.nextNode
                // if the index is too big for the current list just append at the end
                if(cur === null){
                    break;
                }
            }
            // after finding the index, update pointers and insert new node
            let node = new Node(value)
            prev.nextNode = node
            node.nextNode = cur
        }

    }

    removeAt(index){
        // if the list is empty
        if(this.listHead === null){
            console.log('Can"t remove from empty list')
            return
        } else {
            // gets the current head
            let cur = this.listHead
            let prev = null

            // iterates until the index is found
            for(let i=0; i<index;i++) {
                prev = cur
                cur = cur.nextNode
                // if the index is outside of the size of the list
                if(cur === null){
                    console.log('No item for this index was found!')
                }
            }
            // skip over the current node, as we are trying to delete it at the index.
            prev.nextNode = cur.nextNode
        }
    }


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
linkedList.at(0) // 5
linkedList.pop() // pop 3, list should be 5->4->null
linkedList.contains(4) //True
linkedList.find(5)
linkedList.insertAt(7,3) // 5 -> 4 -> 7 -> null
linkedList.insertAt(6,2)
linkedList.toString()
linkedList.removeAt(2)
linkedList.toString()

