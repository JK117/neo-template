import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import './style.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'

const app = createApp(App)
// app.config.globalProperties.$menu_options = [
//     {name: 'Flex Menu', route: 'menu', color: '#f44336'},
//     {name: 'Image Flow', route: 'flow', color: '#ffa117'},
//     // {name: '3D Demo', route: '3d', color: '#0fc70f'},
//     // {name: 'AntV G6', route: '', color: '#2196f3'},
//     // {name: '', route: '', color: '#b145e9'},
//     // {name: '', route: '', color: '#'},
// ]
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
