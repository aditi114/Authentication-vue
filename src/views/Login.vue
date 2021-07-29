<template>
<div>
  <v-form ref="Loginform" width="70%">
      <h3 style="text-align: center">User Login</h3>
      
      <v-text-field label="UserName" v-model="loginusername" ></v-text-field>
      
      <v-text-field label="Password" v-model="loginpassword"></v-text-field>
      <v-btn class="success" @click="submit"  elevation="2"  margin="3%" rounded>Submit</v-btn>
      <v-btn class="orange" @click="reset" elevation="2" align="center"  rounded>Reset</v-btn>
      <p ref="message"></p>
    </v-form>
    <p>Username: {{loginusername}}</p>
</div>
</template>

 <script>
export default{
  name: 'Login',
  data(){
    return{
      
      loginpassword: '',
      loginusername:'',
      
      
    }
  },
  
  mounted() {
    
    if (localStorage.username) {
      this.loginusername = localStorage.loginusername;

    }
    
    if (localStorage.password) {
      this.loginpassword = localStorage.loginpassword;
     
    }
  
  },
  
  methods: {
     submit(){
      if(this.$refs.Loginform.validate()){
       
        
        localStorage.loginusername = this.loginusername;
        
        localStorage.loginpassword = this.loginpassword;
        alert('Login successful')
        
        
        }  
      },
  
    reset(){
      
        this.username=''
        this.password = ''
        
        this.$refs.form.reset()

    },
    
    

  },
  
  // watch: {
  //   name(newName) {
  //     localStorage.loginname = newName;
  //   }
  // }
}
</script>
<style>

</style>