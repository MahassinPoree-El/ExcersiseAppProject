<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome!</h1>
      <hr class="my-4">
      <a class="btn btn-primary btn-lg" @click.prevent="login" href="#" role="button">Log in with Facebook!</a>
         <h1>Search Bar</h1>
    <v-select :options="options" label="title">
      <template slot="option" slot-scope="option">
          <span class="fa" :class="option.icon"></span>
          {{ option.title }}
    </div>
  </div>
</template>

<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';
import Vue from 'vue';
import vSelect from './components/Select.vue';
Vue.component('v-select', VueSelect.VueSelect)
let loopTimer = null;
export default {

    login()
    {
      fb.FBLogin();
    },
    userId: ()=> api.userId

      el: '#app',
      data: {
        options: [
          {
          title: 'About',
          url: 'http://http://localhost:8080/about'
          },
          {
            title: 'Share',
            url: 'http://http://localhost:8080/share'
          },
          {
            title: 'Profile',
            url: 'http://http://localhost:8080/profile'
          }



        
                ]// end of options
        
        
              } //end of data
        
        
  } // end of Vue object
</script>
