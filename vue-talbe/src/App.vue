<template>
  <div id="app">
    <nav>
      <router-link to="/">Hello World</router-link>
      <router-link to="/table">Table</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  background:black;
}
nav a{
  color:white;
  line-height:30px;
}
</style>
