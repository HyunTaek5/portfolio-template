const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Production 빌드 시, 리액트 코드 트랜스파일링 할 시작점 설정.
  entry: './src/types.ts',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index_bundle.js'
  },

  // webpack Develop 모드 실행 시, 사용될 static 파일들 경로와 관리 방식 설정.
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 3000
  },

  // swc 연동을 위한 swc-loader 장착.
  module: {
    rules: [
      {
        test: /\.([jt]sx?)?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader'
        }
      }
    ]
  }
}
