const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
            },
            {
                test: /\.s(a|c)ss$/,
                loader: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./index.html",
            filename: "../dist/index.html"
        }),
        new CopyWebpackPlugin([
            {
                from: "./assets",
                to: "../dist/assets"
            }
        ])
    ],
    resolve: {
        extensions: [".js", ".jsx", ".scss"]
    }
}
