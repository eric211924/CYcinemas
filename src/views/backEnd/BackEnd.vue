<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-2 my-3">
        <div class="list-group shadow">
          <div class="accordion" id="dashboard">
            <!-- 最新消息 -->
            <a
              href="#news"
              class="list-group-item list-group-item-action dropdown-toggle"
              data-toggle="collapse"
              role="button"
              aria-expanded="true"
              aria-controls="news"
            >
              <i class="fa fa-newspaper-o" aria-hidden="true"></i> 最新消息
            </a>
            <div class="collapse" id="news" aria-labelledby="news" data-parent="#dashboard">
              <ul class="list-group list-group-flush">
                <li class="pl-5 my-1">
                  <router-link
                    to="/backEnd"
                    :class="{'active': this.$route.path == '/backEnd'}"
                  >所有消息</router-link>
                </li>
                <li class="pl-5 my-1">
                  <a href>新增</a>
                </li>
              </ul>
            </div>

            <!-- 電影 -->
            <a
              href="#movies"
              class="list-group-item list-group-item-action dropdown-toggle"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="movies"
            >
              <i class="fa fa-video-camera" aria-hidden="true"></i> 電影
            </a>
            <div class="collapse" id="movies" aria-labelledby="movies" data-parent="#dashboard">
              <ul class="list-group list-group-flush">
                <li class="pl-5 my-1">
                  <router-link
                    to="/backEnd/movieManage"
                    :class="{'active': this.$route.path == '/backEnd/movieManage'}"
                  >所有電影</router-link>
                </li>
                <li class="pl-5 my-1">
                  <a href>上映中</a>
                </li>
                <li class="pl-5 my-1">
                  <a href>即將上映</a>
                </li>
                <li class="pl-5 my-1">
                  <a href>強檔電影</a>
                </li>
                <li class="pl-5 my-1">
                  <a href>新增</a>
                </li>
              </ul>
            </div>

            <!-- 餐點 -->
            <a
              href="#meals"
              class="list-group-item list-group-item-action dropdown-toggle"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="meals"
            >
              <i class="fa fa-cutlery" aria-hidden="true"></i> &nbsp; 餐點
            </a>
            <div class="collapse" id="meals" aria-labelledby="meals" data-parent="#dashboard">
              <ul class="list-group list-group-flush">
                <li class="pl-5 my-1">
                  <router-link
                    to="/backEnd/mealsManage"
                    :class="{'active': this.$route.path == '/backEnd/mealsManage'}"
                  >所有餐點</router-link>
                </li>
                <li class="pl-5 my-1">
                  <a href>食物</a>
                </li>
                <li class="pl-5 my-1">
                  <a href>飲料</a>
                </li>
                <li class="pl-5 my-1">
                  <a href>新增</a>
                </li>
              </ul>
            </div>

            <!-- 折扣 -->
            <a
              href="#discount"
              class="list-group-item list-group-item-action dropdown-toggle"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="discount"
            >
              <i class="fa fa-percent" aria-hidden="true"></i> &nbsp;折扣
            </a>
            <div class="collapse" id="discount" aria-labelledby="discount" data-parent="#dashboard">
              <ul class="list-group list-group-flush">
                <li class="pl-5 my-1">
                  <router-link
                    to="/backEnd/discountManage"
                    :class="{'active': this.$route.path == '/backEnd/discountManage'}"
                  >所有折扣</router-link>
                </li>
                <li class="pl-5 my-1">
                  <a href>新增</a>
                </li>
              </ul>
            </div>

            <!-- 會員 -->
            <router-link
              to="/backEnd/memberManage"
              class="list-group-item list-group-item-action"
              :class="{'active': this.$route.path == '/backEnd/memberManage'}"
            >
              <i class="fa fa-users" aria-hidden="true"></i> 會員
            </router-link>

            <!-- 報表 -->
            <router-link
              to="/backEnd/report"
              class="list-group-item list-group-item-action"
              :class="{'active': this.$route.path == '/backEnd/report'}"
            >
              <i class="fa fa-bar-chart" aria-hidden="true"></i> 報表
            </router-link>
          </div>

          <!-- <button class="btn btn-secondary mt-3" @click="crawl">
          借鑑電影資料
          <i class="fa fa-hand-rock-o" aria-hidden="true"></i>
          </button>-->
        </div>
      </div>
      <div class="col-12 col-md-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      text: ""
    }
  },
  methods: {
    crawl() {
      this.$toasted.info("借鑑電影資料中", {
        theme: "bubble"
      });
      this.axios.get(`${this.$api}/crawl.php`).then((response) => {
        this.$toasted.clear();
        this.$toasted.success("借鑑完畢", {
          theme: "bubble",
          duration: 2000
        });
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    list-style: none;
    a::before {
      content: "- ";
      color: #000;
    }
  }
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}
</style>