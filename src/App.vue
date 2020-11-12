<template>
<div>
<Header></Header>
<router-view v-slot="slotProps">
  <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
  </transition> 
</router-view>
</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.route-enter-from {
 opacity: 0;
 transform: translateY(-50px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.route-enter-active {
  transition: opacity .5s;
}

.route-leave-active {
  transition: opacity .5s;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
