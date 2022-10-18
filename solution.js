const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

//Node
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

//Stack
class Stack{
  constructor(top=null){
    this.top = top;
  }
 
  push(data){
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  size(){
    let count = 0;
    let node = this.top;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  pop(){ 


  }

  isEmpty() {
    return this.top === null;
  }

  findMin(){

  }

  peek(){
    if(this.top == null){
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if(item){
      let newItem = item.nextl
      this.top = newItem;
      return item;
    }
  }

  sort(){

  }
}

//Queue
class Queue{
  constructor(){
    this.first = first;
    this.last = last;
    this.count = 0;
  }

  enqueue(){
    let newItem = new Node(data);
    if(!this.first){
      this.first = newItem;
      this.last = newItem;
    }else{
      this.last.next = newItem;
      this.last = newItem
    }
    return ++this.size;
  }

  isEmpty(){
    return this.first === null;
  }
}

const stack = new Stack();
for(let i = 0; i < nums.length; i++){
  stack.push(nums[i])
}
// console.log(stack.isEmpty())

// const queue = new Queue();
// for(let i = 0; i < nums.length; i++){
//   queue.enqueue(nums[i])
// }

module.exports = {
  Node,
  Queue,
  Stack,
};
