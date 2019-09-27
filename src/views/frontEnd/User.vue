<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-12 mt-5">
        <div class="list-group">
          <router-link
            to="/User"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/User'}"
          ><i class="fa fa-address-card-o" aria-hidden="true"></i> 會員資料</router-link>
          <router-link
            to="/User/userWallet"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/User/userWallet'}"
          ><i class="fa fa-usd" aria-hidden="true"></i> 消費/儲值紀錄</router-link>
          <router-link
            to="/User/userPoint"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/User/userPoint'}"
          ><i class="fa fa-contao" aria-hidden="true"></i> 點數紀錄</router-link>
        </div>
      </div>
      <div class="col-md-9 col-12">
        <router-view></router-view>
      </div>
    </div>
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