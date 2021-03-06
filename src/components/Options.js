import React from 'react';
import Option from './Option';

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

export default Options;

/*
// class based component
class Options extends React.Component {
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
}
*/