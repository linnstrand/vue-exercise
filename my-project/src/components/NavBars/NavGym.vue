<template>
  <ul class="navbar-menu list-reset flex">
    <li class="mr-6">
      <router-link class="navbar-item" exact :to="{name: 'create'}">New GymProgram</router-link>
    </li>
    <li class="mr-6">
      <router-link class="navbar-item" exact :to="{name: 'collection'}">My GymPrograms</router-link>
    </li>
  </ul>
</template>
