class Counter extends React.Component {
  constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		// default state object
		this.state = {
			count: []
		};
	}
	componentDidMount() {
		const stringCount = localStorage.getItem('count');
		const count = parseInt(stringCount, 10);
		if (!isNaN(count)) {
			this.setState(() => ({count: count}));
		}
	}
	componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
		// console.log('handleAddOne');
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
    // console.log('handleMinusOne');
	}
	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
		// console.log('handleReset');
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
// 	count++;
// 	console.log('addOne', count);
// 	renderCounterApp();
// };
// const minusOne = () => {
// 	count--;
// 	console.log('minusOne', count);
// 	renderCounterApp();
// };
// const reset = () => {
// 	count = 0;
// 	console.log('reset', count);
// 	renderCounterApp();
// };

// // Fetch Parent Element
// const appRoot = document.getElementById('app');

// // Render to screen
// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>reset</button>
// 		</div>
// 	);
// 	ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();