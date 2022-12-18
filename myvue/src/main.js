import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import settings from "@/settings"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import 'font-awesome/css/font-awesome.min.css'
import {$SetToken} from "@/utils/request";



//刷新时检查是否要更新token
let token = sessionStorage.getItem('token')
if (token) {
    $SetToken(token)
}

const app = createApp(App)
app.use(store).use(router).use(Antd).mount('#app')
app.config.globalProperties.$settings = settings