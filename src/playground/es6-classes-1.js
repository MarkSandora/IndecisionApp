// Class
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    //return 'Hi. I am ' + this.name + '!';
    // es6 template strings
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
} 

// Sub Class
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Call Person Constructor
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      // description = description + ` Their major is ${this.major}.`
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

// Sub Class
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age); // Call Person Constructor
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.hasLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`
    }
    return greeting;
  }
}


const me = new Student('Mark Sandora', 36, 'Computer Science');
console.log(me.getDescription());

const nomad = new Traveler('Mark Sandora', 36, 'New York');
console.log(nomad.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
