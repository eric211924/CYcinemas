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

    <!-- <div class="row mt-3">
      <div class="col-12 col-md-6 col-lg-3 mb-3" v-for="(item, index) in moviesData" :key="index">
        <a href data-toggle="modal" data-target="#showMovieData" @click.prevent="showMovie = item">
          <div class="card">
            <img :src="item.img_thumbs_url" alt class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title overflow-hidden w-100">{{ item.title }}</h6>
            </div>
          </div>
        </a>
      </div>
    </div> -->

    <!-- Modal -->
    <!-- <div
      class="modal fade"
      id="showMovieData"
      tabindex="-1"
      role="dialog"
      aria-labelledby="showMovieData"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="showMovieData">{{ showMovie.title }}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row w-100">
              <div class="col-4">
                <img :src="showNews.img_thumbs_url" class="img-thumbnail w-100" alt />
              </div>
              <div class="col-8">
                <p v-if="showNews.start_time != '0000-00-00'">起始時間 : {{ showNews.start_time }}</p>
                <p v-if="showNews.end_time != '0000-00-00'">結束時間 : {{ showNews.end_time }}</p>
                <p>{{ showNews.content }}</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="btn-group my-1 d-flex justify-cotent-center">
              <button
                class="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target="#NewsForm"
                data-dismiss="modal"
                @click.prevent="action = '修改'; getNewsData(showNews.id)"
              >修改</button>
              <button
                class="btn btn-danger btn-sm"
                data-toggle="modal"
                data-target="#deleteModal"
                @click.prevent="setId = showNews.id"
                data-dismiss="modal"
              >刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DeleteModal @delete="deleteNews" @clear="cleanData"></DeleteModal> -->

    <!-- 電影表單 -->
    <!-- <div
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
    </div>-->
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
      isLoading: false
    };
  },
  methods: {}
};
</script>



<style lang="scss" scoped>
.card-title {
  height: 30px;
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>