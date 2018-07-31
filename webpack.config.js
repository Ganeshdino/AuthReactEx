const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode : 'development',
    entry : {
        main : './src/index.js'
    },
    resolve : {
        extensions : ['.js','.jsx']
    },
    module : {
       rules : [
           {
               test : /\.jsx?$/,
               use : [{
                   loader : 'babel-loader',
                   options : {
                       "presets" : [
                           /*["env", {
                               "targets" : {
                                   "browsers" :[
                                       "> 1%",
                                       "last 2 versions"
                                   ]
                               }
                           }],*/
                           "env",
                           "react",
                           "stage-2"
                       ]
                   }
               }],
               exclude : /node_modules/
           },
           {
               test : /\.css$/,
               use : [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders:1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident : 'postcss',
                            plugins : () => {
                                autoprefixer( {
                                    "browsers" : [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            }
                        }
                    }
               ],
               exclude : /node_modules/
            },
          {
              test : /\.png|.jpe?g|gif|svg/,
              loader : 'url-loader'
          }
       ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname + '/src/index.html'),
            filename : 'index.html',
            inject : 'body'
        })
    ],
    output: {
        path : path.resolve(__dirname + '/dist'),
        filename : 'bundle.js'
    }
}