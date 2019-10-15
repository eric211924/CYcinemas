<template>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="4000">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>  
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
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

    <!-- 阿正 UIkit 滑塊 start -->
    <div uk-slider="center: true; autoplay: true; autoplay-interval: 3000; index: 0">
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-4@s uk-grid">
            <li v-for="(item, index) in releasedMovies" :key="index">
              <a href data-toggle="modal" data-target="#movieModal" @click.prevent="setMovieModal(item)">
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-img-top">
                          <img :src="item.poster" class="w-100" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
        </ul>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
      </div>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>

    <!-- Modal Start -->
      <div class="modal fade" id="movieModal" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{{ movieData.name }}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <img
                :src="movieData.poster"
                class="card-img"
                alt="..."
                style="float:left;width:180px;height:270px;"
              />
              <div class="text">{{ movieData.info }}</div>
              <iframe width="100%" height="315" :src="movieData.trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
              <button type="button" class="btn btn-outline-success" disabled style="margin:0.5%;">{{ movieData.rating }}</button>
              <button type="button" class="btn btn-outline-success" disabled style="margin:0.5%;">{{ movieData.run_time }}</button>
              
              <p>主演 : {{ movieData.actor }}</p>
              <p>類型 : {{ movieData.genre }}</p>
              <p>上映日期 : {{ movieData.play_date }}</p>

              <p>時間:
                <ul>
                  <li><button type="button" class="btn btn-outline-info">11:10</button></li>
                  <li><button type="button" class="btn btn-outline-info">15:20</button></li>
                  <li><button type="button" class="btn btn-outline-info">21:20</button></li>
                </ul>
              </p>          
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    <!-- Modal End -->

    <!-- 阿正 UIkit 滑塊 End-->


    <div class="card-deck">
      
      
      
     <!-- 雪怪開始  -->
      <div class="card">
       <a href="#" data-toggle="modal" data-target="#myModal_1"> <img src="..\..\assets\home_s_2.jpeg" class="card-img-top imgSmall" alt="..." /></a>
        <div class="card-body">
          <h5 class="card-title">壞壞萌雪怪</h5>
          <p class="card-text">

          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <div class="btn-group" role="group" aria-label="Basic example"></div>
            <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#myModal_1">預告</button>
          </small>
        </div>
      </div>
      <!-- 雪怪結束 -->

      <div class="modal fade" id="myModal_1" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">壞壞萌雪怪</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <img
                  src="..\..\assets\home_s_2.jpeg"
                  class="card-img"
                  alt="..."
                  style="float:left;width:180px;height:270px;"
                />
             
                
                <div class="text">
                當少女小宜（漫威影集【神盾局特工】汪可盈 配音）在她居住的公寓大樓屋頂遇到一個雪怪，她就和她淘氣調皮的死黨阿靖（登舍諾吉特雷納 配音）和潘潘（蔡丞恩 配音），替他取名為“埃佛勒斯”，然後踏上一場驚險刺激、史詩般的冒險旅程，試圖把這個魔法雪怪帶到地球的最高峰，再度與他的家人團聚。
                但是這三個超級好朋友必須搶在企圖捕捉一個雪怪的有錢人伯尼西（艾迪以札德 配音），以及動物學家薩拉博士（莎拉寶森 配音）之前，幫助魔法雪怪埃佛勒斯安全回家。
                </div>
                
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/XBu2AWepWIo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <button type="button" class="btn btn-outline-success" disabled style="margin:0.5%;">保護級</button>
                <button type="button" class="btn btn-outline-success" disabled style="margin:0.5%;">2小時3分</button>
                
                <p>主要演員：莎拉保羅森</p>
                <p>影片類型：動畫、冒險</p>
                <p>上映日期：2019/09/20</p>

                <p>時間:<ul>
                          <li><button type="button" class="btn btn-outline-info">11:10</button></li>
                          <li><button type="button" class="btn btn-outline-info">15:20</button></li>
                          <li><button type="button" class="btn btn-outline-info">21:20</button></li>
                        </ul>
                </p>          
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


      <!-- 黑魔女開始 -->
      <div class="card">
        <a href="#" data-toggle="modal" data-target="#myModal_2"><img src="..\..\assets\home_s_1.jpeg"  class="card-img-top imgSmall" alt="..." /></a>
        <div class="card-body">
          <h5 class="card-title">黑魔女2</h5>
          <p class="card-text"></p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#myModal_2">預告</button>
            
          </small>
        </div>
      </div>
      <!-- 黑魔女結束 -->
      <div class="modal fade" id="myModal_2" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">黑魔女2</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <img
                  src="..\..\assets\home_s_1.jpeg"
                  class="card-img"
                  alt="..."
                  style="float:left;width:180px;height:270px;"
                />
                
                
                <div class="text">
                  對人類還是存有戒心的梅菲瑟，一心想保護奧蘿拉公主，卻適得其反，不但與公主的關係岌岌可危，
                  還可能引發一場牽連無辜的大戰… 迪士尼最知名的反派黑魔女回來了！除了安潔莉娜裘莉再度回歸飾演黑魔女梅菲瑟，艾兒芬妮演出睡美人公主奧蘿拉，續集還加入蜜雪兒菲佛飾演的英格麗皇后。對人類還是存有戒心的梅菲瑟，一心想保護奧蘿拉公主，卻適得其反，
                  不但與公主的關係岌岌可危，還可能引發一場牽連無辜的大戰…
                </div>
                
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/ia_Cl-3rcBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <button type="button" class="btn btn-outline-success" disabled style="margin:0.5%;">保護級</button>
                <button type="button" class="btn btn-outline-success" disabled style="margin:0.5%;">2小時3分</button>
                
                <p>主要演員：安潔莉娜裘莉,艾兒芬妮</p>
                <p>影片類型：奇幻/科幻、冒險、劇情</p>
                <p>上映日期：2019/09/20</p>

                <p>時間:<ul>
                          <li><button type="button" class="btn btn-outline-info">11:10</button></li>
                          <li><button type="button" class="btn btn-outline-info">15:20</button></li>
                          <li><button type="button" class="btn btn-outline-info">21:20</button></li>
                        </ul>
                </p>          
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
     <!--Modal--> 



      <!-- 小丑開始 -->
      <div class="card">

        <a href="#" data-toggle="modal" data-target="#myModal_3"><img src="..\..\assets\home_s_3.jpeg" class="card-img-top imgSmall" alt="..." /></a>
        <div class="card-body">
          <h5 class="card-title">小丑</h5>
          <p class="card-text"></p>
        </div>
        <div class="card-footer">

          <!-- <small class="text-muted">
            <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#myModal_3">預告</button>
            
          </small> -->

          <small class="text-muted">
            <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#myModal_3">預告</button>
            
          </small>

        </div>
      </div>
      <!-- 小丑結束 -->
      <!--Modal-->
        <div class="modal fade" id="myModal_3" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">小丑</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <img
                  src="..\..\assets\home_s_3.jpeg"
                  class="card-img"
                  alt="..."
                  style="float:left;width:180px;height:270px;"
                />
                
                
                <div class="text">
                導演陶德菲利浦表示：「《小丑》是一部前所未見的獨立電影，有不一樣的原創故事，雖然故事背景一樣發生在高譚市，但是與大家過去所熟知的「小丑」不太一樣。」陶德菲利普斯與瓦昆菲尼克斯兩人聯手，深刻地探索了社會邊緣人亞瑟佛萊克的性格，
                瓦昆說：「這不只是一場寫實的角色研究，也將會是一部深入人性的警世預言。」
                </div>
                
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/CLijSGUjYQU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <button type="button" class="btn btn-outline-success" disabled style="margin:0.5%;">保護級</button>
                <button type="button" class="btn btn-outline-success" disabled style="margin:0.5%;">2小時3分</button>
                
                <p>主要演員：瓦昆菲尼克斯,勞勃狄尼洛</p>
                <p>影片類型：科幻</p>
                <p>上映日期：2019/09/20</p>

                <p>時間:<ul>
                          <li><button type="button" class="btn btn-outline-info">11:10</button></li>
                          <li><button type="button" class="btn btn-outline-info">15:20</button></li>
                          <li><button type="button" class="btn btn-outline-info">21:20</button></li>
                        </ul>
                </p>          
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
     <!--Modal--> 











    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import MovieCard from '@/components/MovieCard.vue';

export default {
  // name: "home",
  components: {
    // MovieCard
  },
  data() {
    return {
      //  imgAr: Array(4),
      releasedMovies: {},
      movieData: {
        name: ''
      },
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      const _this = this;
      this.axios.get(`${this.$api}/movies/showMovies/released/1`).then((response) => {
        console.log(response.data);
        _this.releasedMovies = response.data;
      });
    },
    setMovieModal(movie) {
      this.movieData.poster = movie.poster;
      this.movieData.actor = movie.actor;
      this.movieData.info = movie.info;
      this.movieData.genre = movie.genre;
      this.movieData.play_date = movie.play_date;
      this.movieData.rating = movie.rating;
      this.movieData.run_time = movie.run_time;
      this.movieData.trailer = movie.trailer;
      this.movieData.name = movie.name;
    }
  },
};
</script>

<style lang="scss" scoped>
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
.text{
  display:block;
  /* border:1px solid red; */
  margin: 30px;
  line-height: 70 px;
  padding-left: 200px;
}
iframe{
  margin-top: 20px;
}
ul{
  list-style-type: none;
}
li{
  display: block;
  float:left;
  margin:10px;
}
.uk-position-center-left {
  background-color: #888;
}
</style>
