<template>
  <div class="home">
    <img alt="Sass logo" src="../assets/sass.png">
    <h1>Welcome to our Sass presentation!</h1>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style scoped lang="scss">
$logo-height: 200px; 
$logo-width: 250px; 

img {
  height: $logo-height;
  width: $logo-width;
}

</style>
