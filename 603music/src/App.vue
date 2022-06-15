<template>
<div id="App">
  <HomePage></HomePage>
</div>
</template>

<script>
import HomePage from "../src/page/HomePage.vue";
export default {
  name: 'App',
  components: {
    HomePage
  },
  created () {
    this.$http.get('/search/hot/detailt').then(res=>{
      console.log(res);
    })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  outline: none;
}
</style>
