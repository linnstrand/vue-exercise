import Vue from 'vue';
import Router from 'vue-router';
import AdminPage from './Admin/AdminPage.vue';
import HomePage from './Home/HomePage.vue';
import GymPage from './Gym/GymPage.vue';
import WorkoutPage from './Gym/WorkoutPage.vue';
import WorkoutCreate from './Gym/WorkoutCreate.vue';
import ExerciseList from './Gym/ExerciseList.vue';
import NavGym from './NavBar/NavGym.vue';
import NavStandard from './NavBar/NavStandard.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomePage,
        navigation: NavStandard,
      },
    }, {
      path: '/admin',
      name: 'admin',
      components: {
        default: AdminPage,
        navigation: NavStandard,
      },
      meta: { requiresAuth: true },
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
      path: '/workout/create',
      name: 'create',
      components: {
        default: WorkoutCreate,
        navigation: NavGym,
      },
    },
    {
      path: '/workout/:id',
      name: 'workout',
      components: {
        deafault: WorkoutPage,
        navigation: NavGym,
      },
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: ExerciseList,
    },
  ],
});

// TODO use token from backend when available.
const user = { isAdmin: true };
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (user.isAdmin) {
      next();
    } else {
      next(false);
    }
  } else {
    next();
  }
});

export default router;
