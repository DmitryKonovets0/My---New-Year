const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js', // Путь к файлу входа должен начинаться с точки, чтобы указать текущий каталог
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // Изменено место сохранения сборки
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
