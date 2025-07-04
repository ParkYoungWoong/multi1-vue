import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from '@/routes'
import '@/routes/guards'
import App from '@/App.vue'
import '@/main.css'

const pinia = createPinia()

createApp(App).use(pinia).use(router).use(VueQueryPlugin).mount('#app')
