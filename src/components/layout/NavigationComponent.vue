<template>
  <span
    class="navigation-component"
  >
    <!-- Main Navigation bar -->
    <v-app-bar
      class="navigation-component__bar"
      :class="{ transparent: transparentToolbar }"
      fixed
      flat
      tile
    >
      <v-app-bar-nav-icon
        class="ma-0"
        @click="drawer = !drawer"
        v-if="$vuetify.breakpoint.smAndDown"
      />

      <v-toolbar-title
        v-if="$vuetify.breakpoint.mdAndUp"
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
        v-if="$vuetify.breakpoint.smAndDown"
        class="no-background pl-10"
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
          v-show="$vuetify.breakpoint.mdAndUp"
          v-for="(link, index) in links"
          :to="link.route"
          :key="index"
          text
        >
          {{ $t(link.translationPath) }}
        </v-btn>

        <v-menu
          close-on-content-click
          offset-y
          z-index="15"
        >
          <template
            v-slot:activator="{ on: menu }"
          >
            <v-tooltip
              left
              z-index="15"
            >
              <template
                v-slot:activator="{ on: tooltip }"
              >
                <v-btn
                  class="no-background"
                  text
                  v-on="{ ...tooltip, ...menu }"
                >
                  <v-icon>
                    translate
                  </v-icon>
                </v-btn>
              </template>
              {{ $t('navigation.languageChooser') }}
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              v-for="(language, index) in availableLanguages"
              :key="index"
              :disabled="language.code === $i18n.locale"
              @click="changeLanguage(language.code)"
            >
              <v-list-item-title>
                {{ language.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-tooltip
          v-if="$vuetify.breakpoint.mdAndUp"
          bottom
          z-index="15"
        >
          <template
            v-slot:activator="{ on }"
          >
            <v-btn
              class="no-background"
              @click="changeUiTheme($vuetify.theme.dark)"
              text
            >
              <v-icon
                v-if="$vuetify.theme.dark"
                v-on="on"
              >
                wb_sunny
              </v-icon>
              <v-icon
                v-else
                v-on="on"
              >
                brightness_2
              </v-icon>
            </v-btn>
          </template>
          <span
            v-if="$vuetify.theme.dark"
          >
            {{ this.$t('navigation.theme.onBright') }}
          </span>
          <span
            v-else
          >
            {{ this.$t('navigation.theme.onDark') }}
          </span>
        </v-tooltip>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Navigation drawer wrapper -->
    <v-card
      v-if="drawer"
      class="navigation-component__drawer"
      elevation="12"
      width="256"
      tile
    >
      <v-navigation-drawer
        v-model="drawer"
        absolute
        floating
        temporary
        height="auto"
      >

        <v-list
          nav
        >
          <v-list-item
            class="no-background"
            :class="{ 'black--text': !$vuetify.theme.dark, 'white--text': $vuetify.theme.dark }"
            :to="{ name: 'home' }"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ $t('navigation.links.home') }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-for="(item, index) in links"
            :key="index"
            :to="item.route"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ $t(item.translationPath) }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list-item
          class="no-background"
          @click="changeUiTheme($vuetify.theme.dark)"
        >
          <v-list-item-content>
            <v-list-item-title
              v-if="$vuetify.theme.dark"
            >
              <v-icon>
                wb_sunny
              </v-icon>
              <span
                class="ml-3"
              >
                {{ this.$t('navigation.theme.onBright') }}
              </span>
            </v-list-item-title>

            <v-list-item-title
              v-else
            >
              <v-icon>
                brightness_2
              </v-icon>
              <span
                class="ml-3"
              >
                {{ this.$t('navigation.theme.onDark') }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>
    </v-card>
  </span>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    changeUiTheme(toBrightTheme = false) {
      this.$emit('themeChanged', toBrightTheme);
    },
    changeLanguage(newLanguageCode) {
      this.$emit('languageChange', newLanguageCode);
    },
  },
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    transparentToolbar: {
      type: Boolean,
      required: true,
    },
    links: {
      type: Array,
      required: false,
      default: () => ([]),
    },
    availableLanguages: {
      type: Array,
      required: true,
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
