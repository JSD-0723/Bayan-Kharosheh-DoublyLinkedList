const DoublyLinkedList = require("./DoublyLinkedList");

const arr = [6, 2, 7, 4, 5, 9, 1];
const list = new DoublyLinkedList();

arr.forEach((num) => list.push(num)); 
list.print(); // 6,2,7,4,5,9,1

list.pop();
list.print(); // 6,2,7,4,5,9

list.shift();
list.print(); // 2,7,4,5,9

list.unshift(3);
list.print(); // 3,2,7,4,5,9

let num = list.get(3);
console.log("the number in index 3: ",num)

let inserting = list.insert(2,1);
if(inserting){
    console.log("inserting done.")
}
list.print(); // 3,2,1,7,4,5,9

list.remove(4);
list.print(); // 3,2,1,7,5,9
