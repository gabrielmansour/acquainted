module.exports = {
  entry: "./src/entry.js",
  output: {
    path: __dirname,
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel?stage=0' }
    ]
  }
};
