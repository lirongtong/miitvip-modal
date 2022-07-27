import { createApp } from 'vue'
import App from './app.vue'
import MakeitModal from 'makeit-modal'
import { Button } from 'ant-design-vue'
import 'makeit-modal/style'
import './makeit.less'

const app = createApp(App)
app.use(Button)
app.use(MakeitModal)
app.mount('#app')