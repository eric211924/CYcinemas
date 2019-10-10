<template>
  <div>
    <div class="row">
      <div
        class="col-6 col-sm-4 col-lg-3 col-xl-2 my-2"
        v-for="(item, index) in moviesData"
        :key="index"
      >
        <div class="card shadow">
          <img :src="item.poster" class="card-img-top" alt />
          <!-- <div class="card-body">
            <div class="card-title">{{ item.name }}</div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moviesData: Array
    }
  },
  mounted() {
      this.getMovies();
  },
  methods: {
      getMovies() {
          const _this = this;
          this.axios.get(`${this.$api}/movies/comingSoon`).then((response) => {
              console.log(response.data);
              _this.moviesData = response.data;
          });
      }
  }
}
</script>

<style lang="scss" scoped>
</style>