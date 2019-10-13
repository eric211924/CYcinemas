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
            <!-- <h5 class="modal-title" id="viewMoviesTitle">{{ movieData.name }}</h5> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row mb-3">
              <div class="col-12 col-md-4">
                <img :src="movieData.poster" alt="">
              </div>
              <div class="col-12 col-md-8">
                <p class="h3">片名 : {{ movieData.name }}</p>
                <p class="h5">主演 : {{ movieData.actor }}</p>
                <p class="h5">類型 : {{ movieData.genre }}</p>
                <p class="h5">分級 : {{ movieData.rating }}</p>
                <p class="h5">片長 : {{ movieData.run_time }}</p>
                <p class="h5">上映日期 : {{ movieData.play_date }}</p>
                <p class="h5">描述 : {{ movieData.info }}</p>
              </div>
            </div>
            <iframe width="100%" height="600" :src="movieData.trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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