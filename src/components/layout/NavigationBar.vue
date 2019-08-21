<template>
  <v-app-bar
    fixed
    flat
    class="navigation-bar elevation-3"
    :inverted-scroll="toolbarStatus"
    tile
  >
    <v-toolbar-title>
      <v-btn
        class="no-background"
        text
        tile
        :to="{ name: 'home' }"
        x-large
      >
        <v-img
          height="30"
          :src="require('@/assets/images/logo.png')"
          width="30"
        />
        <span
          class="ml-5"
        >
          {{ title }}
        </span>
      </v-btn>
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

      <v-tooltip
        v-if="$vuetify.theme.dark"
        bottom
      >
        <template
          v-slot:activator="{ on }"
        >
          <v-btn
            class="no-background"
            @click="changeUiTheme(true)"
            text
          >
            <v-icon
              v-on="on"
            >
              brightness_2
            </v-icon>
          </v-btn>
        </template>
        <span>
          {{ this.$vuetify.lang.t('$vuetify.navigation.theme.onBright') }}
        </span>
      </v-tooltip>

      <v-tooltip
        v-else
        bottom
      >
        <template
          v-slot:activator="{ on }"
        >
          <v-btn
            class="no-background"
            @click="changeUiTheme(false)"
            text
          >
            <v-icon
              v-on="on"
            >
              wb_sunny
            </v-icon>
          </v-btn>
        </template>
        <span>
          {{ this.$vuetify.lang.t('$vuetify.navigation.theme.onDark') }}
        </span>
      </v-tooltip>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavigationBar',
  computed: {
    ...mapGetters({
      toolbarStatus: 'getToolbarStatus',
    }),
  },
  methods: {
    changeUiTheme(toBrightTheme = false) {
      this.$emit('themeChanged', toBrightTheme);
    },
  },
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
    opacity: .85
    z-index: 10
</style>
