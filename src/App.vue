<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld2 msg="나는 헬로월드2 컴포넌트야!"/>
    <HelloWorld3/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from "./components/HelloWorld2";
import HelloWorld3 from "./components/HelloWorld3";

export default {
  name: 'App',
  components: {
    HelloWorld3,
    HelloWorld2,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
