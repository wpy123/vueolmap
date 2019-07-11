<template>
  <div id="app">
   <!-- <olmap/> -->
   <router-view/>
  </div>
</template>

<script>
import olmap from './components/olmap.vue'

export default {
  name: 'app',
  components: {
    olmap
  }
}
</script>

<style>
*{padding:0; margin:0;}
html,body{
  height: 100%;
}
#app {
  height: 100%;
}
</style>
