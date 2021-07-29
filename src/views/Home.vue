<template >
<div>

  <v-row
     class="home" 
    >
      <v-col cols="12">
        <v-hover
          v-slot="{ hover }"
          
        >
          <v-card
            :elevation="hover ? 15 : 2"
            class="mx-auto"
            height="300"
            width="90%"
          >
            <v-card-text class="my-2 text-center text-h3" style="color: orange">
              Homepage<br><hr><br>

              Hello {{username}}
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      
    </v-row>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'Home',
    components: {   
    },
    computed:{
    ...mapGetters({
      
      username:'username'

    })

  }
  }
</script>
<style>

</style>