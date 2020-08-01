module.exports={
    lintOnSave:false,
    publicPath:"./",
    productionSourceMap:false,//默认不生成 sourcemap 文件 就是源代码的文件
    devServer:{
        proxy:'http://tt.linweiqin.com/api/tt/' //转发地址

    }
}