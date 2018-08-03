const fullName = "Brian Berry"

const getFirstName = fullName => fullName.split(' ')[0];

const add = (a, b) => {
  console.log(arguments);
  return a + b;
}

console.log(add(55,1,1001))

