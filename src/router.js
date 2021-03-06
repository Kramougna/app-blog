import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
