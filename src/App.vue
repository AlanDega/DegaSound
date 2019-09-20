<template>
  <v-app>
    <PmHeader/>
    <router-view></router-view>
    <v-container >
      <v-row>
        <v-col
        class="columns"
        ></v-col>
      </v-row>
    </v-container>
    <PmFooter/>
  </v-app>
</template>

<script>
import PmFooter from  './components/layout/Footer.vue'
import PmHeader from  './components/layout/Header.vue'

  export default {
    name: 'App',
    components:{
      PmFooter,
      PmHeader,
    },
   
    
  }
</script> 

<style lang="scss" scoped>

.buttonSearch{
  margin-top: 10px;

.isActive{
    border: 3px rgb(0, 38, 255) solid;
  }
}
.columns{
  height: 400px;
}
</style>