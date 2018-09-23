class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = (a, b) => {
      return a - b;
    }
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    for (let i = 0; i < indices.length - 1; i++) {
      for (let j = 1; j < indices.length; j++) {
        if (indices[i] > indices[j]) {
          let temp = indices[i];
          indices[i] = indices[j];
          indices[j] = temp;
        }
      }
    }

    for (let i = 0; i < indices.length - 1; i++) {
      for (let j = 1; j < indices.length; j++) {
        if (this.compareFunction(this.arr[indices[i]], this.arr[indices[j]]) > 0) {
          let temp = this.arr[indices[i]];
          this.arr[indices[i]] = this.arr[indices[j]];
          this.arr[indices[j]] = temp;
        }  
      }
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;