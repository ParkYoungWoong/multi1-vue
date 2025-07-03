import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/routes'
import '@/routes/guards'
import App from '@/App.vue'
import '@/main.css'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
