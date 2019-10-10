<template>
  <div>
    <h4 class="text-center mt-5">要呈現在前台的電影</h4>
    <hr />
    <h5 v-if="showMoviesData == ''" class="text-center">目前無資料</h5>
    <MovieCard :action="'remove'" :movies-data="showMoviesData" @remove="removeShowMovies"></MovieCard>
    <h4 class="text-center mt-5">所有已上映電影</h4>
    <hr />
    <MovieCard :action="'add'" :movies-data="moviesData" @add="addShowMovies"></MovieCard>
  </div>
</template>

<script>
import MovieCard from '@/views/backEnd/movies/components/MovieCard.vue';

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      moviesData: Array,
      showMoviesData: Array,
    }
  },
  mounted() {
    this.getMovies();
    this.getShowMovies();
  },
  methods: {
    // 取得所有上映中的電影
    getMovies() {
      const _this = this;
      this.axios.get(`${this.$api}/movies/showMovies/released/0`).then((response) => {
        // console.log(response.data);
        _this.moviesData = response.data;
      });
    },
    // 取得要顯示於前台的上映電影
    getShowMovies() {
      const _this = this;
      this.axios.get(`${this.$api}/movies/showMovies/released/1`).then((response) => {
        // console.log(response.data);
        _this.showMoviesData = response.data;
      });
    },
    // 加入顯示
    addShowMovies(movieId) {
      const _this = this;
      this.axios.get(`${this.$api}/movies/addShowMovies/${movieId}`).then((response) => {
        // console.log(response.data);
        this.getMovies();
        this.getShowMovies();
      });
    },
    // 移除顯示
    removeShowMovies(movieId) {
      const _this = this;
      this.axios.get(`${this.$api}/movies/removeShowMovies/${movieId}`).then((response) => {
        // console.log(response.data);
        this.getMovies();
        this.getShowMovies();
      });
    }
  }
}
</script>

<style lang="scss" scoped>
h4 {
  font-weight: 600;
  opacity: .5;
}
hr {
  margin-top: 0;
}
</style>