<!--  -->
<template>
<div class='right'>
    <div class="right-header">
        <input type="text" placeholder="搜索站内资讯、视频或用户">
        <span>搜索</span>
    </div>
    <div class="right-footer">
        
        <span>登录后可以保存您的浏览喜好、评论、收藏，<br>并与APP同步，更可以发布微头条</span>
        
        <span>登录</span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
.right-header {
  input {
      width: 300px;
      height: 35px;
      border: 1px solid rgb(221, 221,221);
     margin-top: 20px;
      margin-left: -80px;
      
  }

  span {
      display: inline-block;
     width: 50px;
     height: 40px;
     line-height: 35px;
     background: rgb(41, 144, 215);
     font-size: 20px;
     color: #fff;
    
    
     text-align: center;
  }
}

.right-footer {
    width: 400px;
    height: 300px;
    border: 1px solid rgb(221, 221,221);
    margin-left: -80px;
    margin-top: 20px;
  span:nth-child(1){
    font-size: 12px;
    display: block;
    margin-top: 120px;
    margin-left: 10px;
    text-align: center;
    



  }
  span:nth-child(2){
      display: block;
      width: 250px;
      height: 50px;
      background:rgb(235,82,85) ;
      line-height: 50px;
      text-align: center;
      margin:20px 80px;
      border-radius: 5px;
      color: #fff;
  }
}

</style>