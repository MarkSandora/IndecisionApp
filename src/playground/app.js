/*** Webpack import practice */
// import './utils.js';
// import subtract, { square, add } from './utils.js';

// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 30));

// import isSeniorCitizen, { isAdult, canDrink } from './person.js';
// console.log(isAdult(17));
// console.log(canDrink(21));
// console.log(isSeniorCitizen(64));

/***
// Importing NPM Modules
// Install > Import > Use
import validator from 'validator';

console.log(validator.isEmail('test@gmail.com'));
****/

// import React from 'react';
// import ReactDOM from 'react-dom';

// const template = <p>This is JSX from webpack</p>;
// ReactDOM.render(template, document.getElementById('app'));




// stateless functional component
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};


// class based component
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  // LifeCycle Methods
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) { 
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //If invalid Json do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
    this.setState(() => ({
      options: []
    }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option, 'handlePick!');
  }
  handleAddOption(option){
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }

    // this.setState((prevState) => {
    //   return {
    //     options:  prevState.options.concat([option])
    //   };
    // });
    this.setState((prevState) => ({
      options:  prevState.options.concat([option])
    }));

  }
  render () {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}/>
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}/>
        <AddOption  
        handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

/*IndecisionApp.defaultProps = {
  options: []
};*/

// stateless functional component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// class based component
/*
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}*/

// stateless functional component
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
      What should I do?
      </button>
    </div>
  );
};

// class based component
/*class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
        What should I do?
        </button>
      </div>
    );
  }
}*/

// stateless functional component
const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started</p>}
    {				
      props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option} 
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
  );
};

// class based component
/*class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {				
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  } 
}*/

// stateless functional component
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}>
        remove
      </button>
    </div>
  );
};


// class Option extends React.Component {
/*  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  } 
}*/

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  // Class Method
  handleAddOption(e) {
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
  }
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

// stateless functional component
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

