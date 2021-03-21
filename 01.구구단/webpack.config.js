const path = require('path');

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
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [],
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), // C:\Users\jyryu\WebstormProjects\practice-react\lecture\dist
        filename: 'app.js'
    }, // 출력
};