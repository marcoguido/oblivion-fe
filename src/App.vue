<template>
  <v-app>
    <v-content>
      <NavigationBar
        :links="navigationLinks"
      />
      <router-view />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/layout/Footer.vue';
import NavigationBar from './components/layout/NavigationBar.vue';

export default {
  components: { NavigationBar, Footer },
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
};
</script>
