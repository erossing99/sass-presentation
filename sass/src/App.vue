<template>
  <div id="app">
    <nav>
      <router-link to="/sass">Sass</router-link> |
      <router-link to="/github">Our GitHub</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
$font-stack: Avenir, Helvetica, Arial, sans-serif;
$sass-pink: #e86ba9;
$sass-pink-accent: #a11f6b;

#app {
  color: $sass-pink-accent;
  font-family: $font-stack;
  text-align: center;
}

nav a {
  color: $sass-pink;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: $sass-pink;
}

nav {
  padding: 30px;
}

</style>
