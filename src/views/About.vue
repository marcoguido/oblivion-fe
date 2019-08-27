<template>
  <v-container
    pt-0
    fluid
  >
    <page-header
      page-title-translatable-key="pages.about.title"
      page-subtitle-translatable-key="pages.about.subtitle"
    />

    <v-row
      class="welcome-slide"
    >
      <v-col class="about full-viewport">
        <h1>This is an about page</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from '../components/layout/PageHeader.vue';

export default {
  components: { PageHeader },
};
</script>
