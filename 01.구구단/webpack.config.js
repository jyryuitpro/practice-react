const path = require('path');

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
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [],
            },
        }],
    },
    output: { // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
};