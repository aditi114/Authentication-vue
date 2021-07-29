<template>
  <div>
    
    <v-form ref="form" width="70%">
      <h3 style="text-align: center">Sign Up For Free</h3>
      <v-text-field label="Name" v-model="name" ></v-text-field>
      <v-text-field label="UserName" v-model="username" ></v-text-field>
      <v-text-field label="Email" v-model="email" suffix="@gmail.com">Email</v-text-field>
      <v-text-field label="Password" v-model="password" :rules="InputRules"></v-text-field>
      
      <v-menu max-width="290">
    <template v-slot:activator="{ on }">
        <v-text-field :value="dob" label="Date of Birth" v-on="on"></v-text-field>
    </template>
    <v-date-picker v-model="dob" elevation="10"></v-date-picker>
</v-menu>
      <v-btn class="success" @click="submit" elevation="2"  margin="3%" rounded>Submit</v-btn>
      <v-btn class="orange" @click="reset" elevation="2" align="center"  rounded>Reset</v-btn>
    </v-form><br>
   Name: {{name}}<br>
   UserName: {{username}} <br>
  </div> 
  
</template>

<script>
import format from 'date-fns/format'
export default{
  name: 'Signin',
  data(){
    return{
      name: '',
      password: '',
      username:'',
      email: '',
      dob: null,
      InputRules:[
        v=>v.length>=6 || 'Password must be of minimum 6 characters'

      ]
    }
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.dob) {
      this.dob = localStorage.dob;
    }
    
    if (localStorage.username) {
      this.username = localStorage.username;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.password) {
      this.password = localStorage.password;
    }
  
  },
  methods: {
     submit(){
      if(this.$refs.form.validate()){
       
        localStorage.name = this.name;
        localStorage.username = this.username;
        localStorage.email = this.email;
        localStorage.password = this.password;
        localStorage.dob = this.dob;
        alert('Sign Up successful')
        
      }
    },
    reset(){
      this.name = ''
        this.username=''
        this.email = ''
        
        this.dob = null
        this.$refs.form.reset()

    }

  },
  computed:{
    formattedDate() {
      return this.dob ? format(this.dob, 'Do MMM YYYY') : ''
    },
  },
  // watch: {
  //   name(newName) {
  //     localStorage.name = newName;
  //   }
  // }
}

</script>