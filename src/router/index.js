import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/homepage',
        name: 'Homepage',
        component: HelloWorld
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
