import { App } from 'vue'
import { version } from '../package.json'
import { default as Modal } from './modal'

const install = (app: App) => {
    app.use(Modal)
    return app
}

export { Modal }

export default {
    version,
    install
}
