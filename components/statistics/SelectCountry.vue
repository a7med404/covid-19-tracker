<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="ui-block responsive-flex">
            <div class="ui-block-title">
              <div class="h6 title">Country</div>
              <form class="w-search">
                <div class="form-group label-floating is-select">
                  <label class="control-label">Check Your Country</label>
                  <select class="selectpicker form-control">
                    <option value="US">United States</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectCountry'
}
</script>
