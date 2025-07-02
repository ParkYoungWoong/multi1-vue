import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', // http://localhost:5173/
      component: HomePage
    },
    {
      path: '/about', // http://localhost:5173/about
      component: AboutPage
    }
  ]
})

// 1) Hash Router - https://heropy.dev/#/dashboard
// 2) HTML5 Router - https://heropy.dev/dashboard
