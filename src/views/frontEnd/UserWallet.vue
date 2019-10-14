<template>
    <div>
        <h1 class="text-center my-5">消費/儲值紀錄</h1>
        <hr>
        <button type="button" class="btn btn-primary btn-sm">LOG</button>
        <hr>
        <!-- 列出所有紀錄 -->
        <div class="accordion">
            <!-- 一筆訂單 -->
            <div class="card" v-for="(item, key) in list">
                <!-- 訂單標題 -->
                <div class="card-header">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#' + item.id">
                            消費時間: {{ item.dateTime }} , 訂單編號: {{ item.serialNum }}
                        </button>
                    </h2>
                </div>
                <!-- 訂單詳細 -->
                <div v-bind:id="item.id" class="collapse">
                    <div class="card-body">
                        姓名: {{ item.name }}
                        <br>
                        電話: {{ item.phone }}
                        <br>
                        Email: {{ item.email }}
                        <br>
                        消費金額: {{ item.totalPrice }}
                        <br>
                        Ticket number: {{ item.ticketNum }} 
                        <br>
                        Meal Number: {{ item.mealNum }}
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
            list: [
                {id: 'one', serialNum: '0000001', dateTime: '2019-10-13 19:50:17', totalPrice: '800', ticketNum: '001111', mealNum: '12345', name: 'Abc', phone: '0912345678', email: 'aaa@aaa.com'},
                {id: 'two', serialNum: '0000002', dateTime: '2019-10-12 19:50:17', totalPrice: '700', ticketNum: '001232', mealNum: '22222', name: 'asd', phone: '0945544444', email: 'bbb@aaa.com'},
                {id: 'three', serialNum: '0000003', dateTime: '2019-10-11 19:50:17', totalPrice: '600', ticketNum: '018418', mealNum: '33333', name: 'asdaas', phone: '09543453543', email: 'ccc@aaa.com'},
                {id: 'four', serialNum: '0000004', dateTime: '2019-10-10 19:50:17', totalPrice: '500', ticketNum: '164594', mealNum: '44444', name: 'asdasd', phone: '0945345354', email: 'ddd@aaa.com'},
                {id: 'five', serialNum: '0000005', dateTime: '2019-10-09 19:50:17', totalPrice: '400', ticketNum: '599787', mealNum: '55555', name: 'Abvherhc', phone: '0953453453', email: 'eee@aaa.com'},
                {id: 'six', serialNum: '0000006', dateTime: '2019-10-08 19:50:17', totalPrice: '300', ticketNum: '339994', mealNum: '66666', name: 'rhehew', phone: '45345345354', email: 'fff@aaa.com'},
                {id: 'seven', serialNum: '0000007', dateTime: '2019-10-07 19:50:17', totalPrice: '200', ticketNum: '985642', mealNum: '77777', name: 'efwefwe', phone: '3542345345', email: 'hhh@aaa.com'},
                {id: 'eight', serialNum: '0000008', dateTime: '2019-10-06 19:50:17', totalPrice: '100', ticketNum: '294997', mealNum: '88888', name: 'wev4yt', phone: '54345345345', email: 'gfff@aaa.com'},
                {id: 'nine', serialNum: '0000009', dateTime: '2019-10-05 19:50:17', totalPrice: '900', ticketNum: '369785', mealNum: '99999', name: 'ertewtywe', phone: '3543453453', email: 'efase@aaa.com'},
            ]
            // result: '',
            // datetime: '',
            // accountName: '',
            // serialNum: '',
            // courtsID: '',
            // seat: '',
            // totalPrice: '',
            // discPrice: '',
            // ticketTotalNum: '',
            // ticketNum: '',
            // mealNum: '',
            // name: '',
            // phone: '',
            // email: '',
        }
    },
    methods: {
        showDetail() {
            var _this = this;
            var targetAcc = sessionStorage.getItem('nowAcc');
            var formData = new FormData();
            formData.append('account', targetAcc);
            this.axios.post('https://cy-cinemas.ml/members/showDetail', formData)
                .then(function (response) {
                    _this.result = response.data;
                    _this.$toasted.success("OK", {
                        theme: 'bubble',
                        duration: 3000
                    });
                    console.log(_this.result);
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