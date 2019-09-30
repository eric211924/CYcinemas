

<template>
    <div class="count"></div>
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
    created(){ //此處用created相當於對前端頁面資料進行初始化
      axios.get("127.0.0.1:80/api/test.php").then((result)=>{  //這裡是ES6的寫法，get請求的地址，是小編自己在網站上存放的php檔案，後面將介紹其編寫，也可以自己定義
        $('.count').html(result.data);
        console.log('success');
        
      })
    }
  }
</script>