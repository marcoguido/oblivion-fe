<template>
  <v-row
    class="presentation-component"
  >
    <v-col
      v-if="!hideAuthorAvatar && ($vuetify.breakpoint.smAndDown || avatarLeft)"
      class="my-auto"
      cols="12"
      md="2"
    >
      <v-img
        alt="Author profile picture"
        class="presentation-component-avatar ma-auto"
        :class="{ 'presentation-component-avatar--black-border': !$vuetify.theme.dark }"
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
      class="mx-auto"
      cols="12"
      md="8"
    >
      <v-row>
        <v-col>
          <h3
            class="presentation-component-title mb-5 text-center text-uppercase"
            v-html="$t(titleStringPath)"
          ></h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span
            class="presentation-component-description text-justify"
            v-html="$t(descriptionStringPath)"
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
            {{ $t('discoverMore') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      v-if="!hideAuthorAvatar && (!$vuetify.breakpoint.smAndDown && !avatarLeft)"
      class="ma-auto"
      cols="12"
      md="2"
    >
      <v-img
        alt="Author profile picture"
        class="presentation-component-avatar ma-auto"
        :class="{ 'presentation-component-avatar--black-border': !$vuetify.theme.dark }"
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
  </v-row>
</template>

<script>
import md5 from 'blueimp-md5';

export default {
  name: 'PresentationComponent',
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
    titleStringPath: {
      type: String,
      required: true,
    },
    descriptionStringPath: {
      type: String,
      required: true,
    },
    avatarLeft: {
      type: Boolean,
      required: false,
      default: true,
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
.presentation-component
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
