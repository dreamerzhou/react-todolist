const path = require('path');

module.exports = {
  entry: './www/app/main.jsx',
  output: {
    path: path.resolve(__dirname, './www/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './www/app')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        options: {
					presets: ['@babel/env' , '@babel/react'],
					plugins : ['@babel/plugin-transform-spread']
				}
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  watch: true,
  mode: 'development'
}