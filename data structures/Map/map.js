class Map {
  constructor() {
    this.count = 0;
    this.dataset = {};
  }

  get size() {
    return this.count;
  }

  has(key) {
    return (key in this.dataset)
  }

  entries() {
    return Object.entries(this.dataset);
  }

  forEach(callback) {
    return Object.entries(this.dataset).forEach(callback);
  }

  set(key, value) {
    if (key && value) {
      this.dataset[key] = value;
      this.count++;
    }
  }

  delete(key) {
    if (this.has(key)) {
      delete this.dataset[key];
      this.count--;
    }
  }

  get(key) {
    if (this.has(key)) {
      return this.dataset[key];
    }
    return null;
  }

  keys() {
    return Object.keys(this.dataset);
  }

  values() {
    return Object.values(this.dataset);
  }

  clear() {
    this.dataset = {};
  }
}