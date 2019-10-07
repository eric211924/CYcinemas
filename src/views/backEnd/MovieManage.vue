<template>
  <!-- 最外層 -->
  <div>
    <!-- 新增電影按鈕 -->
    <button
      class="btn btn-primary mt-4"
      data-toggle="modal"
      data-target="#MoviesForm"
      @click.prevent="action = '新增'"
    >新增 +</button>

    <button class="btn btn-primary mt-4 ml-3" @click.prevent="crawl">
      爬蟲
      <i class="fa fa-hand-rock-o" aria-hidden="true"></i>
    </button>

    <!-- 電影表單 -->
    <div
      class="modal fade"
      id="MoviesForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="MoviesForm"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">{{ action }}電影</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click.prevent="cleanData"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>標題 :</label>
                <input type="text" class="form-control" v-model="title" required="required" />
              </div>
              <div class="form-group">
                <label>內容 :</label>
                <textarea class="form-control" rows="5" v-model="content" required></textarea>
              </div>
              <div class="form-group">
                <label>開始時間 :</label>
                <input type="date" class="form-control" v-model="startTime" required />
              </div>
              <div class="form-group">
                <label>結束時間 :</label>
                <input type="date" class="form-control" v-model="endTime" required />
              </div>
              <div class="form-group">
                <input type="file" id="file" accept="image/*" class="form-control" ref="file" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click.prevent="cleanData"
            >取消</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click.prevent="addNews"
              v-if="action == '新增'"
            >送出</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click.prevent="updateNews"
              v-if="action == '修改'"
            >送出</button>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="isLoading"></Loading>

    <!-- 最外層結束 -->
  </div>
</template>

<script>
// import DeleteModal from "@/components/DeleteModal.vue";
import Loading from "@/components/Loading.vue";

export default {
  components: {
    // DeleteModal,
    Loading
  },
  data() {
    return {
      test: "",
      isLoading: false // 顯示 Loading 圖示直到資料準備好
    };
  },
  methods: {
    crawl() {
      this.isLoading = true;
      this.axios
        .get(`${this.$api}/crawl.php`)
        .then(response => {
          this.test = response.data;
          this.isLoading = false;
          this.$toasted.success("爬蟲成功", {
            theme: "bubble",
            duration: 3000
          });
        })
        .catch(function(){
          this.isLoading = false;
          this.$toasted.error("爬蟲失敗", {
            theme: "bubble",
            duration: 3000
          });
        });
    }
  }
};
</script>