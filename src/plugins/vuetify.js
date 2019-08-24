import '@mdi/font/css/materialdesignicons.css';

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { Scroll } from 'vuetify/lib/directives';
import i18n from './i18n';

Vue.use(Vuetify);

const vuetifyOpts = {
  directives: { Scroll },
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: {
    dark: true,
  },
};

export default new Vuetify(vuetifyOpts);
