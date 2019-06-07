var nameVar = 'Mark';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'John';
nameLet = 'Jason'; // reassign let
console.log('nameLet', nameLet);

// Cant reassign const
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping
const fullName = 'Mark Sandora';
let firstName;
let lastName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  lastName = fullName.split(' ')[1];
  console.log(firstName, lastName);
}

console.log(firstName, lastName);
