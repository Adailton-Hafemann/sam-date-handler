const webpack = require("webpack");
const path = require("path");
const ROOT_PATH = __dirname;

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        library: "SamDateHandler",
        libraryTarget: "umd",
        filename: "index.js",
        path: path.join(ROOT_PATH, "build")
    },
    module: {
        rules: rules()
    },
    resolve: {
        modules: [path.resolve("./node_modules"), path.resolve("./src")]
    },
    plugins: plugins()
};

function rules() {
    return [
        {
            test: /.js$/,
            exclude: /(node_modules)/,
            enforce: "pre",
            use: "jshint-loader"
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: "babel-loader"
        }
    ];
}

function plugins() {
    return [
        //make moment load only the languages defined in the second argument
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pt|en|es/)
    ];
}
