<template>
  <v-app>
    <v-content
      v-scroll="scrollHandler"
    >
      <navigation-component
        :available-languages="availableLanguages"
        :links="navigationLinks"
        :title="siteTitle"
        :transparent-toolbar="transparentNavigationToolbar"
        @languageChange="updateLanguage"
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
import constants from './Constants/constants';

export default {
  components: { NavigationComponent, Footer, CookieBar },
  computed: {
    ...mapGetters({
      isThemeDark: 'isThemeDark',
      currentLocale: 'getCurrentLocale',
    }),
  },
  data() {
    return {
      siteTitle: process.env.VUE_APP_SITE_TITLE,
      transparentNavigationToolbar: true,
      navigationLinks: [
        {
          translationPath: 'navigation.links.about',
          route: {
            name: 'about',
          },
        },
      ],
      availableLanguages: [
        {
          code: constants.locales.ENGLISH,
          name: 'English',
        },
        {
          code: constants.locales.ITALIAN,
          name: 'Italiano',
        },
      ],
    };
  },
  mounted() {
    this.$vuetify.theme.dark = this.isThemeDark;
    this.$vuetify.lang.current = this.currentLocale;
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
    updateLanguage(newLanguageCode) {
      this.$store
        .dispatch('updateLanguage', newLanguageCode)
        .then(() => {
          this.$i18n.locale = newLanguageCode;
        });
    },
  },
};
</script>
