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
              <p class="card-text">
                <select class="custom-select custom-select-lg mb-3" v-model="selected">
                  <option value="">時間</option>
                  <option
                    :value="dayIndex"
                    v-for="(dayItem, dayIndex) in item.day"
                    :key="dayIndex"
                  >{{dayItem.date}}, {{dayItem.weekday}}</option>
                </select>
                <select class="custom-select custom-select-lg mb-3" >
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
              </p>
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
      },
      selected: ''
    };
  },
  mounted() {
    this.setMovies();
    this.getPages();
    // this.getMovieDay("752516ec-7577-4238-b5b5-0fd682890932");
    // this.getMovieTime("752516ec-7577-4238-b5b5-0fd682890932");
  },
  methods: {
    async setMovies() {
      let movies = await this.getMovies();
      this.releasedMovies = movies.data;
      for (let i = 0; i <= this.releasedMovies.length; i++) {
        try {
          let day = await this.getMovieDay(this.releasedMovies[i].encoded_id);
          this.releasedMovies[i].day = day;
          let time = await this.getMovieTime(this.releasedMovies[i].encoded_id);
          this.releasedMovies[i].time = time;
        } catch (err) {
          // console.log(err);
        }
      }
    },
    getMovies() {
      const _this = this;
      return new Promise((resolve, reject) => {
        this.axios
          .get(`${this.$api}/movies/showMovies/released/1`)
          .then(response => {
            console.log(response.data);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
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
      return new Promise((resolve, reject) => {
        this.axios
          .get(`${this.$api}/order/getMovieDay/${id}`)
          .then(response => {
            // console.log("getMovieDay");
            console.log(response.data);
            resolve(response.data);
          });
      }).catch(error => {
        reject(error);
      });
    },
    getMovieTime(id) {
      const _this = this;
      return new Promise((resolve, reject) => {
        this.axios
          .get(`${this.$api}/order/getMovieTime/${id}`)
          .then(response => {
            // console.log("getMovieTime");
            // console.log(response.data);
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
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
