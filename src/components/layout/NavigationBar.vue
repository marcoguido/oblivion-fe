<template>
  <v-toolbar
    class="navigation-bar elevation-0 transparent"
    :flat="true"
  >
    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-for="(link, index) in links"
        :to="link.route"
        :key="index"
        text
      >
        {{ link.name }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    links: {
      type: Array,
      required: false,
      default: () => ([]),
    },
  },
};
</script>

<style scoped lang="sass">
  .navigation-bar
    position: absolute
    width: 100%
    z-index: 10
</style>
