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
                Many person World Wide have been infected with the new
                coronavirus. Stay Home Stay Safe
              </p>
              <p><span class="c-primary">STAND_FOR_SUDAN</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="err">
      <h1>No Connection</h1>
      <div>Pleace Check your Internet connection</div>
      <i class="fa fa-no-internet"></i>
    </div>
    <!-- <Guide /> -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'No Connection',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'covid-19 tracker app'
        }
      ]
    }
  }
}
</script>
