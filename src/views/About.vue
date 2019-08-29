<template>
  <section>
    <v-container
      py-0
      fluid
    >
      <page-header
        page-title-translatable-key="pages.about.title"
        page-subtitle-translatable-key="pages.about.subtitle"
      />
    </v-container>

    <v-container
      py-10
    >
      <v-row>
        <v-col>
          <h2
            class="text-uppercase"
          >
            {{ $t('pages.about.firstSection.title') }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :class="{ 'text-justify': $vuetify.breakpoint.smAndDown }"
          v-html="$t('pages.about.firstSection.content')"
        >
        </v-col>
      </v-row>
    </v-container>

    <life-events-component
      :items="items"
    />
  </section>
</template>

<script>
import PageHeader from '../components/layout/PageHeader.vue';
import LifeEventsComponent from '../components/LifeEventsComponent.vue';

export default {
  components: { PageHeader, LifeEventsComponent },
  data() {
    return {
      items: [
        {
          color: 'purple',
          colorModifier: ' lighten-2',
          icon: 'mdi-star',
          year: 1994,
          title: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor ',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
                ligula iaculis, non lacinia velit varius.`,
        },
        {
          color: 'pink',
          icon: 'mdi-book-variant',
          colorModifier: 'darken-1',
          year: 2001,
          title: 'Lorem ipsum dolor',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
                ligula iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc
                condimentum placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut,
                dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
                mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra. Etiam sed turpis tempus, tincidunt lorem ut,
                dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
                mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra.`,
        },
        {
          color: 'teal',
          icon: 'mdi-airballoon',
          colorModifier: 'lighten-1',
          year: 2017,
          title: 'Lorem ipsum dolor',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
                ligula iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc
                condimentum placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut,
                dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
                mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
                ligula iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc
                condimentum placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut,
                dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
                mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra.`,
        },
        {
          color: 'indigo',
          colorModifier: '',
          icon: 'mdi-buffer',
          year: new Date().getFullYear(),
          title: 'Lorem ipsum',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
                ligula iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc
                condimentum placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut,
                dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
                mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
                ligula iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc
                condimentum placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut,
                dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
                mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
                ligula iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc
                condimentum placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut,
                dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
                mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
                ligula iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc
                condimentum placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut,
                dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
                mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra.`,
        },
      ],
    };
  },
};
</script>
