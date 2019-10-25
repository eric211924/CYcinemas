<template>
  <div class="container">
    <h1 class="text-center my-5">本周上映</h1>
    <div class="row">
      <!-- <MovieCard :img-ar="imgAr"></MovieCard> -->
      <div
        class="card mb-3 col-12 col-6"
        style="max-width: 540px;"
        v-for="(item, index) in releasedMovies"
        :key="index"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <a
              href="#"
              data-toggle="modal"
              data-target="#myModal"
              @click.prevent="setMovieModal(item)"
            >
              <img :src="item.poster" class="card-img" alt="..." />
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <a
                href="#"
                data-toggle="modal"
                data-target="#myModal"
                @click.prevent="setMovieModal(item)"
              >
                <h5 class="card-title" style="font-size:25px;">{{item.name}}</h5>
              </a>
              <p class="card-text text-truncate" style="display:block;">{{item.info}}</p>
              <p class="card-text"></p>
              <form>
                <select
                  class="custom-select custom-select-lg mb-3"
                  @click.prevent="getMovieDay(item.encoded_id)"
                >
                  <option selected>時間</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="3">Three</option>
                  <option value="3">Three</option>
                </select>
                <select
                  class="custom-select custom-select-lg mb-3"
                  @click.prevent="getMovieTime(item.encoded_id)"
                >
                  <option selected>場次</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="3">Three</option>
                  <option value="3">Three</option>
                  <option value="3">Three</option>
                  <option value="3">Three</option>
                </select>
                <button type="submit" class="btn btn-primary" style="margin-left:70%;">訂票</button>
                <!-- <small class="text-muted">Last updated 3 mins ago</small> -->
              </form>
            </div>
          </div>
        </div>
      </div>​
    <!--modal開始-->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{{movieData.name}}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <iframe
                width="100%"
                height="315"
                :src="movieData.trailer"
                style="margin-bottom:20px;"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <img
                :src="movieData.poster"
                class="card-img"
                alt="..."
                style="float:left;width:180px;height:270px;"
              />
              <div class="text" style="display:block;">{{movieData.info}}</div>

              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{movieData.rating}}</button>
              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{movieData.run_time}}</button>

              <p>主要演員：{{movieData.actor}}</p>
              <p>影片類型：{{movieData.genre}}</p>
              <p>上映日期：{{movieData.play_date}}</p>

              <!-- <p>
                時間:
                <button type="button" class="btn btn-outline-info" style="margin:0.5%;">11:10</button>
                <button type="button" class="btn btn-outline-info" style="margin:0.5%;">15:20</button>
                <button type="button" class="btn btn-outline-info" style="margin:0.5%;">21:20</button>
              </p>-->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!--modal結束-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\AngelHasFallen_180x270_Poster__now_6.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">全面攻佔3</h5>
              <p
                class="card-text"
              >這次恐怖分子頭號目標，竟是最強特務-麥克班寧！《全面攻佔3：天使救援》故事時間設定在倫敦淪陷的兩年後，當年的副總統-艾倫已經變成美國總統，麥克班寧晉升為特勤局局長。恐怖份子這次盯上麥克，陷害他成為謀殺總統的通緝犯，被全球通緝！</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\Detention_180x270_Poster_now_2.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">返校</h5>
              <p class="card-text">1962年寂寥而肅殺的時代，翠華中學高三生方芮欣，意外與輔導老師張明暉相戀，在問題叢生的家庭及學校中，他成為她唯一的出路。</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\Fagara_180x270_Poster_now_4.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">花椒之味</h5>
              <p
                class="card-text"
              >在旅行社工作的夏如樹得知父親突如其來的死訊的同時，發現原來自己在台北、重慶兩地各有一個同父異母的妹妹夏如枝及夏如果。來自三個不同地域、性格迴異的三姐妹，在父親的葬禮上首次碰面，明明陌生却有著血緣的牽絆。</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\TheBiggestLittleFarm_180x270_Poster_now_5.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">我家有個開心農場</h5>
              <p
                class="card-text"
              >親手打造一座沒有極限的農場！只為了堅持對愛狗的承諾，約翰與茉莉這對瘋狂夫妻索性來去鄉下開農場！本片歷時十年追蹤，跟著這兩位瘋狂的夢想家和他們的愛狗塔德。</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\WEATHERINGWITHYOU_180x270_Poster_now_1.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">天氣之子</h5>
              <p
                class="card-text"
              >高一那年夏天，帆高離開位在離島的家鄉，獨自來到東京，拮据的生活迫使他不得不找份工作，最後來到一間專門出版奇怪超自然刊物的出版社擔任寫手。</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
    </div>
    <h1 class="text-center my-5">即將上映</h1>
    <div class="row">
      <div
        class="card mb-3 col-12 col-6"
        style="max-width: 540px;"
        v-for="(page, index) in comingSoonPages"
        :key="index"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <a
              href="#"
              data-toggle="modal"
              data-target="#myModal_1"
              @click.prevent="setPageModal(page)"
            >
              <img :src="page.poster" class="card-img" alt="..." />
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <a
                href="#"
                data-toggle="modal"
                data-target="#myModal_1"
                @click.prevent="setPageModal(page)"
              >
                <h5 class="card-title" style="font-size:30px">{{page.name}}</h5>
              </a>
              <p class="card-text text-truncate" style="display:block;">{{page.info}}</p>
              <p class="card-text">
                <!-- <small class="text-muted">Last updated 3 mins ago</small> -->
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--modal開始-->
      <div class="modal fade" id="myModal_1" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{{pageData.name}}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <iframe
                width="100%"
                height="315"
                :src="pageData.trailer"
                style="margin-bottom:20px;"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <img
                :src="pageData.poster"
                class="card-img"
                alt="..."
                style="float:left;width:180px;height:270px;"
              />
              <div class="text" style="display:block;">{{pageData.info}}</div>

              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{pageData.rating}}</button>
              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{pageData.run_time}}</button>

              <p>主要演員：{{pageData.actor}}</p>
              <p>影片類型：{{pageData.genre}}</p>
              <p>上映日期：{{pageData.play_date}}</p>

              <!-- <p>
                時間:
                <button type="button" class="btn btn-outline-info" style="margin:0.5%;">11:10</button>
                <button type="button" class="btn btn-outline-info" style="margin:0.5%;">15:20</button>
                <button type="button" class="btn btn-outline-info" style="margin:0.5%;">21:20</button>
              </p>-->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!--modal結束-->

      <!-- <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{{movieData.name}}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <iframe
                width="100%"
                height="315"
                :src="movieData.trailer"
                style="margin-bottom:20px;"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <img
                :src="movieData.poster"
                class="card-img"
                alt="..."
                style="float:left;width:180px;height:270px;"
              />
              <div class="text" style="display:block;">{{movieData.info}}</div>

              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{movieData.rating}}</button>
              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{movieData.run_time}}</button>

              <p>主要演員：{{movieData.actor}}</p>
              <p>影片類型：{{movieData.genre}}</p>
              <p>上映日期：{{movieData.play_date}}</p>

              <p>
                時間:
                <button type="button" class="btn btn-outline-info" style="margin:0.5%;">11:10</button>
                <button type="button" class="btn btn-outline-info" style="margin:0.5%;">15:20</button>
                <button type="button" class="btn btn-outline-info" style="margin:0.5%;">21:20</button>
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>-->
      <!--modal結束-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\FROZEN2_180x270_Poster_soon_2.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">冰雪奇緣2</h5>
              <p
                class="card-text"
              >《冰雪奇緣2》故事描述艾倫戴爾王國在女王艾莎帶領之下欣欣向榮，之前相敬如”冰”的姊妹也化解了心結，正當一切美好之際，艾莎卻聽到來自遠方的呼喚。</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\LOVEANDRUN_180x270_Poster_soon_4.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">只有我能喜歡你</h5>
              <p
                class="card-text"
              >★《模犯生》「阿班」查農桑提納同庫甩偶像包袱，變身幼稚中二小屁孩！霸氣十足的阿杜，從小就視小他一歲的漂亮小姑姑小琳為心目中的女神，因此在學校中只要誰敢靠近她，他便會想盡各種辦法搞破壞！</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\MOTHERLESSBROOKLYN_180x270_Poster_soon_5.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">布魯克林孤兒</h5>
              <p
                class="card-text"
              >在《布魯克林孤兒》中，艾德華諾頓飾演主角：萊諾艾斯洛，一個沒沒無聞又患有妥瑞症的私家偵探，提攜他的恩人與唯一的朋友法蘭克敏納遭人刺殺，憑藉著極有限的線索、超乎常人的執著、毅力，他一步一步地揭開隱藏在陰影下被層層保護的機密，</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\RAMBOV_180x270_Poster_soon_3.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">最後一滴血</h5>
              <p
                class="card-text"
              >遠離血腥戰場的英雄藍波，深陷創傷症候群的困擾，獨居在偏僻的農場中，過著人生中最黑暗的時刻。但當藍波得知朋友女兒遭到墨西哥毒販的綁架，他立刻展開調查與救援。 這次他將再次運用精湛的機關與戰鬥技巧，完成最後一次營救任務！</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\StarWarsTheRiseofSkywalker_180x270_Poster_soon_1.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">STAR WARS 天行者的崛起</h5>
              <p
                class="card-text"
              >上集中拯救了反抗軍的「天行者路克」這次將以絕地英靈之姿回歸。原力覺醒的「芮」終於以『絕地』的身分跟反抗軍老夥伴們重逢。另一方面，由「凱羅忍」帶領的第一軍團所造成的威脅似乎不曾變少</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>


      

<script>
export default {
  components: {},
  data() {
    return {
      releasedMovies: {},
      movieData: {
        name: ""
      },
      item: {},
      poster: "",
      trailer: "",
      comingSoonPages: {},
      pageData: {
        name: ""
      }
    };
  },
  mounted() {
    this.getMovies();
    this.getPages();
    this.getMovieDay("752516ec-7577-4238-b5b5-0fd682890932");
    this.getMovieTime("752516ec-7577-4238-b5b5-0fd682890932");
  },
  methods: {
    getMovies() {
      const _this = this;
      this.axios
        .get(`${this.$api}/movies/showMovies/released/1`)
        .then(response => {
          // response.data[0].abc = "123";
          // for (let i = 0; i <= response.data.length; i++) {
          //   response.data[i].abc = 123;
          //   console.log("for迴圈:"+response.data[i].abc);
          // }

          console.log(response.data[0]);
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
    },
    getPages() {
      const _this = this;
      this.axios
        .get(`${this.$api}/movies/showMovies/comingSoon/1`)
        .then(response => {
          // console.log(response.data);
          _this.comingSoonPages = response.data;
        });
    },
    setPageModal(page) {
      this.pageData.poster = page.poster;
      this.pageData.actor = page.actor;
      this.pageData.info = page.info;
      this.pageData.genre = page.genre;
      this.pageData.play_date = page.play_date;
      this.pageData.rating = page.rating;
      this.pageData.run_time = page.run_time;
      this.pageData.trailer = page.trailer;
      this.pageData.name = page.name;
    },
    getMovieDay(id) {
      const _this = this;
      this.axios.get(`${this.$api}/order/getMovieDay/${id}`).then(response => {
        console.log("getMovieDay");
        console.log(response.data);
        _this.movieDays = response.data;
      });
    },
    getMovieTime(id) {
      const _this = this;
      this.axios.get(`${this.$api}/order/getMovieTime/${id}`).then(response => {
        console.log("getMovieTime");
        console.log(response.data);
        _this.movieTimes = response.data;
      });
    }
  }
};
</script>











<style scoped>
.card-img {
  /* width:auto;
  height: auto; */
  /* width: 100%;
  height: 100%; */
  margin-right: 10px;
}
.card {
  margin-right: 10px;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 10px;
}
</style>
