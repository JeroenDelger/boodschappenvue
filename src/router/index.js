import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Boodschappenlijst',
    alias: '/',
    name: 'Boodschappen Lijst',
    component: () => import('../components/GroceryList.vue')
  },

  {
    path: '/Addproduct',
    name: 'Add Product',
    component: () => import('../components/Addproduct.vue'),
    props: {default: true}
  },
  {
    path: '/Changeproduct/:id',
    name: 'Change Product',
    component: () => import('../components/Changeproduct.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
