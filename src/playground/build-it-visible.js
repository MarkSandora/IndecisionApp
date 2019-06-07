class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
  }
  handleToggleVisibility() {
		this.setState((prevState) => {
			return {
        visibility: !prevState.visibility
			};
		});
    // console.log(this.state.visibility);
	}
	render() {
		return (
      <div>
        <h1>Visibility Toggle Excercise</h1> 
        <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'hide details' : 'show details'}
        </button>
        {this.state.visibility && (
          <div>      
            <p>Hey. These are some details you can now see =)</p>
          </div>
        )}
      </div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// console.log('App.js is running!!');

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderApp();
// };
//  // Fetch Parent Element
// const appRoot = document.getElementById('app');

// // Render to screen / stateless functional component
// const renderApp = () => {
// 	const template = (
// 		<div>
//       <h1>Visibility Toggle Excercise</h1> 
//       <button onClick={toggleVisibility}>
//       {visibility ? 'hide details' : 'show details'}
//       </button>
//       {visibility && (
//         <div>      
//           <p>Hey. These are some details you can now see =)</p>
//         </div>
//       )}
// 		</div>
// 	);
// 	ReactDOM.render(template,appRoot);
// };

// renderApp();