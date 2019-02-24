<template>
  <div id="app"
       class="text-black">
    <nav id="navbar"
         class="border-b border-grey-light py-4 px-6 flex">
      <ul class="navbar-menu list-reset flex">
        <li class="mr-6">
          <router-link class="navbar-item"
                       exact
                       :to="{name: 'home'}">
            Home
          </router-link>
        </li>
        <li class="mr-6">
          <router-link class="navbar-item"
                       exact
                       :to="{name: 'gym'}">
            Gym
          </router-link>
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
html {
  font-family: verdana;
}
button {
  padding: 0.375rem 0.75rem;
  color: #3490dc;
  border: 1px solid #3490dc;
}
.navbar-item {
  text-decoration: none;
  color: #3490dc;
}
.router-link-exact-active {
  color: blue;
}
</style>
