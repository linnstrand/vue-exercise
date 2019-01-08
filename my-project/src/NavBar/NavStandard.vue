<template>
  <ul class="navbar-menu list-reset flex">
    <li class="mr-6">
      <router-link class="navbar-item" exact
                   :to="{name: 'history'}">History</router-link>
    </li>
    <li class="mr-6">
      <router-link class="navbar-item" exact
                   :to="{name: 'notes'}">Notes</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavStandard',
};
</script>

<style>
</style>
