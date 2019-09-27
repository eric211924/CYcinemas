<template>
    <div>
        <h1 class="text-center my-5">會員資料</h1>

        <h3>姓名: {{ userName }}</h3>
        <br>
        <h3>帳號: {{ account }}</h3>
        <br>
        <h3>密碼: {{ password }}</h3>
        <br>
        <h3>EMAIL: {{ email }}</h3>
        <br>
        <h3>電話: {{ phone }}</h3>
        <br>
    </div>
    

</template>

<script>
export default {
    data() {
        return {
            userName: '',
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
        checkMember() {
            console.log("OK");
            var getAccount = JSON.parse(localStorage.getItem("allUser")); // 取得會員清單
            var logAccount = localStorage.getItem('logAccount'); // 取得登入帳號
            var accIsExist = getAccount.find(getAccount => getAccount.account == logAccount); // 取得目前登入會員資料

            this.userName = accIsExist.name;
            this.account = accIsExist.account;
            this.password = accIsExist.password;
            this.email = accIsExist.email;
            this.phone = accIsExist.phone;
        }
    }
}
</script>