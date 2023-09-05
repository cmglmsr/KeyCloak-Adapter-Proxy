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
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const FRONTEND = "172.16.102.150"
export default {
  name: 'Login',
  data() {
    return {
      formData: {
        username: '',
        password: '',
      },
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
        const response = await axios.post('https://' + FRONTEND + '/realms/Vuejs-Realm/protocol/openid-connect/token', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        console.log('[+] Login successful.')
        this.$store.commit('setToken', response.data.access_token)
        this.$store.commit('setUsername', this.formData.username)
        this.$store.commit('setPassword', this.formData.password)
        location.replace('/')
      } catch (err) {
        console.error("[-] Error during authentication: " + err)
      }
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 320px;
}

.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.2s;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
