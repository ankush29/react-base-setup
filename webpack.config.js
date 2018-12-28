const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const dist = path.resolve( __dirname, "dist" );

const plugins = [
  new FriendlyErrorsWebpackPlugin(),
  new CleanWebpackPlugin([dist]),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

if ( !dev ) {
  plugins.push( new BundleAnalyzerPlugin( {
    analyzerMode: "static",
    reportFilename: "webpack-report.html",
    openAnalyzer: false,
  } ) );
}

module.exports = {
  mode: dev ? "development" : "production",
  context: path.join( __dirname, "src" ),
  devtool: dev ? "none" : "source-map",
  entry: {
    app: [
    "webpack-hot-middleware/client?reload=true&&path=http://localhost:3000/__webpack_hmr",
    "./client/index.js"]
  },
  resolve: {
    modules: [
      path.resolve( "./src" ),
      "node_modules",
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
            presets: ['react-hmre']
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  output: {
    path: dist,
    filename: "[name].bundle.js",
    publicPath: '/'
  },
  plugins,
};
