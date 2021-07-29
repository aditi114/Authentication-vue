<template>

    <v-footer
      dark
      padless
     class="footer">
      <v-card
        class="flex"
        flat
        tile
        
      >
        <v-card-title class="orange">
          <strong class="subheading">
            
            <a href = "mailto: abc@example.com" style="text-decoration: none;color: black;">Email ID: abc@gmail.com </a>
            Contact: 999999999<br> 
        </strong>
          <v-spacer></v-spacer>
  
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Copyright</strong>
          
        </v-card-text>
      </v-card>
    </v-footer>

</template>

<script>

export default {
  
}
</script>

<style>
</style>