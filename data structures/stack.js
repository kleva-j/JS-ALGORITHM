
// ES5 IMPLEMENTATION

const Stack_ES5 = () => {
  const store = [];

  const push = item => store.push(item);

  const pop = () => store.pop();

  const size = () => store.length;

  const peak = () => store[0];

  return {
    size,
    push,
    peak,
    pop
  } 
}

// ES6 IMPLEMENTATION

class Stack_ES6 {
  constructor(){
    this.store = []
  }

  push(item) {
    return this.store.push(item);
  }

  pop() {
    return this.store.pop();
  }

  size() {
    return this.store.length;
  }

  peak() {
    return this.store[0];
  }
}
