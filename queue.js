function createQueue(){
    const queue = []
    return {
        // add or enqueue returns the first element
        enqueue(item){
            queue.unshift(item)
        },
               // remove or dequeue
        dequeue(item) {
            return queue.pop()
        },
             //peek
        peek(){
            return queue[queue.length - 1]
        },
        // length
        
        get length() {
            return queue.length
        },
        //is Empty
        isEmpty() {
            return queue.length === 0
        }
    }
}

const q = createQueue()

q.enqueue('Probability of success exists')
q.enqueue('Perfection dosen\'t exit so don\'t weight for it')
q.enqueue('Be Happy')
q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.isEmpty())
// console.log(q.peek())
