let path = require("path")
let fs = require("fs")
let webpack = require("webpack")
let htmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname,"./src/main.js"),
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "bundles.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,"./src/index.html"),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"]},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
            { test:/\.vue$/, use: 'vue-loader' },
        ]
    },
    resolve:{
        alias: { //修改vue被导入时包的路径
            "vue$" : "vue/dist/vue.js"
        }
    }
    
   
        
}