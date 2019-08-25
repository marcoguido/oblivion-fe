<template>
  <v-app>
    <v-content
      v-scroll="scrollHandler"
    >
      <navigation-component
        :links="navigationLinks"
        :title="siteTitle"
        :transparent-toolbar="transparentNavigationToolbar"
        @themeChanged="updateUiTheme"
      />

      <router-view/>
      <cookie-bar />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from './components/layout/Footer.vue';
import NavigationComponent from './components/layout/NavigationComponent.vue';
import CookieBar from './components/layout/CookieBar.vue';

export default {
  components: { NavigationComponent, Footer, CookieBar },
  computed: {
    ...mapGetters({
      toolbarStatus: 'getToolbarStatus',
      isThemeDark: 'isThemeDark',
    }),
  },
  data() {
    return {
      siteTitle: process.env.VUE_APP_SITE_TITLE,
      transparentNavigationToolbar: true,
      navigationLinks: [
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
    scrollHandler(event) {
      this.transparentNavigationToolbar = event.target.scrollingElement.scrollTop < 25;
    },
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
