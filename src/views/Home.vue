<!--  -->
<template>
<div class='home'>
  <div class="home-title">
    <span>头条</span>
  </div>
  <!-- 主页的内容 -->
  <div class="home-content">
    <div class="home-content-left">
      <Navigator></Navigator>
    </div>
    <div class="home-content-middle">
      <middle></middle>
    </div>
    <div class="home-content-right">
     <right></right>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Navigator from "../components/Navigator"
import middle from "../components/middle"
import right from "../components/right"

export default {
  
//import引入的组件需要注入到对象中才能使用
components: {
  Navigator,
  middle,
  right,
},
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
async mounted() {
 let res = await this.$axios.get("/getArticles",{
    params:{
      lastid:0,
      type:"TT",
      page:1,
      number:20
    }
  // }).then(res=>{
  //   console.log(res)
  // }).catch((err)=>{
  //   console.log(err)
  // })
 })
  console.log(res)
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
<style lang="less" scoped >
.home {
.home-title {


  width: 100%;
  height: 30px;
  background: #000;
    span {
     font-size: 18px;
     color:#ccc;
     margin-left: 5px;
    }
  }
 .home-content {
   width: 80vw;
   display: flex;
   margin: auto;
   justify-content: space-between;
   
 .home-content-left {
    flex: 1;
  }

  .home-content-middle {
    flex: 2;
  }

  .home-content-right {
     flex: 1;

  } 
}
}


</style>
