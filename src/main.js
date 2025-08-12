import './assets/main.css'

import { createApp } from 'vue'
import {autoAnimatePlugin} from '@formkit/auto-animate/vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Favorites from './pages/Favorites.vue'
import OrderPages from './pages/OrderPages.vue'
import Profile from './pages/Profile.vue'
import TovarById from './pages/TovarById.vue'

const app = createApp(App)
const routes = [
	{path:'/',name : 'Home', component: Home},
	{path:'/favorites', name : 'Favorites',component: Favorites},
	{path:'/orderPages', name : 'OrderPages',component: OrderPages},
	{path:'/profile', name : 'Profile',component: Profile},
	{path:'/tovar/:id', name : 'TovarById',component: TovarById},
]
const router = createRouter({
	history:createWebHistory(),
	routes
})
app.use(router)

app.use(autoAnimatePlugin)
app.mount('#app')
