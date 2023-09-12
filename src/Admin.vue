<template>
  <div class="message-container">
    <label v-if="err">Authentication expired: Login to continue.</label>
  </div>
  <div class="grid-container">
    <div class="grid-item">
      <button @click="getUsers">Fetch Users</button>
      <ul class="data-list">
        <li class="data-item">USERNAME</li>
        <li class="data-item" v-for="user in this.users" :key="user.id">{{user.username}}</li>
      </ul>
    </div>
    <div class="grid-item">
      <button @click="getClients">Fetch Clients</button>
      <ul class="data-list">
        <li class="data-item">CLIENT</li>
        <li class="data-item" v-for="client in this.clients" :key="client.id">{{client.clientId}}</li>
      </ul>
    </div>
    <div class="grid-item">
      <button @click="getRealms">Fetch Realms</button>
      <ul class="data-list">
        <li class="data-item">REALM</li>
        <li class="data-item" v-for="realm in this.realms" :key="realm.id">{{realm.realm}}</li>
      </ul>
    </div>
  </div>

</template>

<script>

import store from "@/store.js"
import axios from "axios";

const FRONTEND = "172.16.102.150"
export default {
  name: 'Admin',
  data() {
    return {
      err: null,
      users: null,
      clients: null,
      realms: null,
    }
  },
  methods: {
    async getUsers() {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://'+FRONTEND+'/admin/realms/Vuejs-Realm/users',
        headers: {
          'Authorization': 'Bearer '+ store.state.adminToken,
        }
      };
      try {
        const response = await axios.request(config)
        this.users = response.data;
      } catch (err) {
        console.log("err")
        this.err = err
      }

    },

    async getClients() {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://'+FRONTEND+'/admin/realms/Vuejs-Realm/clients',
        headers: {
          'Authorization': 'Bearer '+ store.state.adminToken,
        }
      };
      try {
        const response = await axios.request(config)
        this.clients = response.data;
      } catch (err) {
        console.log("err")
        this.err = err
      }

    },

    async getRealms() {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://'+FRONTEND+'/admin/realms',
        headers: {
          'Authorization': 'Bearer '+ store.state.adminToken,
        }
      };
      try {
        const response = await axios.request(config)
        this.realms = response.data;
      } catch (err) {
        console.log("err")
        this.err = err
      }
    },

  }
}
</script>

<style scoped>
  @import "style/admin.css";
</style>