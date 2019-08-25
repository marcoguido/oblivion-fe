<template>
  <v-row
    class="welcome-slide full-viewport"
  >
    <v-overlay
      absolute
      class="welcome-slide__overlay"
      :opacity="0.2"
      :dark="darkThemeVariant"
    >
      <h1>
        {{ $t('title') }}
      </h1>
      <h2>
        {{ $t('punchline') }}
      </h2>
    </v-overlay>
    <vue-particles
      class="full-viewport"
      :hover-effect="false"
      :line-linked="true"
      :line-opacity="0.7"
      lines-color="#777"
      :lines-distance="150"
      :lines-width="2"
      :move-speed="3"
      :particle-opacity="1"
      :particle-size="4"
      :particles-number="80"
      shape-type="triangle"
    />
  </v-row>
</template>

<script>
export default {
  name: 'WelcomeSlide',
  computed: {
    darkThemeVariant() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped lang="sass">
  .welcome-slide
    position: relative

    h1
      font-size: 6rem

    &__overlay
      touch-action: auto
</style>
