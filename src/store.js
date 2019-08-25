import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import constants from './Constants/constants';

Vue.use(Vuex);

export default new Vuex
  .Store({
    getters: {
      getCurrentLocale: state => state.currentLocale,
      isThemeDark: state => state.ui.darkTheme,
    },
    state: {
      currentLocale: process.env.VUE_APP_I18N_LOCALE,
      ui: {
        darkTheme: true,
      },
    },
    mutations: {
      SET_LIGHT_THEME(state) {
        state.ui.darkTheme = false;
      },
      SET_DARK_THEME(state) {
        state.ui.darkTheme = true;
      },
      UPDATE_LOCALE(state, languageCode) {
        state.currentLocale = languageCode;
      },
    },
    actions: {
      updateLanguage({ commit }, languageCode) {
        if (Object.values(constants.locales).includes(languageCode)) {
          commit('UPDATE_LOCALE', languageCode);
        }
      },
      toggleApplicationTheme({ commit }, shouldBeBright = false) {
        if (shouldBeBright) {
          commit('SET_LIGHT_THEME');
        } else {
          commit('SET_DARK_THEME');
        }
      },
    },
    plugins: [
      createPersistedState({ key: process.env.VUE_APP_STORAGE_PERSIST_KEY }),
    ],
  });
