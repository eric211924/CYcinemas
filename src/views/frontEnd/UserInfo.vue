<template>
    <div>
        <h1 class="text-center my-5">會員資料</h1>
        Name: {{ name }}
        Account: {{ account }}
        Password: {{ password }}
        Email: {{ email }}
        Phone: {{ phone }}
        <hr>
        姓名: XXXX (不可改)
        <br><br>
        帳號: XXXX (不可改)
        <br><br>
        密碼: XXXX (可改)
        <input type="submit" value="修改密碼">
        <br><br>
        Email: XXXX@XXXXX.XXX (可改)
        <br><br>
        電話: 12345678 (可改)
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
        checkMember() {
            console.log("OK");
            var getAccount = JSON.parse(localStorage.getItem("allUser")); // 取得會員清單
            var logAccount = localStorage.getItem('logAccount'); // 取得登入帳號
            var accIsExist = getAccount.find(getAccount => getAccount.account == logAccount); // 取得目前登入會員資料

            this.name = accIsExist.name;
            this.account = accIsExist.account;
            this.password = accIsExist.password;
            this.email = accIsExist.email;
            this.phone = accIsExist.phone;
        }
    }
}
</script>