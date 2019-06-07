console.log("Person.js is running");

// export const isAdult = (age) => {
//   if (age >= 18) {
//     console.log("I am an adult. I am", age);
//     return true;
//   } else {
//     console.log("I am an child. I am", age);
//     return false;
//   }
// }
const isAdult = (age) => age >= 18;

// export const canDrink = (age) => {
//   if (age >= 21) {
//     console.log("I can drink. I am", age);
//     return true;
//   } else {
//     console.log("I cant drink. I am", age);
//     return false;
//   }
// }
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };

