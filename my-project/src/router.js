import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './Home/HomePage.vue';
import GymPage from './Gym/GymPage.vue';
import WorkoutPage from './Gym/WorkoutPage.vue';
import NavGym from './NavBar/NavGym.vue';
import NavStandard from './NavBar/NavStandard.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomePage,
        navigation: NavStandard,
      },
    },
    {
      path: '/gym',
      name: 'gym',
      components: {
        default: GymPage,
        navigation: NavGym,
      },
    },
    {
      path: '/workout/:id',
      name: 'workout',
      component: WorkoutPage,
      props: true,
    },
  ],
});
