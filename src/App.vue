<template>
  <div id="app">
    <l-main-wrapper/>
  </div>
</template>

<script>
  import lMainWrapper from './components/l-main-wrapper'

export default {
  name: 'App',
  components: {
    lMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
body {
  background-color: #000000cb;
  height: 100%;
  margin: 0px;
}
</style>
