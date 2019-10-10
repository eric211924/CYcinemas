<template>
  <div>
    <div
      class="modal fade bd-example-modal-xl"
      id="viewMovies"
      tabindex="-1"
      role="dialog"
      aria-labelledby="viewMovies"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewMoviesTitle">{{ movieData.name }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4"></div>
              <div class="col-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movieData'],
}
</script>

<style lang="scss" scoped>
</style>