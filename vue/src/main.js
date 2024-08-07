import { createApp } from 'vue'
import App from './App.vue'
import router from './assets/js/plugins/router'
import store, { key } from "@/assets/js/plugins/store"
import common from './assets/js/lib/common'
import emitter from './assets/js/plugins/emitter'

const app = createApp(App)

app.use(router) // router 설정

app.use(store, key) // Vuex 설정

app.provide('$common',common)

app.provide('$emitter',emitter)

app.mount('#app') // app mount
