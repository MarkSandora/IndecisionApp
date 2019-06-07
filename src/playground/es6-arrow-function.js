/* es5 function */
// const square = function (x){
//   return x * x;
// };
// function square(x){
//   return x * x;
// };
// console.log(square(8));

/* es6 arrow function */
// const squareArrow = (x) => {
//   return x * x;
// };
// const squareArrow = (x) => x * x;
// console.log(squareArrow(4));

/* Challenge - Use arrow functions */
// getFirstName('Mark Sandora') -> 'Mark'
// Create regular arrow function

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };
// console.log(getFirstName('Mark Sandora'));

// Create arrow function using shorthand syntax
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Mark Sandora'));





// function(a){
//   if(a < 10){
//       return 'valid';
//   }else{
//       return 'invalid';
//   }
// }
// Equivelent of above function
// a => (a < 10) ? 'valid' : 'invalid'