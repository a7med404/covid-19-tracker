<template>
  <fieldset class="form-group label-floating is-select">
    <label class="control-label">Extended Forecast Days</label>
    <select class="selectpicker form-control">
      <option
        v-for="(value, index) in c_countries"
        :key="index"
        :value="value.CountryCode"
        v-text="value.Country"
      >
      </option>
      <!-- <option value="AL">Show Next 7 days</option>
      <option value="2">Show Next 10 days</option> -->
      <option value="WY">Show Next 14 days</option>
    </select>
  </fieldset>
</template>

<script>
export default {
  loading: { color: '#333333', throttle: 0 },
  props: ['countries'],
  data: () => ({
    loading: true,
    c_countries: []
  }),
  async created() {
    this.c_countries = await this.countries
  }
}
</script>
