const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundled file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Matches JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Matches CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Matches image files
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to resolve
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Directory for static files
    },
    compress: true,
    port: 3000, // Port for development server
  },
  mode: 'development', // Change to 'production' for production builds
};
