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

  if(store.getters.getToken) {
    console.log("user is authenticated")
    let data = qs.stringify({
      'destination': 'https://192.168.1.114/owa/',
      'flags': '4',
      'forcedownlevel': '0',
      'username': 'windc.net\\cemg',
      'password': '12tr734!',
      'passwordText': '',
      'isUtf8': '1'
    });
    let config = {
      method: 'post',
      withCredentials: true,
      maxBodyLength: Infinity,
      url: 'https://192.168.1.114/owa/auth.owa',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data : data
    };
    axios.request(config)
        .then((response) => {
          console.log(response);
          window.location.href = "https://192.168.1.114/owa"
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
