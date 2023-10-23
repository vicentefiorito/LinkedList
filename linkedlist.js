// Node factory 
const Node = (value,nextNode) => {
    this.value = null
    this.nextNode = null
    return {value,nextNode}
}

// testing
const test1 = Node(5,7)

console.log('Node Value --> ' + test1.value)
console.log('Node next pointer --> ' + test1.nextNode)