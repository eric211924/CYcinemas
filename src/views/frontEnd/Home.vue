<template>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="4000">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active data-interval='4000' ">
          <img src="../../assets/home_1.jpg" class="d-block w-100" alt="壞壞萌雪怪" />
        </div>
        <div class="carousel-item">
          <img src="../../assets/home_2.jpg" class="d-block w-100" alt="黑魔女2" />
        </div>
        <div class="carousel-item">
          <img src="../../assets/home_3.jpg" class="d-block w-100" alt="小丑" />
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
        <img src="..\..\assets\home_s_2.jpeg" class="card-img-top imgSmall" alt="..." />
        <div class="card-body">
          <h5 class="card-title">壞壞萌雪怪</h5>
          <p class="card-text"></p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <div class="btn-group" role="group" aria-label="Basic example"></div>
          </small>
        </div>
      </div>
      <div class="card">
        <img src="..\..\assets\home_s_1.jpeg" class="card-img-top imgSmall" alt="..." />
        <div class="card-body">
          <h5 class="card-title">黑魔女2</h5>
          <p class="card-text"></p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <button type="button" class="btn btn-outline-secondary" style="float:left;">預告</button>
            <button type="button" class="btn btn-outline-success" style="float:right;">場次</button>
          </small>
        </div>
      </div>
      <div class="card">
        <img src="..\..\assets\home_s_3.jpeg" class="card-img-top imgSmall" alt="..." />
        <div class="card-body">
          <h5 class="card-title">小丑</h5>
          <p class="card-text"></p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <button type="button" class="btn btn-primary btn-sm" style="float:left;">預告</button>
            
            <button type="button" class="btn btn-secondary btn-sm" style="float:right;">場次</button>
            
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
  name: "home",
  components: {
    // MovieCard
  },
  data() {
    return {
      //  imgAr: Array(4),
    };
  }
};
</script>
<style  scoped>
.imgSmall img {
  width: 340px;
  height: 490px;
  /* width: auto;
  height: auto; 
  width: 100%;
  height:100%; */
}
.card-deck {
  margin-bottom: 100px;
}
.card {
  /* border: 1px solid; */
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
}

</style>
