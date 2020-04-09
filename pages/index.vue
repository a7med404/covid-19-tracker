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
                Don’t see a position that fits you? No problem! we wanna hear
                from you, send us an email to
              </p>
              <p>Stay Home <span class="c-primary">Stay Safe</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SelectCountry />
    <Block />
    <Symptom />
    <!-- <Guide /> -->
  </div>
</template>

<script>
import SelectCountry from '@/components/statistics/SelectCountry'
import Block from '@/components/statistics/Block'
import Symptom from '@/components/Symptom'
// import Guide from '@/components/Guide'
export default {
  components: {
    SelectCountry,
    Block,
    Symptom
    // Guide
  },
  asyncData() {
    return {
      title: 'COVID-19 Tracker title'
    }
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
