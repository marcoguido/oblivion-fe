<template>
  <section>
    <v-container
      py-0
      fluid
    >
      <page-header
        page-title-translatable-key="pages.about.title"
        page-subtitle-translatable-key="pages.about.subtitle"
        :header-image-src="require('@/assets/images/mario.png')"
      />
    </v-container>

    <v-container
      py-10
    >
      <presentation-component
        author-email="guidolin.marco94@gmail.com"
        :avatar-left="false"
        :hide-discover-more="true"
        title-string-path="pages.about.firstSection.title"
        description-string-path="pages.about.firstSection.content"
      />
    </v-container>

    <life-events-component
      :items="items"
      lang-keys-prefix="pages.about.secondSection.items"
    />
  </section>
</template>

<script>
import PageHeader from '../components/layout/PageHeader.vue';
import LifeEventsComponent from '../components/LifeEventsComponent.vue';
import PresentationComponent from '../components/PresentationComponent.vue';

export default {
  components: { PageHeader, LifeEventsComponent, PresentationComponent },
  data() {
    return {
      items: [
        {
          color: 'purple',
          colorModifier: ' lighten-2',
          icon: 'mdi-star',
          year: 1994,
          slug: 'born',
        },
        {
          color: 'pink',
          icon: 'mdi-school',
          colorModifier: 'darken-1',
          year: 2013,
          slug: 'graduation',
        },
        {
          color: 'teal',
          icon: 'mdi-school',
          colorModifier: 'lighten-1',
          year: 2013,
          slug: 'university',
        },
        {
          color: 'orange',
          icon: 'mdi-airballoon',
          colorModifier: '',
          year: 2015,
          slug: 'sgc',
        },
        {
          color: 'light-blue',
          icon: 'mdi-airballoon',
          colorModifier: 'darken-1',
          year: 2016,
          slug: 'stageEgea',
        },
        {
          color: 'amber',
          icon: 'mdi-school',
          colorModifier: '',
          year: 2017,
          slug: 'bachelorDegree',
        },
        {
          color: 'green',
          icon: 'mdi-airballoon',
          colorModifier: '',
          year: 2017,
          slug: 'hFarmConsulting',
        },
        {
          color: 'indigo',
          colorModifier: '',
          icon: 'mdi-buffer',
          year: new Date().getFullYear(),
          slug: 'today',
        },
      ],
    };
  },
};
</script>
