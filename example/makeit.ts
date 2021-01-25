import { createApp } from 'vue'
import App from './app.vue'
import { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'
import MakeitModal from 'makeit-modal'
import 'makeit-modal/style'
import './makeit.less'

const app = createApp(App)
app.use(Button)
app.use(MakeitModal)
app.mount('#app')