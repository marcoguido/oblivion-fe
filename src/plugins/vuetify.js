import '@mdi/font/css/materialdesignicons.css';

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { Scroll } from 'vuetify/lib/directives';

Vue.use(Vuetify);

const vuetifyOpts = {
  directives: { Scroll },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
  },
};

export default new Vuetify(vuetifyOpts);
