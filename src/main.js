import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'


// 引入element-plus组件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";


//引入element-plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
const pinia = createPinia();

//注册所有的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}


app.use(pinia);
app.use(ElementPlus);
app.use(router).mount('#app');
