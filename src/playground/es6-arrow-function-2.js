// arguments object - no longer bound with arrow functions
// const add = (a, b) => {
//   // console.log(arguments);
//   return a + b;
// };
// console.log(add(55, 1, 1001));

// this keyword - no longer bound
// const user = {
//   name: 'Mark',
//   cities: ['New York', 'Boston', 'Philadelphia'],
//   printPlacesLived() {
//     console.log(this.name);
//     console.log(this.cities);

//     const cityMessages = this.cities.map((city) =>{
//       return this.name + ' has lived in ' + city;
//     });
//     return cityMessages;

//     return this.cities.map((city) => this.name + ' has lived in ' + city);

//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city);
//     });
//   }
// };

// console.log(user.printPlacesLived());

// challenge area
const multiplier = {
// number - array of numbers
  numbers: [10, 20, 30],
// multiplyBy - single number
  multiplyBy: 3,
// multiply method - return new array where numbers have been multiplied
  multiply() {
   return this.numbers.map((x) => this.multiplyBy * x);
  }
};

console.log(multiplier.multiply()); 