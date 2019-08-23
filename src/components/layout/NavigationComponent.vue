<template>
  <span
    class="navigation-component"
  >
    <v-app-bar
      fixed
      flat
      class="navigation-component__bar elevation-0 transparent"
      :collapse-on-scroll="toolbarStatus"
      tile
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title
        class="hidden-xs-only"
      >
        <v-btn
          class="no-background"
          text
          tile
          :to="{ name: 'home' }"
          x-large
        >
          <v-img
            contain
            height="30"
            :src="require('@/assets/images/logo.png')"
            width="30"
          />
          <span
            class="ml-3"
          >
            {{ title }}
          </span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        class="no-background hidden-sm-and-up"
        text
        tile
        :to="{ name: 'home' }"
        x-large
      >
        <v-img
          contain
          height="30"
          :src="require('@/assets/images/logo.png')"
          width="30"
        />
      </v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          v-show="!toolbarStatus"
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
          z-index="15"
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
          z-index="15"
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

    <v-card
      v-if="drawer"
      class="navigation-component__drawer"
      elevation="12"
      width="256"
    >
      <v-navigation-drawer
        v-model="drawer"
        absolute
        floating
        temporary
        height="auto"
      >
        <v-list-item
          class="no-background white--text"
          :to="{ name: 'home' }"
        >
          <v-list-item-avatar>
            <v-img
              contain
              height="30"
              :src="require('@/assets/images/logo.png')"
              width="30"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{ title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="(item, index) in links"
            :key="index"
            :to="item.route"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavigationBar',
  data() {
    return {
      drawer: false,
    };
  },
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
  .navigation-component
    &__bar
      opacity: .95
      z-index: 10

    &__drawer
      margin-top: 90px
      position: fixed
      z-index: 10
</style>
