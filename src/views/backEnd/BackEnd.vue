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
          ><i class="fa fa-cutlery" aria-hidden="true"></i> 餐點</router-link>
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

    }
  }
}
</script>

<style lang="scss" scoped>
</style>