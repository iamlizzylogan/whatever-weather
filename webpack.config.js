const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
      filename: "index.js",
      path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            template: "./index.html",
            filename: "../dist/index.html"
        })
    ]
}
