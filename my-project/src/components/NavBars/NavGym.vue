<template>
  <ul class="navbar-menu list-reset flex">
    <li class="mr-6">
      <router-link class="navbar-item"
                   exact
                   :to="{name: 'create'}">
        New Workout
      </router-link>
    </li>
    <li class="mr-6">
      <router-link class="navbar-item"
                   exact
                   :to="{name: 'collection'}">
        My Workouts
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavGym',
};
</script>
