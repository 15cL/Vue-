const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:3000,
    open:true,
    proxy:'http://cloud-music.pl-fe.cn/'
  }
})
