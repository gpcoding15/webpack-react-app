const path = require("path");

module.exports = {
    entry: "./src/index.js",
   output: {
    path: path.resolve(__dirname,"build")
   },
   module: {
    rules: [
        {
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
        }
    ]
   }
};