import { App } from 'vue'
import { default as Modal } from './modal'

const install = (app: App) => {
    app.use(Modal)
    return app
}

export { Modal }

export default {
    install
}
