<template>
  <div>
    <div class="row">
      <div
        class="col-6 col-sm-4 col-lg-3 col-xl-2 my-2"
        v-for="(item, index) in movieData"
        :key="index"
      >
        <div class="card shadow">
          <img :src="item.poster" class="card-img-top" alt />
          <!-- <div class="card-body">
            <div class="card-title">{{ item.name }}</div>
          </div> -->
        </div>
      </div>
    </div>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import DeleteModal from "@/components/DeleteModal.vue";
import Loading from "@/components/Loading.vue";

export default {
  components: {
    DeleteModal,
    Loading
  },
  data() {
    return {
      movieData: Array,
      isLoading: true
    };
  },
  watch: {
    movieData(val) {
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
        _this.movieData = response.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>