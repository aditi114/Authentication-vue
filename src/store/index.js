import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  
    state: {
      username:'Guest'
    },
    mutations: {
      initialiseStore(state) {
        // Check if the ID exists
        if(localStorage.getItem('username')) {
          // Replace the state object with the stored item
          this.replaceState(
            Object.assign(state, JSON.parse(localStorage.getItem('username')))
          );
          
          
        }
      }
    },
    actions:{
      beforeCreate() {
        this.$store.commit('initialiseStore');
      },
      
    },
    getters: {
      username(state){
        return state.username

      }
    }
  });


