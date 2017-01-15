import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import {routes} from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
