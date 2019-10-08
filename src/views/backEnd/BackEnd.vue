<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-12 mt-5">
        <div class="list-group">
          <router-link
            to="/backEnd"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/backEnd'}"
          ><i class="fa fa-newspaper-o" aria-hidden="true"></i> 最新消息</router-link>
          <router-link
            to="/backEnd/movieManage"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/backEnd/movieManage'}"
          ><i class="fa fa-video-camera" aria-hidden="true"></i> 電影</router-link>
          <router-link
            to="/backEnd/mealsManage"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/backEnd/mealsManage'}"
          ><i class="fa fa-cutlery" aria-hidden="true"></i> &nbsp;餐點</router-link>
          <router-link
            to="/backEnd/memberManage"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/backEnd/memberManage'}"
          ><i class="fa fa-users" aria-hidden="true"></i> 會員</router-link>
          <router-link
            to="/backEnd/report"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/backEnd/report'}"
          ><i class="fa fa-bar-chart" aria-hidden="true"></i> 報表</router-link>
        </div>
        <button class="btn btn-secondary mt-3" @click="crawl">借鑑電影資料<i class="fa fa-hand-rock-o" aria-hidden="true"></i></button>
      </div>
      <div class="col-md-9 col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:""
    }
  },
  methods:{
    crawl(){
      this.$toasted.info("借鑑電影資料中",{
        theme: "bubble"
      });
      this.axios.get(`${this.$api}/crawl.php`).then(response =>{
        this.$toasted.clear();
        this.$toasted.success("借鑑完畢",{
          theme: "bubble",
          duration: 2000
        });
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>