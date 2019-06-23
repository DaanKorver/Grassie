import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Bestellen from './views/Bestellen.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: 'webshopbox',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/products/bestellen/:itemName',
      name: 'bestellen',
      component: Bestellen,

    },
    {
      path: '*', redirect: '/'
    }
  ]
})
