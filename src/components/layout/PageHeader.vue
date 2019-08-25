<template>
  <v-row
    class="page-header full-width orange"
    :class="{ 'half-height': isBreakpointAtLeastSm, 'full-viewport': isBreakpointXs }"
  >
    <v-col
      class="page-header__banner my-auto"
    >
      <div
        class="text-left px-md-12"
        :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
      >
        <h1>
          {{ $t(pageTitleTranslatableKey) }}
        </h1>
        <h2>
          {{ pageSubtitleTranslatableKey }}
        </h2>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PageHeader',
  computed: {
    isBreakpointAtLeastSm() {
      return this.$vuetify.breakpoint.smAndUp;
    },
    isBreakpointXs() {
      return this.$vuetify.breakpoint.xsOnly || window.innerHeight < 450;
    },
  },
  props: {
    pageTitleTranslatableKey: {
      type: String,
      required: true,
    },
    pageSubtitleTranslatableKey: {
      type: String,
      required: false,
      default: 'pluto paperino pippo',
    },
  },
};
</script>

<style lang="sass">
.page-header
  position: relative

  h1
    font-size: 6rem

</style>
