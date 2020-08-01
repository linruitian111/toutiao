<!--  -->
<template>
<div class='middle-box'>
    <div class="middle-box-title">
       <section v-for="(item,index) in tabs" :key='item.id' middle-box-title-box>
        <span :class="['middle-box-title1',{active:activeTab==item.type}]" @click="Add(item.type)">{{item.text}}</span>
       
        </section>
    </div>
    <div class="middle-box-title-content" v-show="activeTab=='tt'">
        <textarea name="" id="" cols="30" rows="10" placeholder="有什么新鲜事想告诉大家" v-model="content"></textarea>
        <div class="title-content">
        <span>图片</span>
        <span class="title" @click="faBu()">发布</span>
     </div>
    </div>
    <div class="middle-box-title-content-title3" v-show="activeTab=='article'">
      <input type="text" placeholder="请输入你的内容" class="title3" v-model="title">
 <vue-editor id="editor" v-model="htmlForEditor" class="box" use-custom-image-handler
              @image-added="handleImageAdded"> </vue-editor>
  <span class="title title1" @click="faChu()">发布</span>
          
    </div>
    <div class="middle-footer">
        <p>点击刷新</p>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { VueEditor } from "vue2-editor";
export default {
//import引入的组件需要注入到对象中才能使用
components: {
   VueEditor ,
},
data() {
//这里存放数据
return {
    tabs:[
       {id:1,text:"发微头条",type:'tt'},
       {id:2,text:"写文章",type:'article'}
    ],
    activeTab:"tt",
    content:"",
    title:"",
    htmlForEditor:""
   
};
},
//监听属性 类似于data概念
computed: {
 
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   Add(activeTab){
     this.activeTab=activeTab
   },
   // 添加图片上传的方式
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
      // 构建form表单数据
      var formData = new FormData();
      // 往表单数据中 填充 file:file 数据
      formData.append("file", file);
      this.$axios({
        url: "/aliossUpload",
        method: "POST",
        data: formData,
      })
        .then((res) => {
              let url = res.url; // Get url from response
              // Editor 是富文本编辑器的实例
              Editor.insertEmbed(cursorLocation, "image", url);
              resetUploader();
              console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    },
   faBu(){
     let content = this.content
     if(!this.content){
         this.$message({
          message: '输入不能为空！',
          type: 'warning'
        });
       return false
     }
     this.$axios.post("/createTT",{
        content:content,
        imgs:"",
        oauth_token:"KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS"
     }).then((res)=>{
       console.log(res)
     }).catch(err=>{
       console.log(err)
     })
   },
    faChu(){
      // var content = this.htmlForEditor
      let  title = this.title
     if(!this.htmlForEditor||!title){
         this.$message({
          message: '输入不能为空！',
          type: 'warning'
        });
       return false
     }
     console.log(this.htmlForEditor,title)
  this.$axios.post("/createArticle",{
    content:this.htmlForEditor,
    img:"",
    title:title,
     oauth_token:"KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS"
  }).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
    }

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
.middle-box-title {
  display: flex;
  .middle-box-title1 {
     display: inline-block;
    margin-left: 30px;
    margin-top: 30px;
    cursor: pointer;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
   
     
      
  }
  .active{
    color: skyblue;
    border-bottom: 1px solid rgb(235,82,85);

  }
}

.middle-box-title-content {
  textarea {
      width:85% ;

  }
}
.title{
   
      margin-left:410px ;
      margin-top: -20px;
    display: block;
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color:rgb(235,82,85)  ;
      color: #fff;
  }
.middle-box-title-content-title3 {
    
  .title3{
    border-width: 0px;
    color: #000;
    outline: none;
  }
  .box{
    width: 85%;
  }
 .title1{
   margin-top: 10px;
 }
  
}

.middle-footer {
  p {
      width: 500px;
      height: 30px;
      border: 1px solid skyblue;
      color: skyblue;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;
      margin-top: 20px;
      cursor: pointer;
  }
}
  
</style>