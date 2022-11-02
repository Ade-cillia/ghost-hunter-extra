import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import PlayPage from '@/pages/PlayPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/play',
      name: 'PlayPage',
      component: PlayPage
    }
  ]
})
