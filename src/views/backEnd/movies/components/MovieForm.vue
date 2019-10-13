<template>
  <div>
    <div
      class="modal fade"
      id="movieForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="movieFormTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="movieFormTitle">{{ action }}電影</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movieData', 'action'],
  data() {
    return {

    }
  },
  methods: {
      
  },
}
</script>

<style lang="scss" scoped>
</style>