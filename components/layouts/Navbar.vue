<template>
  <div>
    <div class="stunning-header">
      <!-- Header Standard Landing  -->
      <div
        id="header--standard"
        class="header--standard header--standard-landing animated headroom--not-bottom headroom--not-top slideDown"
      >
        <div class="container">
          <div class="header--standard-wrap">
            <nuxt-link to="/" class="logo">
              <div class="img-wrap">
                <img src="/coronavirus.png" alt="COVID-19" />
                <img
                  src="/coronavirus.png"
                  alt="COVID-19"
                  class="logo-colored"
                />
              </div>
              <div class="title-block">
                <h6 class="logo-title">COVID-19</h6>
                <div class="sub-title">
                  <span class="c-primary sfs">STAND_4_SUDAN</span>
                </div>
              </div>
            </nuxt-link>
            <a href="#" class="open-responsive-menu js-open-responsive-menu">
              <!-- <span class="icon-status online"></span>
              <span class="status-color">Real Time</span> -->
              <span v-if="getConnectionStatus">
                <span class="online icon-status"></span>
                <span
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="When You Disconnected! The Data Maybe Not Accurate"
                  class="status-color"
                  >Real Time</span
                >
              </span>
              <span v-else>
                <span class="disconected icon-status"></span>
                <span
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="When You Disconnected! The Data Maybe Not Accurate"
                  class="status-color"
                  >Disconnected</span
                >
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: mapGetters(['getConnectionStatus'])
}
</script>
