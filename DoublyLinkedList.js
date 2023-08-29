const Node = require("./Node");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      // empty linked list
      this.head = newNode;
      this.tail = newNode;
    } else {
      // general case
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return;
  }

  pop() {
    if (!this.head) {
      // empty linked list
      console.log("Linked List is empty");
    } else if (this.head === this.tail) {
      // one node
      this.head = this.head.next;
      this.tail = null;
      this.length--;
    } else {
      // general case
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
    }
    return;
  }

  shift() {
    if (!this.head) {
      // empty linked list
      console.log("Linked List is empty");
    } else if (this.head === this.tail) {
      // one node
      this.head = this.head.next;
      this.tail = null;
      this.length--;
    } else {
      // general case
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
    return;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      // empty linked list
      this.head = newNode;
      this.tail = newNode;
    } else {
      // general case
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = this.head.prev;
    }
    this.length++;
    return;
  }

  get(index) {
    if (index < 0 && index >= this.length) {
      console.log("out of range");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      console.log("out of range");
      return false;
    }

    const newNode = new Node(val);
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      current.next.prev = newNode;
      newNode.next = current.next;
      current.next = newNode;
      newNode.prev = current;

      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      console.log("out of range");
    }

    if (index === 0) {
      if (this.head === this.tail) {
        this.tail = null;
      }
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
  }
  print() {
    let current = this.head;

    if (!this.head) {
      console.log("Linked List is empty");
    } else {
      while (current) {
        console.log(current.val);
        current = current.next;
      }
    }
    console.log("-----------------------------");
  }
}

module.exports = DoublyLinkedList;
