<template>
  <div>
    <div class="row">
      <div
        class="col-6 col-sm-4 col-lg-3 col-xl-2 my-2"
        v-for="(item, index) in moviesData"
        :key="index"
      >
        <div class="card shadow img-container w-100">
          <img :src="item.poster" class="card-img-top" alt />
          <div class="overlay d-flex flex-column justify-content-center align-items-center">
            <button
              v-if="action == 'add'"
              class="btn btn-primary mx-5 mb-2"
              @click.prevent="addShowMovies(item.id)"
            >加入</button>
            <button
              v-if="action == 'remove'"
              class="btn btn-danger mx-5 mb-2"
              @click.prevent="removeShowMovies(item.id)"
            >移除</button>
            <button
              class="btn btn-warning mx-5 mb-2"
              data-toggle="modal"
              data-target="#movieForm"
              @click.prevent="movie = item; action = '修改'"
            >修改</button>
            <button
              class="btn btn-info mx-5 mb-2"
              data-toggle="modal"
              data-target="#viewMovies"
              @click.prevent="movie = item"
            >檢視</button>
          </div>
        </div>
      </div>
    </div>
    <MovieForm :movie-data="movie" :action="action"></MovieForm>
    <ViewMovies :movie-data="movie"></ViewMovies>
  </div>
</template>

<script>
import ViewMovies from '@/views/backEnd/movies/components/ViewMovies.vue';
import MovieForm from '@/views/backEnd/movies/components/MovieForm.vue';

export default {
  props: ['moviesData', 'action'],
  components: {
    ViewMovies,
    MovieForm
  },
  data() {
    return {
      movie: Array
    }
  },
  methods: {
    addShowMovies(id) {
      this.$emit('add', id);
    },
    removeShowMovies(id) {
      this.$emit('remove', id);
    }
  },
}
</script>