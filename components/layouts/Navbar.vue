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
            <nuxt-link to="index2" class="logo">
              <div class="img-wrap">
                <img src="img/logo.png" alt="COVID-19" />
                <img
                  src="img/logo-colored-small.png"
                  alt="COVID-19"
                  class="logo-colored"
                />
              </div>
              <div class="title-block">
                <h6 class="logo-title">COVID-19</h6>
                <div class="sub-title">COVID-19 TRACKER</div>
              </div>
            </nuxt-link>
            <a href="#" class="open-responsive-menu js-open-responsive-menu">
              <!-- <span class="icon-status online"></span> <span class="status-color">Real Time</span> -->
              <span class="icon-status disconected"></span>
              <span
                data-toggle="tooltip"
                data-placement="right"
                data-original-title="Disconnected! The Data Maybe Not Accurate"
                class="status-color"
                >Disconnected</span
              >
            </a>
            <div class="nav nav-pills nav1 header-menu">
              <div
                class="mCustomScrollbar ps ps--theme_default ps--active-x ps--active-y"
                data-ps-id="a9a4c9be-46a1-086e-70ba-95f03a1e31a7"
              >
                <span class="icon-status online"></span> <span>Online</span>
                <span class="icon-status disconected"></span>
                <span>Disconnected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
