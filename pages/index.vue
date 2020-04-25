<script>
import { mapGetters } from 'vuex'
import Block from '@/components/Block'
import Symptom from '@/components/Symptom'
// import Guide from '@/components/Guide'
export default {
  components: {
    Block,
    Symptom
    // Guide
  },
  computed: {
    ...mapGetters(['getCurrent'])
  }
  // async created() {
  //   awiat this.fetchCountries()
  // },
  // methods: mapActions(['fetchCountries'])
}
</script>
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
              <p><span class="c-primary">STAND_FOR_SUDAN</span></p>
              <!-- <p v-if="getCurrent.Date">
                Last Update:
                {{ getCurrent.Date }}
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <Block />
    <Symptom />
    <!-- <Guide /> -->
  </div>
</template>
