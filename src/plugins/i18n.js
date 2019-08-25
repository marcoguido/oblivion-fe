import Vue from 'vue';
import VueI18n from 'vue-i18n';
import constants from '../Constants/constants';

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales
    .keys()
    .forEach((key) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i);
      if (matched && matched.length > 1) {
        const locale = matched[1];
        messages[locale] = locales(key);
      }
    });

  return messages;
}

// Fetching store locale, if any
const currentStore = JSON.parse(localStorage.getItem(process.env.VUE_APP_STORAGE_PERSIST_KEY));
const currentLocale = typeof currentStore !== 'undefined' && currentStore !== null
  ? currentStore.currentLocale || process.env.VUE_APP_I18N_LOCALE || constants.locales.ENGLISH
  : process.env.VUE_APP_I18N_LOCALE || constants.locales.ENGLISH;

export default new VueI18n({
  locale: currentLocale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || constants.locales.ENGLISH,
  messages: loadLocaleMessages(),
});
