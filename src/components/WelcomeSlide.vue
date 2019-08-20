<template>
  <v-row
    class="welcome-slide full-viewport"
  >
    <v-overlay
      absolute
      align="center"
      justify="center"
      class="welcome-slide__overlay"
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
      color="#dedede"
      :line-linked="true"
      :line-opacity="0.7"
      lines-color="#dedede"
      :lines-distance="150"
      :lines-width="1"
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
    };
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
