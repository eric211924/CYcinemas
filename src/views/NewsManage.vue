<template>
  <div>
    <button class="btn btn-primary mt-4" data-toggle="modal" data-target="#addNews">新增 +</button>
    <NewsForm></NewsForm>
    <table class="w-100 mt-2 table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">編號</th>
          <th scope="col">標題</th>
          <th scope="col">內容</th>
          <th scope="col">日期</th>
          <th scope="col">管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in newsData" :key="index">
          <td>{{ item.news_id }}</td>
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
              >刪除</button>
            </div>
          </td>
          <DeleteModal @delete="deleteNews(item.news_id)"></DeleteModal>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NewsForm from '../components/NewsForm.vue';
import DeleteModal from '../components/DeleteModal.vue';
import $ from 'jquery';

export default {
  components: {
    NewsForm,
    DeleteModal
  },
  data() {
    return {
      api: 'https://cy-cinemas.ml/news',
      newsData: []
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
      $.ajax({
        type: "POST",
        url: `${this.api}/add`,
        data: {
          txt: 'test'
        },
        dataType: "JSON",
        success: function (response) {
          console.log(response);
        }
      });
    },
    deleteNews(newsId) {
      const _this = this;
      $.ajax({
        type: "POST",
        url: `${_this.api}/del`,
        data: {
          newsId
        },
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