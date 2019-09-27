<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <GoTop></GoTop>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import GoTop from '@/components/GoTop.vue';

export default {
  components: {
    Navbar,
    GoTop
  },
  mounted() {
    localStorage.setItem('logAccount', 'admin')
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
