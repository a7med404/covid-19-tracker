<template>
  <div class="err">
    <h1>404</h1>
    <div>NO Found Page</div>
    <nuxt-link to="/">GO HOME</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>
<style scoped>
.err {
  margin: 200px auto;
  text-align: center;
}
</style>
