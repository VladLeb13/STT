import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import registration from "./components/registration"


const app = createApp(App).use(router)

registration(app)

app.mount('#app')
