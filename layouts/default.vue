<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
