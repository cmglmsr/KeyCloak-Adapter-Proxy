<template>
  <AdminLogin></AdminLogin>
</template>

<script>

import store from "@/store.js";
import axios from 'axios'
import qs from 'qs'
import {defineComponent} from "vue";
import AdminLogin from "@/AdminLogin.vue";

export default defineComponent({
  components: {AdminLogin}
})


if(store.getters.getAdminToken) {

}


</script>

<style scoped>
  @import "style/admin.css";
</style>