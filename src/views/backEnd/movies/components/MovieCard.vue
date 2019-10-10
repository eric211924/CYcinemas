<template>
  <div>
    <div class="row">
      <div
        class="col-6 col-sm-4 col-lg-3 col-xl-2 my-2"
        v-for="(item, index) in moviesData"
        :key="index"
      >
        <div class="card shadow img-container">
          <img :src="item.poster" class="card-img-top" alt />
          <div class="overlay d-flex flex-column justify-content-center">
            <button
              class="btn btn-primary mx-5 mb-2"
              @click.prevent="addShowMovies(item.id)"
              v-if="action == 'add'"
            >加入</button>
            <button
              class="btn btn-danger mx-5 mb-2"
              @click.prevent="removeShowMovies(item.id)"
              v-if="action == 'remove'"
            >移除</button>
            <button class="btn btn-warning mx-5 mb-2">修改</button>
            <button class="btn btn-info mx-5 mb-2">檢視</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['moviesData', 'action'],
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