var refills = require('node-refills').includePaths;
function getBourbonPaths() {
  var includePathsString = 'includePaths[]=';

  var paths = '';
  for (var x in refills) {
    paths += includePathsString + refills[x] + '&';
  }
  return paths;
}

console.log(getBourbonPaths());

module.exports = {
  entry: "./main.js",

  context: __dirname + '/src',
  output: {
    path: __dirname,
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass?" + getBourbonPaths() },
      { test: /\.json$/, loader: "json", exclude: /node_modules/ },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?stage=0' },
      { test: /\.txt$/, exclude: /node_modules/, loader: 'raw' }
    ]
  }
};
