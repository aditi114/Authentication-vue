<template>
  <v-app id="inspire">
    <div>
      <Navigation/>
      <router-view/>
      <Footer style="position:fixed; bottom: 0; width: 100%"></Footer>


    </div>
    
  </v-app>

  
</template>

<script>
 import Navigation from '@/components/Navigation'
 import Footer from '@/components/Footer'
 export default {
   components:{
     Navigation,
      Footer,
   },

   data: () => ({
 
   }),
 };
</script>
<style>
#inspire{
  font-family: 'Poppins', sans-serif;
  background-color: beige
}
</style>