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
          <h2>
            This is an about page
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :class="{ textJustify: $vuetify.breakpoint.xsOnly }"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel ligula
            iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc condimentum
            placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut, dignissim neque. Sed
            eget semper massa. Maecenas placerat felis nec mauris tempor mattis. Cras pretium enim
            eget pulvinar sollicitudin. Phasellus mollis sed sem at pharetra. Nam pellentesque, nibh
            quis pretium tempus, justo mauris luctus quam, quis egestas felis neque rhoncus ante.
            Praesent dignissim orci a blandit eleifend.
          </p>
          <p>
            Sed eget est dolor. Donec sit amet velit justo. Proin eget ex suscipit, porttitor justo
            ac, pellentesque tellus. Fusce tincidunt rutrum fermentum. Nunc dignissim nisl id
            rhoncus aliquet. Donec tempor nisl eget sapien molestie elementum. Pellentesque aliquet
            iaculis pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Cras hendrerit nulla vel sollicitudin tincidunt. Praesent
            ultrices consequat metus in mattis. Vestibulum eu quam tortor. Nam tempor luctus justo
            sit amet sodales. Suspendisse potenti. Etiam id arcu at turpis bibendum consectetur et
            quis elit.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <life-events-component />
  </section>
</template>

<script>
import PageHeader from '../components/layout/PageHeader.vue';
import LifeEventsComponent from '../components/LifeEventsComponent.vue';

export default {
  components: { PageHeader, LifeEventsComponent },
};
</script>
