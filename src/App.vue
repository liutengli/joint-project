<template>
  <div id="app">
    <!-- 用来放各个组件 -->
    <router-view/>

   

  </div>
</template>

<script>

export default {
  data(){
   return{
    
   }
 }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    height:100%;
  }
  body{
    display: flex;
    flex-direction: column;
  }
  section{
    flex: 1;
    overflow: auto;
  }
  header{
     flex-shrink: 0;
  }
</style>
