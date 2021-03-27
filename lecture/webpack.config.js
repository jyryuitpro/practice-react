const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// process.env.NODE_ENV = 'production'; // 실서비스 : production

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval',
    resolve: {
      extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
           test: /\.jsx?/,
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
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                    'react-hot-loader/babel'
                ],
           },
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'), // C:\Users\jyryu\WebstormProjects\practice-react\lecture\dist
        filename: 'app.js',
        publicPath: '/dist/',
    }, // 출력
    devServer: {
        publicPath: '/dist/',
        hot: true,
    },
};