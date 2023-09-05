<template>

  <header>
    <div>
      <h1>
        Proxy root
      </h1>
    </div>
  </header>

</template>
<script>
  import store from "@/store.js";
  import axios from 'axios'
  import qs from 'qs'

  const FRONTEND = "172.16.102.150"

  if(store.getters.getToken) {
    console.log("user is authenticated")
    let data = qs.stringify({
      'destination': 'https://' + FRONTEND +'/owa/',
      'flags': '4',
      'forcedownlevel': '0',
      'username': 'windc.net\\' + store.getters.getUsername,
      'password': store.getters.getPassword,
      'passwordText': '',
      'isUtf8': '1'
    });
    let config = {
      method: 'post',
      withCredentials: true,
      maxBodyLength: Infinity,
      url: 'https://' + FRONTEND +'/owa/auth.owa',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data : data
    };
    axios.request(config)
        .then((response) => {
          console.log(response.headers);
          window.location.href="https://"+FRONTEND+"/owa"
        })
        .catch((error) => {
          console.log(error);
        });
    localStorage.clear();
  }
  else {
    console.log("not authenticated")
  }
</script>
