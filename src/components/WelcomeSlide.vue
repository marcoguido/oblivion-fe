<template>
  <v-row
    class="welcome-slide full-viewport"
  >
    <v-overlay
      absolute
      align="center"
      class="welcome-slide__overlay"
      :opacity="overlayOpacity"
      :dark="darkThemeVariant"
      justify="center"
    >
      <h1>
        {{ siteTitle }}
      </h1>
      <h2>
        {{ sitePunchline }}
      </h2>
    </v-overlay>
    <vue-particles
      class="full-viewport"
      :hover-effect="false"
      :line-linked="true"
      :line-opacity="0.7"
      :lines-color="linesColor"
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
  data() {
    return {
      sitePunchline: this.subtitle || this.$vuetify.lang.t('$vuetify.punchline'),
      siteTitle: this.title || this.$vuetify.lang.t('$vuetify.title'),
      overlayOpacity: 0.46,
      linesColor: '#777',
    };
  },
  computed: {
    darkThemeVariant() {
      return this.$vuetify.theme.dark;
    },
  },
  watch: {
    darkThemeVariant(isDark) {
      this.overlayOpacity = isDark
        ? 0.46
        : 0.20;
    },
  },
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    subtitle: {
      type: String,
      required: false,
      default: null,
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
