const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  target: "web",
  mode: "development",  
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include:[path.resolve(__dirname,'src')]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
            {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'images/'
            }
            }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
        {
            loader: 'file-loader',
            options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
            }
        }
        ]
      }      
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: './dist',

  },  
  plugins: [
    new webpack.IgnorePlugin(/^\.\/config\.js$/),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
  ]  
};
