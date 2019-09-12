Array.prototype.bubbleSort = function() {
  let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < this.length-1; i++) {
        const that = this;
        this.forEach(function() {
          if (that[i] > that[i+1]) {
            [that[i], that[i+1]] = [that[i+1], that[i]];
            sorted = false;
          } 
        }
      );
    }
  }
  return this;
};

String.prototype.substrings = function() {
  const subStringArr = [];
  let that = this
  for (let i = 0; i < that.length; i++) {
    for (let k = i; k < that.length; k++) {
      subStringArr.push([that.slice(i, k+1)]);
    }
  }

  return subStringArr;
}
