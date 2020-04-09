<template>
  <div>
    <!-- <Preloader /> -->
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
// import Preloader from '@/components/layouts/Preloader'
export default {
  components: {
    Navbar,
    Footer
    // Preloader
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
  // head() {
  //   link: [
  //     {
  //       rel: 'stylesheet',
  //       type: 'text/css',
  //       href: 'css/main.css'
  //     }
  //   ]
  // }
}
</script>
