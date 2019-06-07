console.log("Utils.js is running");

/******** 
2 kinds of exports:
  - default export(single) 
  - named exports(unlimited)
********/


// named exports
// export one at at time
export const square = (x) => x * x;

export const add = (a, b) => a +b;

export default (a,b) => a - b;

// default exports / Each file can have 1 default export
//       Named, Named, Default
// export { square, add, subtract as default }; // export all at once





