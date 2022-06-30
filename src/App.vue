<template>
  <div id="app">
        <NavBar  />
      <div class="py-12 md:px-20 sm:px-14 px-6">
        <router-view />
        
      </div>
        
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar 
  },data(){
    return{
    
    }
  },
 mounted() {

  },
  methods:{
     
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
}

</style>
