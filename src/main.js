import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import {routes} from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8000/api';

export const router = new VueRouter({
  routes
});


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
