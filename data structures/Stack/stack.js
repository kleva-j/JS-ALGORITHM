
// ES5 IMPLEMENTATION

const Stack_ES5 = () => {
  const store = [];

  const push = item => store.push(item);

  const pop = () => store.pop();

  const size = () => store.length;

  const peak = () => {
    const length = store.length;
    return store[length - 1];
  };

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
    this.store = [];
  }

  push(item) {
    return this.store.push(item);
  }

  pop() {
    if (this.count === 0) {
      return;
    }
    return this.store.pop();
  }

  get size() {
    return this.store.length;
  }

  peak() {
    const length = this.store.length;
    return this.store[length - 1];
  }
}

module.exports = {
  Stack_ES5,
  Stack_ES6
};
