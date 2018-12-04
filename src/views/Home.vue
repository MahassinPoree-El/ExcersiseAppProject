<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome!</h1>
      <hr class="my-4">
      <a class="btn btn-primary btn-lg" @click.prevent="login" href="#" role="button">Log in with Facebook!</a>
    </div>
  </div>
</template>

<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';
let loopTimer = null;
export default {

    login()
    {
      fb.FBLogin();
    },
    userId: ()=> api.userId
}
</script>

