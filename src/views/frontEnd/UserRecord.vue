<template>
    <div>
        <h1 class="text-center my-5">消費紀錄</h1>
        <hr>
        <!-- <button type="button" class="btn btn-primary btn-sm">LOG</button>
        <hr> -->
        <!-- 列出所有紀錄 -->
        <div class="accordion" id="head">
            <!-- 一筆訂單 -->
            <div class="card" v-for="(item, key) in result" :key="key">
                <!-- 訂單標題 -->
                <div class="card-header">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="`#hd-${item.id}`">
                            消費時間: {{ item.datetime }} , 訂單編號: {{ item.serial_number }}
                        </button>
                    </h2>
                </div>
                <!-- 訂單詳細 -->
                <div v-bind:id="`hd-${item.id}`" class="collapse"  data-parent="#head">
                    <div class="card-body">
                        姓名 :  {{ item.name }}
                        <br>
                        電話 :  {{ item.phone }}
                        <br>
                        Email :  {{ item.email }}
                        <br>
                        訂單金額 :  {{ item.total_price }}
                        <br>
                        折扣後金額(實際金額) :  {{ item.discounted_price }}
                        <br>
                        廳 :  第 {{ item.courts_id }} 廳
                        <br>
                        票種 :  {{ item.tickets_num }} 
                        <br>
                        餐飲 :  {{ item.meals_num }}
                        <br>
                        座位號碼 :  {{ item.seat }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // 抓取消費紀錄並顯示
    // "SELECT * FROM `orser_details` WHERE `member_account` = :account"
    // 每筆紀錄顯示順序
    // serial_number -- datetime
    data() {
        return {
            result: [],
        }
    },
    mounted() {
        this.showDetail();
    },
    methods: {
        showDetail() {
            var _this = this;
            var targetAcc = sessionStorage.getItem('nowAcc');
            var formData = new FormData();
            formData.append('account', targetAcc);
            this.axios.post(`${this.$api}/members/showDetail`, formData)
                .then(function (response) {
                    _this.result = response.data;
                    // _this.$toasted.success("OK", {
                    //     theme: 'bubble',
                    //     duration: 3000
                    // });
                    console.log(_this.result);

                    _this.result.forEach(function (e) {
                        // console.log(e.tickets_num);
                        var temp = e.tickets_num;
                        temp = temp.replace(/[{}"]/gm, "");
                        temp = temp.replace(/,/gm, ", ");
                        temp = temp.replace(/:/gm, ": ");
                        e.tickets_num = temp;
                        var temp2 = e.meals_num;
                        temp2 = temp2.replace(/[{}"]/gm, "");
                        temp2 = temp2.replace(/,/gm, ", ");
                        temp2 = temp2.replace(/:/gm, ": ");
                        e.meals_num = temp2;
                    });
                }).catch(function (error) {
                    _this.$toasted.error(error, {
                        theme: 'bubble',
                        duration: 3000
                    });
                });
        }
    },
}
</script>