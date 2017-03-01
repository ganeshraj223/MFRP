var webpack = require("webpack"),
	path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
	entry : SRC_DIR + "/app/index.js",
	output : {
		path : DIST_DIR + "/app",
		filename : "bundle.js",
		publicPath : "/app/"
	},
	module : {
		loaders : [
			{
				test : /\.js?/,
				include : SRC_DIR,
				loader : "babel-loader",
				query : {
					presets : ["react","es2015","stage-2"]
				}
			},
			{
				test:/\.(jpg|png)$/,
				loader : "file-loader",
				options : {
					name: "[path][name].[hash].[ext]"
				}
			},
			{
                    test: /\.s?css$/,
                    loader:["style-loader", "css-loader"],
                    include: SRC_DIR
            },
            {
                    test: /\.json$/, 
                    loader: "json-loader" 
            }
		]
	} 
}; 
module.exports = config;