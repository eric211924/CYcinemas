<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">阿正大戲院</router-link>
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
          <li class="nav-item" :class="{'active': this.$route.path == '/bonus'}" v-if="isLogin">
            <router-link class="nav-link" to="/bonus">抽獎</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="!isLogin">
          <li class="nav-item">
            <a class="nav-link" href data-toggle="modal" data-target="#login">會員登入</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href data-toggle="modal" data-target="#register">註冊</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="isLogin">
          <li class="nav-item" :class="{'active': this.$route.path == '/user'}">
            <router-link class="nav-link" to="/user">{{ name }} 您好</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/backEnd'}" v-if="isManager">
            <router-link class="nav-link" to="/backEnd">後臺管理</router-link>
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
      isManager: false
    }
  },
  mounted() {
    this.checkCookie();
  },
  methods: {
    checkCookie() {
      if (localStorage.getItem('token')) {
        this.isLogin = true;
        this.name = localStorage.getItem('token');
        if (this.name == 'admin') {
          this.isManager = true;
        }
      }
    },
    getCookie() {
      if (localStorage.getItem('token')) {
        this.isLogin = true;
        this.name = localStorage.getItem('token');
        if (this.name == 'admin') {
          this.isManager = true;
        }
        this.$toasted.success('登入成功', {
          theme: 'bubble',
          duration: 3000
        });
      }
    },
    logout() {
      this.$toasted.success('已登出', {
        theme: 'bubble',
        duration: 3000
      });
      localStorage.clear();
      this.isLogin = false;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>