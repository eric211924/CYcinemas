<template>
  <div>
    <button class="btn btn-primary mt-4" data-toggle="modal" data-target="#addNews">新增 +</button>
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
          <td>{{ item.news_id }}</td>
          <td>
            <img :src="item.news_img_thumbs_url" width="130px" height="100px" />
          </td>
          <td>{{ item.news_title }}</td>
          <td class="overflow-hidden">{{ item.news_content }}</td>
          <td>{{ item.news_time }}</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-warning btn-sm">修改</button>
              <button
                class="btn btn-danger btn-sm"
                data-toggle="modal"
                data-target="#deleteModal"
                @click.prevent="setId = item.news_id"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <DeleteModal @delete="deleteNews"></DeleteModal>

    <!-- add news -->
    <div
      class="modal fade"
      id="addNews"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNews"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">新增消息</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>標題 :</label>
              <input type="text" class="form-control" v-model="title" required />
            </div>
            <div class="form-group">
              <label>內容 :</label>
              <textarea class="form-control" rows="10" v-model="content" required></textarea>
            </div>
            <div class="form-group">
              <input type="file" id="file" accept="image/*" class="form-control" ref="file" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
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
import $ from 'jquery';

export default {
  components: {
    DeleteModal
  },
  data() {
    return {
      api: 'https://cy-cinemas.ml/news',
      newsData: [],
      setId: Number,
      title: '',
      content: '',
      file: ''
    }
  },
  mounted() {
    this.getNewsData();
  },
  methods: {
    getNewsData() {
      const _this = this;
      $.ajax({
        type: "GET",
        url: `${_this.api}/get`,
        dataType: "JSON",
        success: function (response) {
          console.log(response);
          _this.newsData = response;
        }
      });
    },
    addNews() {
      const _this = this;
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('title', this.title);
      formData.append('content', this.content);
      this.axios.post(`${this.api}/add`, formData, {
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
        _this.title = '';
        _this.content = '';
        _this.file = '';
      });
    },
    deleteNews() {
      console.log(this.setId);
      const _this = this;
      $.ajax({
        type: "DELETE",
        url: `${_this.api}/del/${_this.setId}`,
        dataType: "JSON",
        success: function (response) {
          console.log(response);
          _this.$toasted.success(response.msg, {
            theme: 'bubble',
            duration: 3000
          });
          _this.getNewsData();
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>