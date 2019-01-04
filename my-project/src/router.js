import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './Home/HomePage.vue';
import GymPage from './Gym/GymPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/gym',
      name: 'gym',
      component: GymPage,
    },
  ],
});
