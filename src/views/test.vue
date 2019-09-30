

<template>
    <div class="count">123</div>
</template>

<script>
import $ from 'jquery';
import axios from "axios";

export default{
    name:'count',
    data(){
      return{
        users: []//預先建立一個數組，用於存放請求得到的資料
      }
    },
    
  }
</script>