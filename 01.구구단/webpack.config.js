const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 실서비스 : production
    devtool: 'eval', // 실서비스 : hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                          browsers: ['> 1% in KR', 'last 2 chrome versions'], // browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: [],
            },
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        path: path.join(__dirname, 'dist'), // C:\Users\jyryu\WebstormProjects\practice-react\lecture\dist
        filename: 'app.js'
    }, // 출력
};