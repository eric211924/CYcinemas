<template>
  <div>
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
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>內容 :</label>
              <textarea class="form-control" rows="10" required></textarea>
            </div>
            <div class="form-group">
              <input type="file" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">送出</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
}
</style>