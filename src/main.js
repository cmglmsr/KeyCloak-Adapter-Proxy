/**
 * TODO
 * 1 - Check if the client is authenticated
 * 2 - If client is authenticated; redirect to Exchange with correct credentials.
 * 3 - Else;
 *      a. Redirect client to Keycloak
 *      b. Retrieve client login info from Keycloak token.
 *      c. Authenticate client to Exchange
 *      d. Redirect client to Exchange OWA with correct cookies.
 * 4 - Reset the procedure for further connections.
 */

import { createApp } from 'vue'
import App from '@/App.vue'
import store from './store.js'
import router from './router';

const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app')
