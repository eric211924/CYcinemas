<template>
  <div>
    <button class="btn btn-primary mt-4" data-toggle="modal" data-target="#NewsForm" @click.prevent="action = '新增'">新增 +</button>
    <table class="w-100 mt-2 table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">編號</th>
          <th scope="col">圖片</th>
          <th scope="col">標題</th>
          <th scope="col">內容</th>
          <th scope="col">日期</th>
          <th scope="col">管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in newsData" :key="index">
          <td>{{ item.id }}</td>
          <td>
            <img :src="item.img_thumbs_url" width="130px" height="100px" />
          </td>
          <td>{{ item.title }}</td>
          <td class="overflow-hidden">{{ item.content }}</td>
          <td>{{ item.release_time }}</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-warning btn-sm" data-toggle="modal" data-target="#NewsForm" @click.prevent="action = '修改'; getNewsData(item.id)">修改</button>
              <button
                class="btn btn-danger btn-sm"
                data-toggle="modal"
                data-target="#deleteModal"
                @click.prevent="setId = item.id"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
                <textarea class="form-control" rows="10" v-model="content" required></textarea>
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
    getNewsData(newsId = '') {
      const _this = this;
      if (newsId == '') {
        this.axios.get(`${_this.$api}/news/`).then((response) => {
          _this.newsData = response.data;
          console.log(response.data);
        });
      } else {
        this.axios.get(`${_this.$api}/news/${newsId}`).then((response) => {
          console.log(response.data[0].start_time);
          let data = response.data[0];
          _this.title = data.title;
          _this.content = data.content;
          _this.startTime = data.start_time;
          _this.endTime = data.end_time;
        });
      }
    },
    addNews() {
      const _this = this;
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('startTime', this.startTime);
      formData.append('endTime', this.endTime);
      this.axios.post(`${this.$api}/news/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response);
        _this.$toasted.success(response.data.msg, {
          theme: 'bubble',
          duration: 3000
        });
        _this.getNewsData();
        _this.cleanData();
      });
    },
    deleteNews() {
      console.log(this.setId);
      const _this = this;
      this.axios.delete(`${_this.$api}/news/${_this.setId}`).then(response => {
        console.log(response.data);
        _this.$toasted.success(response.data.msg, {
          theme: 'bubble',
          duration: 3000
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