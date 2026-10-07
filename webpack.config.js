const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForJS = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
        presets: [
            [
                "@babel/preset-react",
                {
                    runtime: "automatic"
                }
            ]
        ]
    }
};

const rulesForCSS = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
};

const rules = [rulesForJS, rulesForCSS]

module.exports = {
    entry: "./src/index.js",
   output: {
    path: path.resolve(__dirname,"build")
   },
   plugins: [
    new HtmlWebpackPlugin( {template: "src/index.html"})
   ],
   module: { rules },
   devServer: {
    open: true,
    port: 3000,
    client: {
        overlay: true
    }
   }
};