import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";


const app = createApp(App)
app.config.globalProperties.$http = axios
axios.defaults.baseURL = 'http://localhost:3000'

app.mount('#app')
