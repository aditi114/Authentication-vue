<template>
<div>
    <v-tabs
      fixed-tabs
      background-color="dark"
      dark
    >
      <v-tab>
        <router-link :to="{
            name: 'Home'
          }" style="color:white;text-decoration: none">
          Home
        </router-link>
      </v-tab>
      <v-tab>
        <router-link :to="{
            name: 'Userpage'
          }" style="color:white;text-decoration: none">
         User Profile
        </router-link>
      </v-tab>
      
      <v-tab>
        <router-link :to="{
            name: 'Signin'
          }" style="color:white;text-decoration: none">
          Sign IN
        </router-link>
      </v-tab>
      <v-tab>
          <router-link :to="{
            name: 'Login'
          }" style="color:white;text-decoration: none">
          Login
        </router-link>
      </v-tab>

    </v-tabs>
</div>

</template>

<script>
export default {
  
  
  

}
</script>

<style>

body{
  font-family: 'Poppins', sans-serif;
  background-color: antiquewhite;
}
</style>
