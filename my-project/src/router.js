import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './Home/HomePage.vue';
import GymPage from './Gym/GymPage.vue';
import WorkoutPage from './Gym/WorkoutPage.vue';

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
    {
      path: '/workout/:id',
      name: 'workout',
      component: WorkoutPage,
      props: true,
    },
  ],
});
