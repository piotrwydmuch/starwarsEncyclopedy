const path = require('path');
module.exports = {
   // define entry file and output
   entry: './src/index.js',
   output: {
       path: path.resolve('dist'),
       filename: 'main.js'
   },
   // define babel loader
   module: {
       rules: [
           { 
               test: /\.(js|jsx)$/,
               loader: 'babel-loader', 
               exclude: /node_modules/,
            },
            {
              test: /\.(png|jpe?g|svg)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
       ],
   }
};
