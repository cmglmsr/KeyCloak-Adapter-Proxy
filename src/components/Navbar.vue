<script setup>
import logo from "@/Images/tr7-logo-trans-new.png"
</script>

<template>
  <div class="navbar">
    <div class="logo-div">
      <img class="logo" :src="logo" alt=""/>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/admin-login">Admin</router-link>
        </li>
      </ul>
    </nav>
  </div>

</template>

<style scoped>
@import "@/style/navbar.css";
</style>