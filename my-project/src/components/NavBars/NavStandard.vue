<template>
  <ul class="navbar-menu list-reset flex">
    <li class="mr-6">
      <router-link
        class="navbar-item"
        exact
        :to="{name: 'admin'}"
      >
        Admin
      </router-link>
    </li>
    <!-- <li class="mr-6">
      <router-link class="navbar-item" exact
                   :to="{name: 'notes'}">Notes</router-link>
    </li> -->
  </ul>
</template>


<style>
</style>
