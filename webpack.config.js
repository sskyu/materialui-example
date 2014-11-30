var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'jsx-loader?harmony'
            }
        ]
    },
    resolve: {
        extentions: ['', '.js', '.jsx']
    }
};