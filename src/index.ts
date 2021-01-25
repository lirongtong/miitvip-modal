import { App } from 'vue'
import { default as Captcha } from './modal'

const install = (app: App) => {
    app.use(Captcha)
    return app
}

export { Captcha }

export default {
    version: `${process.env.VERSION}`,
    install
}
