import Vue from 'vue'
import Router from 'vue-router'
import RenewalLandingPage from '@/components/RenewalLandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RenewalLandingPage',
      component: RenewalLandingPage
    }
  ]
})
