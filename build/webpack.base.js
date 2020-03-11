const path = require('path')

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = {
  mode: "development",
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, '../src'),
      pages: path.resolve(__dirname, '../src/pages'),
      components: path.resolve(__dirname, '../src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env", {
                    "useBuiltIns": "usage",
                    "corejs": 3
                  }
                ],
                "@babel/preset-react"
              ],
              plugins: [
                ["import", {
                  libraryName: "antd",
                  // libraryDirectory: "lib", //改成es会有问题
                  style: true // `style: true` 会加载 less 文件
                }]
              ]
            }
          }
        ]
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          {
            loader: 'isomorphic-style-loader', // 同构
          },
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 1,
            }
          }
        ]
      },
      {
        test: cssModuleRegex,
        use: [
          {
            loader: 'isomorphic-style-loader', // 同构
          },
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            }
          }
        ]
      },
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: [
          {
            loader: 'isomorphic-style-loader', // 同构
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                '@primary-color': '#1890FF',
              },
              javascriptEnabled: true,
            }
          }
        ]
      },
      {
        test: lessModuleRegex,
        use: [
          {
            loader: 'isomorphic-style-loader', // 同构
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
    ]
  },
}
