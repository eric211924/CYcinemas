<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/cy-cinemas-ok.png" height="56px" alt />
      </router-link>

      <!-- 窄頁面時 navbar右邊的摺疊按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navbar主要元素 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{'active': this.$route.path == '/'}">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/news'}">
            <router-link class="nav-link" to="/news">最新消息</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/about'}">
            <router-link class="nav-link" to="/about">關於戲院</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/movie'}">
            <router-link class="nav-link" to="/movie">電影介紹</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/order'}">
            <router-link class="nav-link" to="/order">訂票</router-link>
          </li>
          <!-- 會員已登入的狀態下 顯示抽獎頁籤 -->
          <li class="nav-item" :class="{'active': this.$route.path == '/bonus'}" v-if="isLogin">
            <router-link class="nav-link" to="/bonus">抽獎</router-link>
          </li>
        </ul>
        <!-- 會員未登入的狀態下 顯示 會員登入 及 註冊 -->
        <ul class="navbar-nav ml-auto" v-if="!isLogin">
          <li class="nav-item">
            <a class="nav-link" href data-toggle="modal" data-target="#login">會員登入</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href data-toggle="modal" data-target="#register">註冊</a>
          </li>
        </ul>
        <!-- 會員已登入的狀態下 顯示 歡迎訊息 與 登出, 若為管理員登入 多出後臺管理 -->
        <ul class="navbar-nav ml-auto" v-if="isLogin">
          <li class="nav-item" :class="{'active': this.$route.path == '/user'}">
            <router-link class="nav-link" to="/user">{{ name }} 您好</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/backEnd'}" v-if="isManager">
            <router-link class="nav-link" to="/backEnd">
              <i class="fa fa-tachometer" aria-hidden="true"></i> 後臺管理
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href @click="logout()">登出</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- login -->
    <LoginForm @setcookie="getCookie()"></LoginForm>

    <!-- sign up -->
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      isLogin: false,
      name: '',
      isManager: false,
    }
  },
  mounted() { // 頁面載入後所做動作 -> 檢查是否在登入狀態
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem('status')) { // 檢查是否在登入狀態
        this.isLogin = true;
        // console.log(typeof localStorage.getItem('logName'));
        this.name = localStorage.getItem('nowName');
        if (localStorage.getItem('nowAcc') == 'admin') {
          this.isManager = true;
          this.name = localStorage.getItem('nowName');
        }
      }
    },
    getCookie() { // 登入驗證
      var logAccount = localStorage.getItem('logAccount'); // 取得登入帳號
      var logPassword = localStorage.getItem('logPassword'); // 取得登入密碼
      var loginData = new FormData();
      var _this = this;
      loginData.append('account', logAccount);
      loginData.append('password', logPassword);
      //   http://localhost/multi_user/backend/login
      this.axios.post('https://localhost/CYcinemasBackEnd/member/login', loginData)
        .then(function (response) {
          var result = response.data; // 記錄回傳的值 有此會員: 回傳name 和 account, 無此會員: 回傳Failed
          var temp = JSON.stringify(response.data); 
          temp = JSON.parse(temp); // 若有此會員 temp 儲存name 和 account
          // 登入失敗 直接報錯
          if (result == 'Failed') {
            _this.$toasted.error("登入失敗，請確認帳號密碼是否有誤", {
              theme: 'bubble',
              duration: 3000
            });
          } else {
            // 登入成功 判斷是否為管理員
            if (temp.account == 'admin') {
              _this.$toasted.success("管理員登入成功", {
                theme: 'bubble',
                duration: 3000
              });
              // 在登入狀態 且為管理員 紀錄登入狀態 與帳號 姓名
              _this.isLogin = true; 
              _this.isManager = true;
              _this.name = temp.name;
              localStorage.setItem("status", "login");
              localStorage.setItem("nowAcc", temp.account);
              localStorage.setItem("nowName", temp.name);
            } else {
              _this.$toasted.success("會員登入成功", {
                theme: 'bubble',
                duration: 3000
              });
              // 在登入狀態 紀錄登入狀態 與帳號 姓名
              _this.isLogin = true;
              _this.name = temp.name;
              localStorage.setItem("status", "login");
              localStorage.setItem("nowAcc", temp.account);
              localStorage.setItem("nowName", temp.name);
            }
          }
          localStorage.removeItem('logAccount');
          localStorage.removeItem('logPassword');
        }).catch(function (error) {
          _this.result = error;
        });
    },
    // 登出功能
    logout() {
      this.$toasted.success('已登出', {
        theme: 'bubble',
        duration: 3000
      });
      // 移除目前登入的帳號 姓名
      localStorage.removeItem("nowAcc");
      localStorage.removeItem("nowName");
      this.name = '';
      // 狀態改成登出
      localStorage.removeItem('status');
      this.isLogin = false;
      this.isManager = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  background-color: #aaa !important;
}
</style>