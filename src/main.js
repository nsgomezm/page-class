import { createApp } from 'vue'
import windowVars from "@/config/WindowVars";
import App from './App.vue'
import './assets/sass/app.scss'

windowVars()

createApp(App).mount('#app')
