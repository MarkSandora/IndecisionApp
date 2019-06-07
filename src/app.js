console.log("App.js is running!!!!");

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


class OldSyntax {
  constructor() {
    this.name = 'Mark';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My name is ${this.name}`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

/******* Before / After  transform-class-properties plugin*/

class NewSyntax {
  name = 'Mike';
  getGreeting = () => {
    return `Hi. My name is ${this.name}`;
  }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting();
console.log(newGetGreeting);