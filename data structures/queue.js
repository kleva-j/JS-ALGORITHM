
// ES5 IMPLEMENTATION

const Queues_ES5 = () => {
  const store = [];

  const enqueue = item => store.push(item);

  const dequeue = () => store.shift();

  const size = () => store.length;

  const peak = () => store[0];

  return {
    enqueue,
    dequeue,
    size,
    peak,
  } 
}

// ES6 IMPLEMENTATION

class Queues_ES6 {
  constructor(){
    this.store = []
  }

  enqueue(item) {
    return this.store.push(item);
  }

  dequeue() {
    return this.store.shift();
  }

  size() {
    return this.store.length;
  }

  peak() {
    return this.store[0];
  }
}