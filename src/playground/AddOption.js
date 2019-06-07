import React from 'react';

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


export default class AddOption extends React.Component {
  // OLD WAY BEFORE transform-class-properties plugin
  // constructor(props){
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.state = {
  //     error: undefined
  //   }
  // }
  // // Class Method
  // handleAddOption(e) {
  //   e.preventDefault();
  //   const option = e.target.elements.option.value.trim();
  //   const error = this.props.handleAddOption(option);
  //   this.setState(() => ({
  //     error
  //   }));
  //   // Clear Input 
  //   if (!error) {
  //     e.target.elements.option.value = '';
  //   }
  // }

  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      error
    }));
    // Clear Input 
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  } 
}