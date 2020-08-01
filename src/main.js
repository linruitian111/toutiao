import Vue from 'vue'
//引入app组件
import App from './App.vue'
//引入vue-router 配置
import router from './router'
//引入vuex 配置
import store from './store'
//引入axios
import axios from "./common/myaxios"
//引入element ui 部分 Message
import { Message } from "element-ui"
//引入 富文本编辑器
import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);
Vue.prototype.$message = Message;
//在Vue的原型上 添加 $axios
Vue.prototype.$axios=axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
