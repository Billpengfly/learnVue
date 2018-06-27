<template>
  <div id="ccc">
    <my-header @headerKey="refreshHeaderKey"></my-header>
    <my-sidebar  :sidebarKey="headerKey"></my-sidebar>
    <!-- <p>{{headerKey}}</p> -->
    <router-view/>
  </div>
</template>

<script>

import myHeader from './header.vue'
import mySidebar from './sidebar.vue'

export default {
  name: 'ccc',
  data:function(){
    return {
      headerKey:''
    }
  },
  components:{
     myHeader,
     mySidebar
  },
  methods:{
    refreshHeaderKey:function(key){

      this.headerKey = key;
    }
  }
  
}
</script>

<style>

</style>
