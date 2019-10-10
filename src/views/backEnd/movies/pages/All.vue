<template>
  <div>
    <MovieCard :movies-data="moviesData"></MovieCard>
    <!-- <div class="row">
      <div
        class="col-6 col-sm-4 col-lg-3 col-xl-2 my-2"
        v-for="(item, index) in movieData"
        :key="index"
      >
        <div class="card shadow img-container">
          <img :src="item.poster" class="card-img-top" alt />
          <div class="overlay"></div>
        </div>
      </div>
    </div> -->
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import DeleteModal from "@/components/DeleteModal.vue";
import Loading from "@/components/Loading.vue";
import MovieCard from "@/views/backEnd/movies/components/MovieCard.vue";

export default {
  components: {
    DeleteModal,
    Loading,
    MovieCard
  },
  data() {
    return {
      moviesData: Array,
      isLoading: true
    };
  },
  watch: {
    moviesData(val) {
      if (val != '') {
        this.isLoading = false
      }
    }
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      const _this = this;
      this.axios.get(`${this.$api}/movies/`).then((response) => {
        console.log(response.data);
        _this.moviesData = response.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>