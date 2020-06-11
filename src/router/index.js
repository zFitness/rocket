import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexLayout',
    component: () => import('../views/layout/Layout.vue'),
    redirect: '/rockets',
    children: [
      {
        path: '/rockets',
        name: 'RocketList',
        component: () => import('../views/home/Home.vue'),
      },
      {
        path: '/rocket/:id',
        name: 'rocket',
        component: () => import('../views/rockets/Rocket.vue'),
        props: { default: true },
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
