<template>
  <div>
    <div v-if="loading">
      <div class="spin"></div>
    </div>
    <div class="row">
      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="ui-block responsive-flex">
          <div class="ui-block-title">
            <div class="h6 title">Country</div>
            <form class="w-search">
              <div class="form-group label-floating is-select">
                <label class="control-label">Check Your Country</label>
                <select
                  class="selectpicker form-control"
                  @change="changeCountry($event)"
                >
                  <option value="" selected="selected">Global</option>
                  <option
                    v-for="(value, index) in countires"
                    :key="index"
                    :value="value.CountryCode"
                    v-text="value.Country"
                  >
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
      >
        <div class="ui-block item">
          <div class="ui-block-content">
            <ul class="statistics-list-count">
              <li>
                <div class="points">
                  <span>
                    Total Infected
                  </span>
                  <span class="glyphicon glyphicon-plus"></span>
                </div>
                <div class="count-stat">
                  {{ currentCountry.TotalConfirmed }}
                  <span class="indicator negative">
                    + {{ currentCountry.NewConfirmed }}</span
                  >
                </div>
                <div class="sub-title">
                  <span class="negative">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    {{ currentCountry.NewConfirmed }}
                  </span>
                  New cases.
                  <span class="negative">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    {{
                      currentCountry.NewConfirmed
                        | percentage(currentCountry.TotalConfirmed)
                    }}
                  </span>
                  Increased.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
      >
        <div class="ui-block item">
          <div class="ui-block-content">
            <ul class="statistics-list-count">
              <li>
                <div class="points">
                  <span> Total <span class="negative">Deaths</span> </span>
                </div>
                <div class="count-stat">
                  {{ currentCountry.TotalDeaths }}
                  <span class="indicator negative">
                    + {{ currentCountry.NewDeaths }}</span
                  >
                </div>
                <div class="sub-title">
                  <span class="negative">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    {{ currentCountry.NewDeaths }}
                  </span>
                  New cases.
                  <span class="negative">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    {{
                      currentCountry.NewDeaths
                        | percentage(currentCountry.TotalDeaths)
                    }}
                  </span>
                  Increased.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
      >
        <div class="ui-block item">
          <div class="ui-block-content">
            <ul class="statistics-list-count">
              <li>
                <div class="points">
                  <span>
                    Total Recovered
                  </span>
                </div>
                <div class="count-stat">
                  {{ currentCountry.TotalRecovered }}
                  <span class="indicator positive">
                    + {{ currentCountry.NewRecovered }}</span
                  >
                </div>
                <div class="sub-title">
                  <span class="positive">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    {{ currentCountry.NewRecovered }}
                  </span>
                  New recovered .
                  <span class="positive">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    {{
                      currentCountry.NewRecovered
                        | percentage(currentCountry.TotalRecovered)
                    }}
                  </span>
                  Increased.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
      >
        <div class="ui-block item">
          <div class="ui-block-content">
            <ul class="statistics-list-count">
              <li>
                <div class="points">
                  <span> Under Recover </span>
                </div>
                <div class="count-stat">
                  {{ getTotalUnderRecover }}
                  <span class="indicator under-recover">
                    + {{ currentCountry.NewConfirmed }}</span
                  >
                </div>
                <div class="sub-title">
                  <span class="under-recover">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    {{ currentCountry.NewConfirmed }}
                  </span>
                  New cases.
                  <span class="under-recover">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    {{
                      currentCountry.NewConfirmed
                        | percentage(currentCountry.TotalConfirmed)
                    }}
                  </span>
                  Increased.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Block',
  filters: {
    percentage(newCases, totalCases) {
      if (newCases) {
        return Math.round((newCases / totalCases) * 100).toFixed(2) + ' %'
      } else {
        return 0 + '%'
      }
    }
  },
  props: {
    countires: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      selectedCountry: '',
      global: {},
      currentCountry: {},
      loading: false
    }
  },
  computed: {
    ...mapGetters(['getCountries', 'getCurrent']),
    getTotalUnderRecover() {
      return (
        this.currentCountry.TotalConfirmed -
          this.currentCountry.TotalRecovered -
          this.currentCountry.TotalDeaths || ''
      )
    }
  },
  created() {
    this.global = this.getCurrent
    this.currentCountry = this.getCurrent
  },
  methods: {
    ...mapActions(['setCurrentCountry']),
    changeCountry(event) {
      this.loading = true
      const selected = event.target.value
      this.selectedCountry = this.countires.filter(
        (c) => c.CountryCode === selected
      )
      setTimeout(() => {
        if (selected === '') {
          this.currentCountry = this.global
          this.setCurrentCountry(this.global)
          this.loading = false
        } else {
          this.currentCountry = this.selectedCountry[0]
          this.setCurrentCountry(this.selectedCountry[0])
          this.loading = false
        }
      }, 350)
    }
  }
}
</script>
<style>
.negative {
  color: #ff5e3a;
}
.positive {
  color: #08ddc1;
}
.under-recover {
  color: #ffd52f;
}
@media (min-width: 531px) {
  .item {
    min-height: 140px !important;
  }
}
@keyframes spinner {
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
}
.spin::before {
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: #ff5e3a;
  border-radius: 50%;
  content: '';
  height: 40px;
  width: 40px;
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
  z-index: 1000;
}
.sfs {
  color: #5f52ff;
}
</style>
