const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const optimizeJsPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };

  if (isProd) {
    config.minimizer = [
      new optimizeCssPlugin(),
      // new optimizeJsPlugin()
    ]
  }

  return config
};

module.exports = {
  entry: {
    index: './src/lib/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    library: "SureWidget",
    libraryTarget: "umd"
  },
  optimization: optimization(),
  module: {
    rules: [
      {
        test: /\.styl$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          // 'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    // new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  }
};
