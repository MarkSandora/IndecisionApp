// Set Up Webpack 
const path = require('path');
console.log(path.join(__dirname, 'public'));

//***/ entry -> output
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      // loader
      loader: 'babel-loader',
      test: /\.js$/, // Run babel on any js file
      exclude: /node_modules/ // except node_modules
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};


