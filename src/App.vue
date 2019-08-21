<template>
  <v-app>
    <v-content>
      <navigation-bar
        :links="navigationLinks"
        title="Oblivion"
        @themeChanged="updateUiTheme"
      />
      <router-view />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from './components/layout/Footer.vue';
import NavigationBar from './components/layout/NavigationBar.vue';

export default {
  components: { NavigationBar, Footer },
  computed: {
    ...mapGetters({
      toolbarStatus: 'getToolbarStatus',
      isThemeDark: 'isThemeDark',
    }),
  },
  data() {
    return {
      navigationLinks: [
        {
          name: this.$vuetify.lang.t('$vuetify.navigation.links.home'),
          route: {
            name: 'home',
          },
        },
        {
          name: this.$vuetify.lang.t('$vuetify.navigation.links.about'),
          route: {
            name: 'about',
          },
        },
      ],
    };
  },
  mounted() {
    this.$vuetify.theme.dark = this.isThemeDark;
  },
  methods: {
    updateUiTheme(toBrightTheme) {
      this.$store
        .dispatch('toggleApplicationTheme', toBrightTheme)
        .then(() => {
          this.$vuetify.theme.dark = this.isThemeDark;
        });
    },
  },
};
</script>
