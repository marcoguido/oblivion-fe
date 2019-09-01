<template>
  <cookie-consent
    class="text-center"
    :class="{ 'cookie-consent--dark': $vuetify.theme.dark }"
    :button-label="$t('cookieBar.buttonLabel')"
    :cookie-name="cookieName"
  >
    <template
      slot="message"
    >
      <span
        class="text--black text-uppercase mr-2 py-3 py-sm-1 px-2"
      >
        {{ $t('cookieBar.message') }}
      </span>
      <v-btn
        v-if="showPrivacyPolicyLink"
        color="info"
        class="mx-5"
        :to="{ name: 'privacy-policy' }"
      >
        {{ $t('cookieBar.linkLabel') }}
      </v-btn>
    </template>
    <template
      slot="button"
    >
      <v-btn>
        {{ $t('cookieBar.buttonLabel') }}
      </v-btn>
    </template>
  </cookie-consent>
</template>

<script>
import CookieConsent from 'vue-cookieconsent-component';

export default {
  components: { CookieConsent },
  name: 'CookieBar',
  data: () => ({
    cookieName: process.env.VUE_APP_COOKIE_CONSENT_COOKIE_NAME,
  }),
  props: {
    showPrivacyPolicyLink: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style scoped lang="sass">
  @import '../../styles/variables'

  .cookie-consent
    background-color: $navbar-color-bright

    &--dark
      background-color: $navbar-color-dark
</style>
