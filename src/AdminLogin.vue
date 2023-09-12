<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Admin Login</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="formData.username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required />
        </div>
        <div class="error-block" v-if="err" style="color: red">
          <label>{{err}}</label>
        </div>
        <div class="error-block" v-if="suc" style="color: green">
          <label>{{suc}}</label>
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import store from "@/store.js"
  import qs from "qs";

  const FRONTEND = "172.16.102.150"

  export default {
    name: 'AdminLogin',
    data() {
      return {
        formData: {
          username: "",
          password: ""
        },
        err: "",
        suc: ""
      };
    },
    methods: {
      async submitForm() {
        try {
          let data = qs.stringify({
            'username': this.formData.username,
            'password': this.formData.password,
            'client_id': 'admin-cli',
            'grant_type': 'password'
          });

          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://' + FRONTEND + '/realms/master/protocol/openid-connect/token',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
          const response = await axios.request(config);
          console.log('[+] Admin login successful.')
          console.log(response.data.access_token)
          this.$store.commit('setAdminToken', response.data.access_token)
          location.replace("/admin")
        } catch (err) {
          console.error("[-] " + err)
          this.err = "Invalid user credentials."
          this.suc = ""
        }
      }
    }
  }
</script>

<style>
@import "style/login.css";
</style>