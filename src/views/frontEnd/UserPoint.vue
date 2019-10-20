<template>
    <div>
        <h1 class="text-center my-5">點數紀錄</h1>
        <hr>
        <!-- th: 日期 | 交易描述 | 此次交易點數 | 交易後點數 -->
        <table>
            <tr>
                <th>日期</th>
                <th>交易描述</th>
                <th>此次交易點數</th>
                <th>交易後點數</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: [],
        }
    },
    mounted() {
        this.showPoint();
    },
    methods: {
        showPoint() {
            var _this = this;
            var targetAcc = sessionStorage.getItem('nowAcc');
            var formData = new FormData();
            formData.append('account', targetAcc);
            this.axios.post(`${this.$api}/members/showPoint`, formData)
                .then(function (response) {
                    _this.result = response.data;
                    console.log(_this.result);
                }).catch(function (error) {
                    _this.$toasted.error(error, {
                        theme: 'bubble',
                        duration: 3000
                    });
                });
        }
    }
}
</script>