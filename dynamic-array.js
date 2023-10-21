class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    this.length = 0;
  }

  read(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    return this.data[index];
  }

  push(val) {

    // Your code here 
  }


  pop() {

    // Your code here 
  }

  shift() {

    // Your code here 
  }

  unshift(val) {

    // Your code here 
  }

  indexOf(val) {

    // Your code here 
  }

  resize() {

    // Your code here 
  }

}


module.exports = DynamicArray;
