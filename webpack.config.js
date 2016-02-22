//Need us use npm to install:
// npm install babel-preset-es2015
// npm install babel-loader

module.exports = {
    devtool: 'eval-source-map',
    entry: "./app/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
       loaders: [{ test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }],
    }
};
