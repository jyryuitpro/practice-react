const path = require('path');

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

    output: {
        path: path.join(__dirname, 'dist'), // C:\Users\jyryu\WebstormProjects\practice-react\lecture\dist
        filename: 'app.js'
    }, // 출력
};