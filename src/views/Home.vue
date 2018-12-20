<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome!</h1>
      <hr class="my-4">
      <a class="btn btn-primary btn-lg" @click.prevent="login" href="#" role="button">Log in with Facebook!</a>
          <h1>Search</h1>
  <v-select ref="select" multiple :options="options" v-model="selected"></v-select>
  <button class="btn btn-default" @click="selectAll">Search</button>
    </div>
  </div>
</template>
<style lang="scss">
body {
  font-family: 'Open Sans', sans-serif;
}

#app {
  max-width: 35em;
  margin: 1em auto;
}

</style>


<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';
let loopTimer = null;
import Vue from 'vue';
import vSelect from './components/Select.vue';
Vue.component('v-select', VueSelect.VueSelect);

export default {

    login()
    {
      fb.FBLogin();
    },
    userId: ()=> api.userId,


  search(){
    el: "#app",
    data: {
      selected: [],
      options: ""
    },
    methods: {
      selectAll() {
        const select = this.$refs.select;
        select.options.forEach(option => {
          select.select(option);
        });
        
        // bug caused by onAfterSelect
        select.open = false
      }
    }
  }

</script>
