<template>
  <v-row
    class="page-header full-width"
    :class="{
      'half-height': isBreakpointAtLeastSm,
      'full-viewport': isBreakpointXs,
      'indigo darken-4 page-header--wiggles': $vuetify.theme.dark,
      'orange lighten-1': !$vuetify.theme.dark,
    }"
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
          {{ $t(pageSubtitleTranslatableKey) }}
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
      default: '',
    },
  },
};
</script>

<style lang="sass">
@import "../../styles/mixins/mixins"

.page-header
  @include svg-bubbles-background('%23f1e9de')
  background-repeat: repeat
  position: relative

  &--wiggles
    @include svg-wiggles-background('%23757575')

  h1
    font-size: 6rem

</style>
