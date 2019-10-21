<template>
  <div>
    <!-- <h1>報表</h1> -->
    <div class="row mt-4">
      <div class="col-12 col-md-6">
        <div class="card p-3 shadow">
          <TicketType></TicketType>
        </div>
      </div>
      <div class="col-12 col-md-4"></div>
      <div class="col-12 col-md-4"></div>
    </div>
  </div>
</template>

<script>
import TicketType from '@/views/backEnd/report/components/TicketType.vue'

export default {
  components: {
    TicketType,
  }
}
</script>