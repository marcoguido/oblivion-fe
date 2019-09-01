<template>
  <v-container
    pt-0
    fluid
  >
    <welcome-slide />

    <v-container>
      <presentation-component
        author-email="guidolin.marco94@gmail.com"
        :hide-author-avatar="true"
        title-string-path="pages.home.authorDescription.title"
        description-string-path="pages.home.authorDescription.description"
      />
    </v-container>

  </v-container>
</template>

<script>
import WelcomeSlide from '../components/WelcomeSlide.vue';
import PresentationComponent from '../components/PresentationComponent.vue';

export default {
  components: {
    PresentationComponent,
    WelcomeSlide,
  },
};
</script>
