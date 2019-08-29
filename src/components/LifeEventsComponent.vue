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
          class="text-center text-uppercase pb-10"
        >
          {{ $t('pages.about.secondSection.title') }}
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
              {{ item.content }}
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
                {{ item.content }}
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
  props: {
    items: {
      type: Array,
      required: false,
      default: () => ([]),
    },
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
