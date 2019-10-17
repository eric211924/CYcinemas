<template>
  <div>
    <canvas id="ticketType"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  data() {
    return {
      data: {
        labels: ['一般票', '愛心票', '學生票'],
        datasets: [{
          label: '票種',
          data: [12, 8, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const _this = this;
      const ctx = document.getElementById('ticketType');
      new Chart(ctx, {
        type: 'bar',
        data: _this.data,
        options: _this.options
      });
    },
    getTicketType() {
      const _this = this;
      this.axios.get(`${this.$api}/report/ticketType`).then((response) => {
        console.log(response.data);
      });
    }
  },
}
</script>

<style lang="scss" scoped>
</style>