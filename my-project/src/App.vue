<template>
  <div id="app" class="text-black">
    <nav class="border-b border-grey-light p-4" id="navbar">
      <ul class="navbar-menu list-reset flex">
        <li class="mr-6">
          <router-link to="/" class="navbar-item text-blue">Home</router-link>
        </li>
        <li class="mr-6">
          <router-link to="/gym" class="navbar-item">Gym</router-link>
        </li>
      </ul>
    </nav>
    <main class="container p-4">
      <router-view/>
    </main>
  </div>
</template>

<style>
.navbar-item {
  text-decoration: none;
}
.router-link-exact-active {
  color: blue;
}
</style>
