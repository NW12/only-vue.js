import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router'

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerConfig(router)
let app = Vue.extend({});
router.start(app, "#app");
window.router = router;