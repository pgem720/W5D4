Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// Testing function for above code:

function test(num1, num2) {
  return num1 * num2;
}

Array.prototype.myMap = function(callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

Array.prototype.myReduce = function(callback, initialValue) {
    let total = this[0];
    if (initialValue) {
    total = initialValue;
    }
  
  this.myEach(function(ele) {
    total = callback(ele, total)
  });
  return total;
};