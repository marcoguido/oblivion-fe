<template>
  <section>
    <v-container
      py-0
      fluid
    >
      <page-header
        page-title-translatable-key="pages.notFound.title"
      />
    </v-container>

    <v-container
      py-10
    >
      <v-row
        class="full-height"
      >
        <v-col>
          Nothing here!
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import PageHeader from '../components/layout/PageHeader.vue';

export default {
  name: 'NotFound',
  components: { PageHeader },
};
</script>
