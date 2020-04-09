<template>
  <div class="container">
    <div class="row">
      <div
        class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
      >
        <div class="ui-block">
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
                  450.623
                  <!-- <span class="indicator negative"> - 12.352</span> -->
                </div>
                <div class="sub-title">
                  <span class="negative"
                    ><i class="fa fa-arrow-up" aria-hidden="true"></i> 260,901
                  </span>
                  New cases.
                  <span class="negative"
                    ><i class="fa fa-arrow-up" aria-hidden="true"></i> 11%</span
                  >
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
        <div class="ui-block">
          <div class="ui-block-content">
            <ul class="statistics-list-count">
              <li>
                <div class="points">
                  <span>
                    Total Deaths
                  </span>
                </div>
                <div class="count-stat">
                  28.432
                  <!-- <span class="indicator positive"> + 4.207</span> -->
                </div>
                <div class="sub-title">
                  <span class="negative">212,801 </span> New cases.
                  <span class="negative">63%</span> Increased.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
      >
        <div class="ui-block">
          <div class="ui-block-content">
            <ul class="statistics-list-count">
              <li>
                <div class="points">
                  <span>
                    Discharged
                  </span>
                </div>
                <div class="count-stat">
                  16.502
                  <!-- <span class="indicator positive"> + 1.056</span> -->
                </div>
                <div class="sub-title">
                  <span class="positive"
                    ><i class="fa fa-arrow-down" aria-hidden="true"></i> 234,801
                  </span>
                  New cases.
                  <span class="positive"
                    ><i class="fa fa-arrow-down" aria-hidden="true"></i>
                    30%</span
                  >
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
        <div class="ui-block">
          <div class="ui-block-content">
            <ul class="statistics-list-count">
              <li>
                <div class="points">
                  <span>
                    Under Observation
                  </span>
                </div>
                <div class="count-stat">
                  390.822
                  <span class="indicator positive"> + 2.847</span>
                </div>
                <div class="sub-title">
                  <span class="positive">280001 </span> New cases.
                  <span class="positive">39%</span> Increased.
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
export default {
  name: 'Block'
}
</script>
