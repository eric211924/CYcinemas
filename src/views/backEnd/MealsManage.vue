<template>
  <div>
    <button class="btn btn-primary my-3">新增 +</button>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2" v-for="(item, index) in foodsData" :key="index">
        <div class="card">
          <img src="https://fakeimg.pl/250x200" class="card-img-top" alt />
          <div class="card-body">
            <h5 class="card-title">可樂</h5>
            <p>價格 : 50</p>
            <p>大小 : 大</p>
            <div class="btn-group d-flex justify-content-center">
              <button class="btn btn-warning">修改</button>
              <button class="btn btn-danger">刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  components: {
    Loading
  },
  data() {
    return {
      foodsData: Array(4),
      isLoading: false
    }
  },
  watch: {
    foodsData(val) {
      // if (!val) {
      //   this.isLoading = false;
      // }
    }
  },
  mounted() {
    this.getMealsData();
  },
  methods: {
    getMealsData() {
      // this.axios.get(`${this.$api}/meals`).then((response) => {
      //   console.log(response.data);
      // });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>