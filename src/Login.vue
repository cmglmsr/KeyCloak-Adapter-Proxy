<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="formData.username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required />
        </div>
        <div class="form-group">
          <label> AD Domain: </label>
          <input type="text" id="domain" v-model="formData.domain" required />
        </div>
        <div class="error-block" v-if="err" style="color: red">
          <label>{{err}}</label>
        </div>
        <div class="error-block" v-if="suc" style="color: green">
          <label>{{suc}}</label>
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div class="form-group">
        <button class="login-button" @click="goToOwa()">Go To OWA</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store.js'

const FRONTEND = "172.16.102.150"

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        username: '',
        password: '',
        domain: ''
      },
      err: "",
      suc: ""
    };
  },
  methods: {
    async submitForm() {
      try {
        const params = new URLSearchParams();
        params.append('username', this.formData.username);
        params.append('password', this.formData.password);
        params.append('grant_type', 'password')
        params.append('client_id', 'Vuejs-Client')
        let response = await axios.post('https://' + FRONTEND + '/realms/Vuejs-Realm/protocol/openid-connect/token', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        console.log('[+] Login successful.')
        this.$store.commit('setToken', response.data.access_token)
        this.$store.commit('setUsername', this.formData.username)
        this.$store.commit('setPassword', this.formData.password)
        this.$store.commit('setDomain', this.formData.domain)
        console.log(this.$store.token)
        this.suc = "Login successful. Click the link below to navigate."
        this.err = ""
        //location.replace("/")
      } catch (err) {
        console.error("[-] " + err)
        this.err = "Invalid user credentials."
        this.suc = ""
      }
    },
    goToOwa() {
      if(store.state.token) {
        location.replace("/")
      } else {
        this.err = "You need to be authenticated before going to OWA."
      }
    }
  },
};
</script>

<style>
@import "style/login.css";
</style>
