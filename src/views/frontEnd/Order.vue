<template>
  <div class="container">
    <h1 class="text-center my-5">訂票</h1>

    <div class="container" id="order">
      <ul class="nav nav-tabs nav-justified">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#ticketTime">票種/時刻選擇</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#foodDrinks">飲食選擇</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#others">otherOption</a>
        </li>
      </ul>

      <div class="tab-content py-3">
        <div class="tab-pane fade active show" id="ticketTime">
          <form action method="GET">
            <div class="form-group row">
              <label for="theater" class="col-md-2 text-center">
                <i class="fa fa-video-camera" style="font-size:1.5em" aria-hidden="true"></i>&emsp;選擇戲院
              </label>
              <select name="theater" id="theater" disabled class="form-control col-md-10">
                <option value="0">中佑大戲院</option>
              </select>
              <input type="hidden" name="theater" value="0" />
            </div>

            <div class="form-group row">
              <label for="movies" class="col-md-2 text-center p-1">
                <i class="fa fa-film" style="font-size:1.5em" aria-hidden="true"></i>&emsp;選擇電影
              </label>
              <select
                name="movies"
                id="movies"
                v-on:change="loadMovieDay"
                class="form-control col-md-10"
              >
                <option
                  id="index"
                  v-bind:selected="index==movie_index"
                  v-bind:value="index"
                  v-for="(movies,index) in movies"
                  :key="index"
                >{{movies.name}}</option>
              </select>
            </div>

            <div class="form-group row">
              <label for="days" class="col-md-2 text-center p-1">
                <i class="fa fa-clock-o" style="font-size:1.5em" aria-hidden="true"></i>&emsp;選擇日期
              </label>
              <select
                name="days"
                id="days"
                v-on:change="loadMovieTime"
                class="form-control col-md-10"
              >
                <option
                  v-bind:value="index"
                  v-bind:selected="index==day_index"
                  v-for="(day,index) in days"
                  :key="index"
                >{{day.date}} ({{day.weekday}})</option>
              </select>
            </div>

            <div class="form-group row">
              <label for="times" class="col-md-2 text-center p-1">
                <i class="fa fa-location-arrow" style="font-size:1.5em" aria-hidden="true"></i>&emsp;選擇場次
              </label>
              <select name="times" id="times" class="form-control col-md-10">
                <option
                  v-bind:value="index"
                  v-bind:selected="index==time_index"
                  v-for="(time,index) in times"
                  :key="index"
                >{{time.time}}</option>
              </select>
            </div>

            <hr />
            <div>
              <div class="row">
                <div class="col-md-3" v-for="(ticket,index) in tickets" :key="index">
                  <div class="card border-secondary my-2">
                    <div class="card-body text-secondary">
                      <h5 class="card-title">票種：{{ticket.name}}</h5>
                      <h5>單價：{{ticket.price}}</h5>
                      <h5>總計：{{ticket.price *ticketsNum[index]}}</h5>
                      <div class="d-flex">
                        <i
                          class="fa fa-minus-square-o fa-2x p-1"
                          v-on:click="minusTickets(index)"
                          style="cursor:pointer;"
                          aria-hidden="true"
                        ></i>
                        <input
                          type="text"
                          pattern="[0-5]"
                          class="form-control text-center"
                          readonly
                          v-model="ticketsNum[index]"
                        />
                        <i
                          class="fa fa-plus-square-o fa-2x p-1"
                          v-on:click="plusTickets(index)"
                          style="cursor:pointer;"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="tab-pane fade" id="foodDrinks">
          <div class="row">
            <div class="col-md-3" v-for="(foodDrink,index) in foodDrinks" :key="index">
              <div class="card border-secondary my-2">
                <div class="card-body text-secondary">
                  <h5 class="card-title">餐點名稱(尺寸)：</h5>
                  <h5>{{foodDrink.name}}({{foodDrink.size}})</h5>
                  <h5>單價：{{foodDrink.price}}</h5>
                  <h5>總計：{{foodDrink.price *foodDrinksNum[index]}}</h5>
                  <div class="input-group">
                    <i
                      class="fa fa-minus-square-o fa-2x p-1"
                      v-on:click="minusFoodDrinks(index)"
                      style="cursor:pointer;"
                      aria-hidden="true"
                    ></i>
                    <input
                      type="text"
                      pattern="[0-5]"
                      class="form-control text-center"
                      readonly
                      v-model="foodDrinksNum[index]"
                    />
                    <i
                      class="fa fa-plus-square-o fa-2x p-1"
                      v-on:click="plusFoodDrinks(index)"
                      style="cursor:pointer;"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="others">thinking...</div>

        <div>
          <button
            v-on:click="setProp"
            class="btn btn-success btn-lg btn-block"
            v-bind:class="{'v-hidden':!showNext}"
          >去選座位</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "order",
  data() {
    return {
      movies: [{
        movie_id: "0",
        movieName: "返校"
      },
      {
        movie_id: "1",
        movieName: "天氣之子"
      }
      ],
      days: [{
        day: "2019/10/1 (二)"
      },
      {
        day: "2019/10/2 (三)"
      },
      {
        day: "2019/10/3 (四)"
      }
      ],
      times: [{
        time: "10:00"
      },
      {
        time: "13:00"
      },
      {
        time: "15:00"
      },
      {
        time: "19:00"
      }
      ],
      tickets: [],
      ticketsNum: {},
      foodDrinks: {
        爆米花: 0,
        可樂: 0
      },
      foodDrinksNum: {},
      showNext: false,
      movie_index: "0",
      day_index: "0",
      time_index: "0",
      tickets_index: {},
      foodDrinks_index: {}
    };
  },
  mounted() {
    this.loadMovies();
    this.loadTickets();
    this.loadFoodDrinks();
    if (sessionStorage.movie_index)
      this.movie_index = sessionStorage.movie_index;
    if (sessionStorage.day_index) this.day_index = sessionStorage.day_index;
    if (sessionStorage.time_index) this.time_index = sessionStorage.time_index;
    if (sessionStorage.ticketsNum)
      this.tickets_index = JSON.parse(sessionStorage.ticketsNum);
    if (sessionStorage.foodDrinksNum)
      this.foodDrinks_index = JSON.parse(sessionStorage.foodDrinksNum);
  },
  methods: {
    loadMovies() {
      this.axios
        .get(`${this.$url}/getMovies`)
        .then(response => {
          // console.log(response.data);
          this.movies = response.data;
          this.loadMovieDay();
        });
    },

    loadMovieDay() {
      this.axios
        .get(`${this.$url}/getMovieDay/${this.movies[
          sessionStorage.movie_index
            ? sessionStorage.movie_index
            : document.getElementById("movies").value
        ]["encoded_id"]}`)
        .then(response => {
          console.log(response.data);
          this.days = response.data;
          this.loadMovieTime();
        });
    },
    loadMovieTime() {
      this.axios
        .get(`${this.$url}/getMovieTime/${this.movies[document.getElementById("movies").value][
          "encoded_id"
        ]}`)
        .then(response => {
          this.times = response.data;
        });
    },
    loadTickets() {
      this.axios
        .get(`${this.$url}/getTickets`)
        .then(response => {
          this.tickets = response.data;
          for (var i = 0; i < this.tickets.length; i++)
            sessionStorage.ticketsNum ?
              this.$set(this.ticketsNum, i, this.tickets_index[i]) :
              this.$set(this.ticketsNum, i, 0);
        });
    },
    loadFoodDrinks() {
      this.axios
        .get(`${this.$url}/getFoodDrinks`)
        .then(response => {
          this.foodDrinks = response.data;
          for (var i = 0; i < this.foodDrinks.length; i++) {
            sessionStorage.foodDrinksNum ?
              this.$set(this.foodDrinksNum, i, this.foodDrinks_index[i]) :
              this.$set(this.foodDrinksNum, i, 0);
          }
        });
    },
    minusTickets(index) {
      if (this.ticketsNum[index] > 0) this.ticketsNum[index] -= 1;
      else this.ticketsNum[index] = 0;
    },
    plusTickets(index) {
      if (this.ticketsNum[index] < 5) this.ticketsNum[index] += 1;
      else this.ticketsNum[index] = 5;
    },
    minusFoodDrinks(index) {
      if (this.foodDrinksNum[index] > 0) this.foodDrinksNum[index] -= 1;
      else this.foodDrinksNum[index] = 0;
    },
    plusFoodDrinks(index) {
      if (this.foodDrinksNum[index] < 10) this.foodDrinksNum[index] += 1;
      else this.foodDrinksNum[index] = 10;
    },

    setProp() {
      sessionStorage.setItem(
        "movie_index",
        document.getElementById("movies").value
      );
      sessionStorage.setItem(
        "day_index",
        document.getElementById("days").value
      );
      sessionStorage.setItem(
        "time_index",
        document.getElementById("times").value
      );
      sessionStorage.setItem("ticketsNum", JSON.stringify(this.ticketsNum));
      sessionStorage.setItem(
        "foodDrinksNum",
        JSON.stringify(this.foodDrinksNum)
      );
      this.$router.push("/order/chooseSeat");
    }
  },
  computed: {
    ticketsTotal: function () {
      let total = 0;
      for (var i = 0; i < Object.keys(this.ticketsNum).length; i++)
        total += this.ticketsNum[i];
      return total;
    }
  },
  watch: {
    ticketsTotal: function () {
      if (this.ticketsTotal > 0) this.showNext = true;
      else if (this.ticketsTotal == 0) this.showNext = false;
    }
  }
};
</script>

<style scoped>
select {
  text-align-last: center;
}

.v-hidden {
  visibility: hidden;
}

input {
  font-size: 1.1rem;
}
</style>