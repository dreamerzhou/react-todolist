const path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, 'app/node_modules')
        ],
        options: {
					presets: ['@babel/env' , '@babel/react'],
					plugins : ['transform-object-rest-spread']
				}
      }
    ]
  },
  watch: true,
  mode: 'development'
}