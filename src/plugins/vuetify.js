import '@mdi/font/css/materialdesignicons.css';

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import i18n from './i18n';

Vue.use(Vuetify);

const vuetifyOpts = {
  theme: {
    dark: true,
  },
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
};

export default new Vuetify(vuetifyOpts);
