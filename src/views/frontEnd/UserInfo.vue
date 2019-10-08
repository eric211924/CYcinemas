<template>
    <div>
        <h1 class="text-center my-5">會員資料</h1>
        <hr>
        姓名: {{ name }}
        <br><br>
        帳號: {{ account }}
        <br><br>
        密碼: ••••••••••
        <br><br>
        Email: {{ email }}
        <br><br>
        電話: {{ phone }}
        <br><br>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#edit" @click="editData">修改會員資料</button>

        <!-- 會員資料修改視窗 -->
        <div class="modal fade" id="edit">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">修改會員資料</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        test
                    </div>
                    <div class="modal-footer">
                        footer
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
            name: '',
            account: '',
            password: '',
            email: '',
            phone: ''
        }
    },
    mounted() {
        this.checkMember();
    },
    methods: {
        editData() {
            console.log("EDIT!");
        },
        checkMember() {
            if (sessionStorage.getItem('status') == 'login') {
                var nowAcc = sessionStorage.getItem('nowAcc');
                var _this = this;
                var formData = new FormData();
                formData.append('account', nowAcc);
                this.axios.post('https://cy-cinemas.ml/members/showUserData', formData)
                    .then(function (response) {
                        // 傳目前登入的帳號過去找 找回所有資料 顯示於頁面上
                        var result = response.data;
                        _this.name = result[0].name;
                        _this.account = result[0].account;
                        _this.password = result[0].password;
                        _this.email = result[0].email;
                        _this.phone = result[0].phone;
                        // _this.$toasted.success("會員資料取得成功", {
                        //     theme: 'bubble',
                        //     duration: 3000
                        // });
                    }).catch(function (error) {
                        _this.$toasted.error(error, {
                            theme: 'bubble',
                            duration: 3000
                        });
                    });
            }   
        }
    }
}
</script>