<template>
  <div class="login">
    <div @click="logout" v-if="user" class="logout">
      <b-avatar variant="info" :src="imageSrc" class="mr-3"></b-avatar>
      <span class="mr-auto">{{user.user.displayName}}</span>      
    </div>
    <b-button v-else variant="primary" @click="login">Sign In</b-button>    
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { auth, provider } from '../firebase'

export default {
  name: 'Login',
  data() {
    return {
      imageSrc: ''
    };
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['signIn', 'signOut']),
    login() {
      auth
      .signInWithPopup(provider)
      .then(authUser => {
        this.imageSrc = authUser.user.photoURL;
        this.signIn(authUser);
      })
      .catch(error => alert(error.message))      
    },
    logout() {
      this.signOut();
    }
  }
}
</script>
<style>
.login {
  text-align: center;
}

.logout {
  cursor: pointer;
}
</style>