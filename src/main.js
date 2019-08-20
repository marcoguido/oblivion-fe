import 'babel-polyfill';

import Vue from 'vue';

// Plugins
import vuetify from '@/plugins/vuetify';
import '@/plugins/vue-particles';

// Router and main store
import router from '@/router';
import store from '@/store';

// Application main component
import App from '@/App.vue';

require('./styles/app.sass');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
