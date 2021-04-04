const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 실서비스 : hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: { // 입력
        app: ['./client'],
    },
    module: { // 모듈적용
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'],
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
        new webpack.LoaderOptionsPlugin({debug: true}),
    ],
    output: { // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
};