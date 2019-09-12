Array.prototype.uniq = function() {
  const uniqArr = [];

  this.forEach(function(num) {
    if (!uniqArr.includes(num)) {
      uniqArr.push(num);
    }
  });
  return uniqArr
}

Array.prototype.twoSum = function() {
  const sumArr = [];

  for (let i = 0; i < this.length; i++) {
    for (let k = 1; k < this.length-1; k++) {
      if ((this[i] + this[k]) === 0) {
        sumArr.push([i, k]);
      }
    }
  }
  return console.log(sumArr);
} 

//[1,2]
//[3,4]

//[1,3]
//[2,4]



Array.prototype.transpose = function() {
  const transArr = [];

  for (let i = 0; i < this.length; i++ ) {
    let subArr = [];
    let arr = this;
    for (let k = 0; k < this.length; k++) {
      subArr.push(arr[k][i]);
    }
    transArr.push(subArr);
  }
  return transArr;
}