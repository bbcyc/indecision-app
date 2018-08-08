var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  } 
}

console.log(multiplier.multiply());