import Vue from 'vue'
import VueRouter from 'vue-router'
/* import { component } from 'vue/types/umd'
 */
const Home = () => import('@/views/Home')
const About = () => import('@/views/About')

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

/* const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 */

function configRoutes () {
  return [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
}
