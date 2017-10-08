import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      children:[
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})
