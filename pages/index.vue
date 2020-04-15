<template>
  <div class="container">
    <section class="medium-padding35">
      <div class="container">
        <div class="row">
          <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 m-auto">
            <div class="crumina-module crumina-heading align-center">
              <h2 class="heading-title">
                <span class="c-primary">COVID-19</span> TRACKER
              </h2>
              <p class="heading-text">
                More than
                <span class="indicator negative bold"
                  >{{ getCurrent.TotalConfirmed }}
                </span>
                person
                <span class="indicator negative bold"
                  >{{ getCurrent.Country || 'World Wide' }}
                </span>
                have been infected with the new coronavirus. Stay Home Stay Safe
              </p>
              <p><span class="c-primary">STAND_4_SUDAN</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Block :countires="getCountries" />
    <Symptom />
    <!-- <Guide /> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Block from '@/components/Block'
import Symptom from '@/components/Symptom'
// import Guide from '@/components/Guide'
export default {
  components: {
    Block,
    Symptom
    // Guide
  },
  async fetch() {
    await this.fetchCountries()
  },
  asyncData() {
    return {
      title: 'COVID-19 Tracker'
    }
  },
  data() {
    return {
      connectionStatus: ''
    }
  },
  computed: {
    ...mapGetters(['getCountries', 'getCurrent', 'getConnectionStatus'])
  },
  created() {
    this.title = 'COVID-19 Tracker'
  },
  methods: {
    ...mapActions(['fetchCountries'])
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'covid-19 tracker app2'
        }
      ]
    }
  }
}
</script>
