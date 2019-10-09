<template>
  <div>
    <button
      class="btn btn-primary my-3"
      data-toggle="modal"
      data-target="#mealsForm"
      @click.prevent="action = '新增'"
    >新增 +</button>
    <div class="row">
      <div class="col-6 col-md-4 col-lg-3 mb-3" v-for="(item, index) in mealsData" :key="index">
        <div class="card">
          <img src="https://fakeimg.pl/250x200" class="card-img-top" alt />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p>價格 : {{ item.price }}</p>
            <p>大小 : {{ item.size }}</p>
            <div class="btn-group d-flex justify-content-center">
              <button
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#mealsForm"
                @click.prevent="action = '修改'"
              >修改</button>
              <button class="btn btn-danger">刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Meals Form -->
    <div
      class="modal fade"
      id="mealsForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mealsForm"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="mealsForm">{{ action }}餐點</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label></label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">送出</button>
          </div>
        </div>
      </div>
    </div>

    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  components: {
    Loading,
    DeleteModal
  },
  data() {
    return {
      mealsData: [],
      action: '',
      isLoading: true
    }
  },
  watch: {
    mealsData(val) {
      if (val) {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.getMealsData();
  },
  methods: {
    getMealsData() {
      const _this = this;
      this.axios.get(`${this.$api}/meals/`).then((response) => {
        console.log(response.data);
        _this.mealsData = response.data;
      });
    },
    addMeals() {
      const _this = this;
      let formData = new FormData();
      this.file = this.$refs.file.files[0];

    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 5px 10px 18px #888888;
}
</style>