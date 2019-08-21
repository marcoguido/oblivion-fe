import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex
  .Store({
    getters: {
      getToolbarStatus: state => state.ui.toolbarCollapsed,
      isThemeDark: state => state.ui.darkTheme,
    },
    state: {
      ui: {
        toolbarCollapsed: true,
        darkTheme: true,
      },
    },
    mutations: {
      TOGGLE_TOOLBAR_STATUS(state) {
        state.ui.toolbarCollapsed = !state.ui.toolbarCollapsed;
      },
      SET_LIGHT_THEME(state) {
        state.ui.darkTheme = false;
      },
      SET_DARK_THEME(state) {
        state.ui.darkTheme = true;
      },
    },
    actions: {
      toggleToolbarStatus({ commit }) {
        commit('TOGGLE_TOOLBAR_STATUS');
      },
      toggleApplicationTheme({ commit }, shouldBeBright = false) {
        if (shouldBeBright) {
          commit('SET_LIGHT_THEME');
        } else {
          commit('SET_DARK_THEME');
        }
      },
    },
  });
