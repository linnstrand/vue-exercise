<template>
  <div id="app"
       class="text-black">
    <nav class="border-b border-grey-light py-4 px-6 flex"
         id="navbar">
      <ul class="navbar-menu list-reset flex">
        <li class="mr-6">
          <router-link class="navbar-item" exact
                       :to="{name: 'home'}">Home</router-link>
        </li>
        <li class="mr-6">
          <router-link class="navbar-item" exact
                       :to="{name: 'gym'}">Gym</router-link>
        </li>
      </ul>
      <router-view name="navigation" />
    </nav>
    <main class="container p-4">
      <router-view />
    </main>
  </div>
</template>

<style>
.navbar-item {
  text-decoration: none;
  color: #3490dc;
}
.router-link-exact-active {
  color: blue;
}
</style>
