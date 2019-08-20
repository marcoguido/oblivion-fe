<template>
  <v-container
    pt-0
    fluid
  >
    <welcome-slide />
    <v-container>
      <site-presentation
        author-email="guidolin.marco94@gmail.com"
      />
    </v-container>
  </v-container>
</template>

<script>
import WelcomeSlide from '../components/WelcomeSlide.vue';
import SitePresentation from '../components/SitePresentation.vue';

export default {
  components: {
    SitePresentation,
    WelcomeSlide,
  },
};
</script>
