const path = require('path');


module.exports = {

    devtool: 'eval-source-map',
    entry:  './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
        }
    ]
    }, 
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        publicPath: 'auto',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development'
}