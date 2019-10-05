<template>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/home_1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../../assets/home_2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../../assets/home_3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <h1 class="text-center my-5">強檔電影</h1>
    <!-- <MovieCard :img-ar="imgAr"></MovieCard> -->
      <div class="card-deck">
  <div class="card">
    <img src="..\..\assets\home_s_2.jpeg"  class="card-img-top imgSmall" alt="...">
    <div class="card-body">
      <h5 class="card-title">壞壞萌雪怪</h5>
      <p class="card-text">當少女小宜在她居住的上海公寓大樓屋頂遇到一個雪怪，她就和她淘氣調皮的死黨阿靖和潘潘，替他取名為“埃佛勒斯”，然後踏上一場驚險刺激、史詩般的冒險旅程，試圖把這個魔法雪怪帶到地球的最高峰，再度與他的家人團聚。但是這三個超級好朋友必須搶在企圖捕捉一個雪怪的有錢人伯尼西，以及動物學家薩拉博士（莎拉寶森 配音）之前，幫助魔法雪怪埃佛勒斯安全回家。</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        <div class="btn-group" role="group" aria-label="Basic example">
    </div>
      </small>
    </div>
  </div>
  <div class="card">
    <img src="..\..\assets\home_s_1.jpeg"  class="card-img-top imgSmall" alt="...">
    <div class="card-body">
      <h5 class="card-title">黑魔女2</h5>
      <p class="card-text">迪士尼最知名的反派黑魔女回來了！。對人類還是存有戒心的梅菲瑟，一心想保護奧蘿拉公主，卻適得其反，不但與公主的關係岌岌可危，還可能引發一場牽連無辜的大戰… 迪士尼最知名的反派黑魔女回來了！除了安潔莉娜裘莉再度回歸飾演黑魔女梅菲瑟，艾兒芬妮演出睡美人公主奧蘿拉，續集還加入蜜雪兒菲佛飾演的英格麗皇后。</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        <button type="button" class="btn btn-outline-secondary" style="float:left;">預告片</button>
        <button type="button" class="btn btn-outline-success" style="float:right;">前往購票</button>
      </small>
    </div>
  </div>
  <div class="card">
    <img src="..\..\assets\home_s_3.jpeg"  class="card-img-top imgSmall" alt="...">
    <div class="card-body">
      <h5 class="card-title">小丑</h5>
      <p class="card-text">時刻表</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
          <button type="button" class="btn btn-primary btn-sm" style="float:left;">預告片</button>
          <button type="button" class="btn btn-secondary btn-sm" style="float:right;">前往購票</button>
      </small>
    </div>
  </div>
</div>




  </div>
</template>

<script>
// @ is an alias to /src
// import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'home',
  components: {
    // MovieCard
  },
  data() {
    return {
      //  imgAr: Array(4),
      
    }
  }
}
</script>
<style>
.imgSmall img {
  width: auto;
  height: auto;
  width: 100%;
  height:100%;
}
.card-deck{
  margin-bottom: 100px;
}


</style>
