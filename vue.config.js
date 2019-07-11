const path = require('path')
module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'olmap',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  productionSourceMap: false,
  // 是否生成.map文件
  devServer: {
    port: 8081,
    // 设置代理
    proxy: {
      '/rest': {
        // target: 'http://115.28.223.20:9000/rest',
        // target: 'http://192.168.7.194:9000/rest',
        target: 'http://118.24.81.222:8900/rest',
        // target: 'http://192.168.7.194:9000/rest',
        changeOrigin: true,
        pathRewrite: {
          '^/rest': ''
        }
      },
      '/iserver': {
        target: 'http://192.168.7.255:8090/iserver',
        changeOrigin: true,
        pathRewrite: {
          '^/iserver': ''
        }
      }
    }
  },
  // vscode调试 必须开启
  configureWebpack: config => {
    config.devtool = 'source-map' // 调试 时需要开启
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('c', resolve('src/components'))
      .set('v', resolve('src/views'))
      .set('u', resolve('src/utils'))
      .set('cg', resolve('src/config'))
    config.when(process.env.NODE_ENV === 'production',
      // 为生产环境修改配置...
      config => { config.devtool(undefined) },
      // 为开发环境修改配置...
      config => { config.devtool('inline-source-map') }
    )
  }
}

function resolve (dir) {
  return path.join(__dirname, dir)
}
