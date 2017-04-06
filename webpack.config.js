'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var APP = __dirname;
module.exports = {
	context:APP,
	entry:{
		app: './src/bootstrap.js',
		vendor: ['jquery', 'angular']
	},
	output:{
		path:'./dist',
		filename:'js/bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.js$/,loader:'babel',exclude:/node_modules/,
				query:{
					presets: ['es2015'],plugins: ['transform-es3-property-literals', 'transform-es3-member-expression-literals']
				}
			},
			{
	        test: /\.css$/,
	        // loader: 'style!css-loader?modules&importLoaders=1'
	        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', {publicPath: '../'})
      },
	    {
	        test: /\.(png|jpg|gif)$/,
	        loader: 'url-loader?limit=8024&name=images/[hash].[ext]'
	    },
	    {
	        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
	        loader: 'url-loader'
	    },
	    {
		    test: /\.html$/,loader: 'html-loader'
	    }
		]
	},
	plugins: [
   		new ExtractTextPlugin('css/moduleStyle.css', {allChunks: true}),
    	new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'js/[name].bundle.js'}),
    	new CopyWebpackPlugin([{
			    from: __dirname + '/src/css',
			    to: __dirname + '/dist/css'
			}])
	] 
};