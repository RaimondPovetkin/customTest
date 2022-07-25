import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueTheMask from 'vue-the-mask'

const app =createApp(App)

app
    .use(store)
    .use(VueTheMask)
    .mount('#app')
