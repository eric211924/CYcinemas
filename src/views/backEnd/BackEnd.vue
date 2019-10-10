<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-3 col-lg-2 my-5 py-0">
        <!-- 當前頁面 -->
        
        <!-- 側邊攔 -->
        <div class="list-group shadow">
          <div class="accordion" id="dashboard">
            <!-- 最新消息 -->
            <a
              href="#news"
              class="list-group-item list-group-item-action dropdown-toggle bg-cy-deep text-white"
              data-toggle="collapse"
              role="button"
              aria-expanded="true"
              aria-controls="news"
            >
              <i class="fa fa-newspaper-o" aria-hidden="true"></i> 最新消息
            </a>
            <div
              class="collapse"
              :class="{'show': checkRouter('/backEnd')}"
              id="news"
              aria-labelledby="news"
              data-parent="#dashboard"
            >
              <ul class="list-group list-group-flush">
                <li class="pl-5" :class="{'bg-cy': checkRouter('/backEnd')}">
                  <router-link
                    to="/backEnd"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd')}"
                  >所有消息</router-link>
                </li>
              </ul>
            </div>

            <!-- 電影 -->
            <a
              href="#movies"
              class="list-group-item list-group-item-action dropdown-toggle bg-cy-deep text-white"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="movies"
            >
              <i class="fa fa-video-camera" aria-hidden="true"></i> 電影
            </a>
            <div
              class="collapse"
              :class="{'show': checkRouter('/backEnd/moviesManage', true)}"
              id="movies"
              aria-labelledby="movies"
              data-parent="#dashboard"
            >
              <ul class="list-group list-group-flush">
                <li class="pl-5" :class="{'bg-cy': checkRouter('/backEnd/moviesManage')}">
                  <router-link
                    to="/backEnd/moviesManage"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd/moviesManage')}"
                  >所有電影</router-link>
                </li>
                <li class="pl-5" :class="{'bg-cy': checkRouter('/backEnd/moviesManage/released')}">
                  <router-link
                    to="/backEnd/moviesManage/released"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd/moviesManage/released')}"
                  >現正上映</router-link>
                </li>
                <li
                  class="pl-5"
                  :class="{'bg-cy': checkRouter('/backEnd/moviesManage/comingSoon')}"
                >
                  <router-link
                    to="/backEnd/moviesManage/comingSoon"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd/moviesManage/comingSoon')}"
                  >即將上映</router-link>
                </li>
                <li class="pl-5" :class="{'bg-cy': checkRouter('/backEnd/moviesManage/popular')}">
                  <router-link
                    to="/backEnd/moviesManage/popular"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd/moviesManage/popular')}"
                  >強檔電影</router-link>
                </li>
              </ul>
            </div>

            <!-- 餐點 -->
            <a
              href="#meals"
              class="list-group-item list-group-item-action dropdown-toggle bg-cy-deep text-white"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="meals"
            >
              <i class="fa fa-cutlery" aria-hidden="true"></i>&nbsp; 餐點
            </a>
            <div
              class="collapse"
              :class="{'show': checkRouter('/backEnd/mealsManage', true)}"
              id="meals"
              aria-labelledby="meals"
              data-parent="#dashboard"
            >
              <ul class="list-group list-group-flush">
                <li class="pl-5" :class="{'bg-cy': checkRouter('/backEnd/mealsManage')}">
                  <router-link
                    to="/backEnd/mealsManage"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd/mealsManage')}"
                  >所有餐點</router-link>
                </li>
                <li class="pl-5">
                  <a href class="py-2">食物</a>
                </li>
                <li class="pl-5">
                  <a href class="py-2">飲料</a>
                </li>
              </ul>
            </div>

            <!-- 折扣 -->
            <a
              href="#discount"
              class="list-group-item list-group-item-action dropdown-toggle bg-cy-deep text-white"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="discount"
            >
              <i class="fa fa-percent" aria-hidden="true"></i> &nbsp;折扣
            </a>
            <div
              class="collapse"
              :class="{'show': checkRouter('/backEnd/discountManage', true)}"
              id="discount"
              aria-labelledby="discount"
              data-parent="#dashboard"
            >
              <ul class="list-group list-group-flush">
                <li class="pl-5" :class="{'bg-cy': checkRouter('/backEnd/discountManage')}">
                  <router-link
                    to="/backEnd/discountManage"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd/discountManage')}"
                  >所有折扣</router-link>
                </li>
              </ul>
            </div>

            <!-- 會員 -->
            <router-link
              to="/backEnd/memberManage"
              class="list-group-item list-group-item-action bg-cy-deep text-white"
            >
              <i class="fa fa-users" aria-hidden="true"></i> 會員
            </router-link>

            <!-- 報表 -->
            <router-link
              to="/backEnd/report"
              class="list-group-item list-group-item-action bg-cy-deep text-white"
            >
              <i class="fa fa-bar-chart" aria-hidden="true"></i> 報表
            </router-link>
          </div>
        </div>

        <!-- 一鍵爬蟲 -->
        <button class="btn btn-secondary mt-3" @click="crawl">
          借鑑電影資料
          <i class="fa fa-hand-rock-o" aria-hidden="true"></i>
        </button>
      </div>
      <div class="col-12 col-md-9 col-lg-10">
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
      text: String,
      pageName: String
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
    },
    checkRouter(router, show = false) {
      if (show) {
        let result = this.$route.path.indexOf(`${router}`) >= 0 ? true : false;
        return result;
      }
      let result = this.$route.path == router ? true : false;
      return result;
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    list-style: none;
    a {
      display: block;
    }
    a:hover {
      text-decoration: none;
      color: #eee;
    }
    a:active {
      color: #eee;
    }
  }
  li:hover {
    background-color: #becb01;
  }
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.bg-cy {
  background-color: #becb01;
}

.bg-cy-deep {
  background-color: #4f5228;
}
</style>