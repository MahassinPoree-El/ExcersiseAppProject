<template>
  <div id="app" class="container">
    <div class="display-3">
      <img alt="Muscle logo" src="./assets/logo.png" id="logo">
      Fitness Tracker
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo { height: 50px;}
</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import '@/services/facebook.js'
export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>