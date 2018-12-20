<template>
  <div class="about">
    <h1 id = "header">Welcome to you Exercise App!</h1>
    <p id= "descript">  With this app you'll be able to track your daily progress. 
      You will also be able to share your workouts with others. Keep track of calorie intake,
      lunges and so much more!</p>
      <h1>Vue Select - Custom Option Templating</h1>
    <v-select :options="options" label="title">
      <template slot="option" slot-scope="option">
          <span class="fa" :class="option.icon"></span>
          {{ option.title }}
      </template>
    </v-select>
  </div>
</template>

<style lang = "scss">
  
  @import "../../node_modules/bootstrap/scss/bootstrap.scss";
  #header
  {
    text-align: center;
    font-size: 30px;
  }
  #descript
  {
    font:bold;
    text-align: center;
    width: 30%;
    margin-left: 30%;
  }
</style>





