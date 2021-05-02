<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/input">input</router-link> |
    <router-link to="/demo2">Event and Method</router-link> |
    <router-link to="/demo3">Data</router-link> |
    <router-link to="/demo4">Binging</router-link> |
    <router-link to="/demo5">form</router-link>
    <br />
  </div>
</template>

<script>
export default {};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>