<template>
  <v-container
    class="timeline-section"
    :class="{
      'grey lighten-1': !$vuetify.theme.dark,
      'grey darken-4': $vuetify.theme.dark,
    }"
    fluid
    py-10
    px-sm-7
  >
    <v-row
      class="timeline-section-container"
      :class="{ 'timeline-section-container--shrinked': $vuetify.breakpoint.lgAndUp }"
    >
      <v-col
        class="timeline-section-content"
      >
        <h2
          class="text-center pb-10"
        >
          This is an about page
        </h2>
        <span
          v-if="$vuetify.breakpoint.xsOnly"
        >
          <v-card
            v-for="(item, i) in items"
            class="mb-5"
            :color="`${item.color} ${item.colorModifier}`"
            :key="`card-${i}`"
          >
            <v-card-title
              class="white--text title d-flex flex-nowrap"
            >
              <div
                class="card-title-text text-truncate flex-grow-1"
              >
                {{ item.title }}
              </div>
              <div
                class="card-title-year flex-grow-0"
              >
                {{ item.year }}
              </div>
            </v-card-title>
            <v-card-text
              class="white black--text pa-5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
              ligula iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc
              condimentum placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut,
              dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
              mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
              pharetra.
            </v-card-text>
          </v-card>
        </span>

        <v-timeline
          v-else
          align-middle
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="`${item.color} ${item.colorModifier}`"
            :icon="item.icon"
            fill-dot
          >
            <template
              v-slot:opposite
            >
                <span
                  :class="`headline font-weight-bold ${item.color}--text`"
                >
                  {{ item.year }}
                </span>
            </template>
            <v-card
              :color="`${item.color} ${item.colorModifier}`"
            >
              <v-card-title
                v-if="$vuetify.breakpoint.mdAndUp"
                class="title white--text"
              >
                {{ item.title }}
              </v-card-title>
              <v-card-title
                v-else
                class="white--text title d-flex flex-nowrap"
              >
                <div
                  class="card-title-text text-truncate flex-grow-1"
                >
                  {{ item.title }}
                </div>
                <div
                  class="card-title-year flex-grow-0"
                >
                  {{ item.year }}
                </div>
              </v-card-title>
              <v-card-text
                class="white black--text pa-5"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus vel
                ligula iaculis, non lacinia velit varius. Praesent vel suscipit massa. Nunc
                condimentum placerat accumsan. Etiam sed turpis tempus, tincidunt lorem ut,
                dignissim neque. Sed eget semper massa. Maecenas placerat felis nec mauris tempor
                mattis. Cras pretium enim eget pulvinar sollicitudin. Phasellus mollis sed sem at
                pharetra.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LifeEventsComponent',
  data() {
    return {
      items: [
        {
          color: 'purple',
          colorModifier: ' lighten-2',
          icon: 'mdi-star',
          year: 1994,
          title: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor ',
        },
        {
          color: 'pink',
          icon: 'mdi-book-variant',
          colorModifier: 'darken-1',
          year: 2001,
          title: 'Lorem ipsum dolor',
        },
        {
          color: 'teal',
          icon: 'mdi-airballoon',
          colorModifier: 'lighten-1',
          year: 2017,
          title: 'Lorem ipsum dolor',
        },
        {
          color: 'indigo',
          colorModifier: '',
          icon: 'mdi-buffer',
          year: new Date().getFullYear(),
          title: 'Lorem ipsum dolor',
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
  .timeline-section
    &-content
    .card-title-text
      max-width: 75%
      .card-title-year
        margin-left: 5%

    &-container--shrinked
      margin: 0 auto
      max-width: 75vw
</style>
