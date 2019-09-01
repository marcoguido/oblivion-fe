<template>
  <section>
    <v-container
      py-0
      fluid
    >
      <page-header
        :header-image-src="require('@/assets/images/cookie.png')"
        page-title-translatable-key="pages.privacyPolicy.title"
      />
    </v-container>

    <v-container
      py-10
    >
      <v-row
        class="full-height"
      >
        <v-col
          v-html="$t('pages.privacyPolicy.content')"
        >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import PageHeader from '../components/layout/PageHeader.vue';

export default {
  name: 'PrivacyPolicy',
  components: { PageHeader },
};
</script>
