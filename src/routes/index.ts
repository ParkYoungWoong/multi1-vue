import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import MoviesPage from './pages/MoviesPage.vue'
import MovieDetailsPage from './pages/MovieDetailsPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import SignInPage from './pages/SignInPage.vue'
import TodosPage from './pages/TodosPage.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/', // http://localhost:5173/
      component: HomePage
    },
    {
      path: '/about', // http://localhost:5173/about
      component: AboutPage
    },
    {
      path: '/movies',
      component: MoviesPage,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: ':movieId', // /movies/:movieId
          component: MovieDetailsPage
        }
      ]
    },
    {
      path: '/signin',
      component: SignInPage,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/todos',
      component: TodosPage
    },
    {
      path: '/:notFound(.*)*',
      component: NotFoundPage,
      meta: {
        layout: 'Empty'
      }
    }
  ]
})
