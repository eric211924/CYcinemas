<template>
  <div>
    1
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
      isLoading: false
    };
  },
  methods: {
    getMovies() {

    }
  }
};
</script>



<style lang="scss" scoped>
</style>