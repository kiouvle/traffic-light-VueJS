<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  background: rgb(120,186,252);
  background: linear-gradient(0deg, rgba(120,186,252,1) 0%, rgba(37,134,240,1) 77%);
}
</style>
