<template>
  <div>
    <button
      class="btn btn-primary mt-4"
      data-toggle="modal"
      data-target="#NewsForm"
      @click.prevent="action = '新增'"
    >新增 +</button>
    <div class="row">
      <div class="col-12 my-2" v-for="(item, index) in newsData" :key="index">
        <div class="row">
          <div class="col-2">
            <img
              class="rounded img-thumbnail"
              :src="item.img_thumbs_url"
              height="100%"
              width="100%"
            />
            <span class="d-flex justify-content-center">{{ item.release_time }}</span>
            <div class="btn-group my-1 d-flex justify-cotent-center">
              <button
                class="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target="#NewsForm"
                @click.prevent="action = '修改'; getNewsData(item.id)"
              >修改</button>
              <button
                class="btn btn-danger btn-sm"
                data-toggle="modal"
                data-target="#deleteModal"
                @click.prevent="setId = item.id"
              >刪除</button>
            </div>
          </div>
          <div class="col-10">
            <span class="d-inline">
              <h5>
                <b>&lt;{{ item.title }}&gt;</b>
              </h5>
              <h6>{{ item.start_time }} ~ {{ item.end_time }}</h6>
            </span>
            <div class="overflow-auto">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <DeleteModal @delete="deleteNews"></DeleteModal>

    <!-- News Form -->
    <div
      class="modal fade"
      id="NewsForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="NewsForm"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">{{ action }}消息</h5>
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
  </div>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  components: {
    DeleteModal
  },
  data() {
    return {
      newsData: [],
      setId: Number,
      title: '',
      content: '',
      startTime: '',
      endTime: '',
      file: '',
      action: '',
    }
  },
  mounted() {
    this.getNewsData();
  },
  methods: {
    // 取的News資料
    getNewsData(newsId = '') {
      const _this = this;
      if (newsId == '') {
        this.axios.get(`${_this.$api}/news/`).then((response) => {
          _this.newsData = response.data;
          console.log(response.data);
        });
      } else {
        this.axios.get(`${_this.$api}/news/${newsId}`).then((response) => {
          let data = response.data[0];
          _this.title = data.title;
          _this.content = data.content;
          _this.startTime = data.start_time;
          _this.endTime = data.end_time;
        });
      }
    },
    // 新增News
    addNews() {
      const _this = this;
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('startTime', this.startTime);
      formData.append('endTime', this.endTime);
      formData.append('file', this.file);
      this.axios.post(`${this.$api}/news/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        if (response.data.status == 201) {
          _this.$toasted.success(response.data.msg, {
            theme: 'bubble',
            duration: 5000
          });
          _this.getNewsData();
          _this.cleanData();
        } else {
          _this.$toasted.error(response.data.msg, {
            theme: 'bubble',
            duration: 5000
          });
        }
      });
    },
    // 更新News
    updateNews() {
      const _this = this;
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('startTime', this.startTime);
      formData.append('endTime', this.endTime);
      formData.append('file', this.file);
      this.axios.put(`${this.$api}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        console.log(response);
        _this.getNewsData();
      });
    },
    // 刪除News
    deleteNews() {
      console.log(this.setId);
      const _this = this;
      this.axios.delete(`${_this.$api}/news/${_this.setId}`).then(response => {
        _this.$toasted.success(response.data.msg, {
          theme: 'bubble',
          duration: 5000
        });
        _this.getNewsData();
      });
    },
    cleanData() {
      this.title = '';
      this.content = '';
      this.file = '';
      this.startTime = '';
      this.endTime = '';
    }
  }
}
</script>

<style lang="scss" scoped>
</style>