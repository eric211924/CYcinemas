<template>
  <div>
    <button class="btn btn-primary my-3">新增 +</button>
    <div class="row">
      <div class="col-12 col-sm-4 col-md-3 mb-2" v-for="(item, index) in foodsData" :key="index">
        <div class="card">
          <img src="https://fakeimg.pl/250x200" class="card-img-top" alt />
          <div class="card-body">
            <h5 class="card-title">可樂</h5>
            <p>價格 : 50</p>
            <p>大小 : 大</p>
            <div class="btn-group d-flex justify-content-center">
              <button class="btn btn-warning">修改</button>
              <button class="btn btn-danger">刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodsData: Array(4)
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>