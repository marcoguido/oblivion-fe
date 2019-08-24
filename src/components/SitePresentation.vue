<template>
  <v-row
    class="site-presentation"
  >
    <v-col
      v-if="!hideAuthorAvatar"
      cols="12"
      md="4"
      xl="2"
    >
      <v-img
        alt="Author profile picture"
        class="site-presentation-avatar ma-auto"
        :class="{ 'site-presentation-avatar--black-border': !$vuetify.theme.dark }"
        :max-height="windowWidth < 960 ? 320 : 600"
        :max-width="windowWidth < 960 ? 320 : 600"
        :src="gravatarSrc"
      >
        <template
          v-slot:placeholder
        >
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            />
          </v-row>
        </template>
      </v-img>
    </v-col>
    <v-col
      cols="12"
      :md="!hideAuthorAvatar ? 8 : 12"
      mx-8
      :xl="!hideAuthorAvatar ? 10 : 12"
    >
      <v-row>
        <v-col>
          <h3
            class="site-presentation-title mb-5 text-center"
            v-html="$vuetify.lang.t('$vuetify.pages.home.authorDescription.title')"
          ></h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span
            class="site-presentation-description text-justify"
            v-html="$vuetify.lang.t('$vuetify.pages.home.authorDescription.description')"
          ></span>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="text-center"
        >
          <v-btn
            v-if="!hideDiscoverMore"
            :to="{ name: 'about' }"
            color="info"
          >
            {{ $vuetify.lang.t('$vuetify.discoverMore') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import md5 from 'blueimp-md5';

export default {
  name: 'SitePresentation',
  computed: {
    gravatarSrc() {
      const baseUrl = 'https://www.gravatar.com/avatar/';
      const authorEmailHash = md5((this.authorEmail).trim().toLowerCase());

      return `${baseUrl}${authorEmailHash}?s=320`;
    },
  },
  data() {
    return {
      windowWidth: 0,
    };
  },
  props: {
    authorEmail: {
      type: String,
      required: true,
    },
    hideAuthorAvatar: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideDiscoverMore: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped lang="sass">
.site-presentation
  margin: 5% auto

  &-title
    font-size: 2rem

  &-description
    font-size: 1.2rem

  &-avatar
    border: 5px solid #fff
    border-radius: 50%

    &--black-border
      border: 5px solid #242424
</style>
