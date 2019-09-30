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
              <select
                name="theater"
                id="theater"
                disabled
                class="form-control col-md-10 text-center"
              >
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
                class="form-control col-md-10 text-center"
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
                class="form-control col-md-10 text-center"
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
              <select name="times" id="times" class="form-control col-md-10 text-center">
                <option
                  v-bind:value="index"
                  v-bind:selected="index==time_index"
                  v-for="(time,index) in times"
                  :key="index"
                >{{time.time}}</option>
              </select>
            </div>

            <div>
              <hr />

              <h3>票張數量</h3>
              <div class="row" v-for="(ticket,index) in tickets" :key="index">
                <label class="col-md-2 text-center p-1">{{ticket.name}}</label>
                <span class="col-md-2 offset-md-1">{{ticket.price}}</span>
                <div class="col-md-1 offset-md-3">
                  <span class="pull-right">
                    <i
                      class="fa fa-minus-square-o fa-2x p-1"
                      v-on:click="ticketsTotal>0&&ticketsNum[index]>0?ticketsNum[index]--:ticketsNum[index]=0"
                      style="cursor:pointer;"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  pattern="[0-5]"
                  class="form-control col-md-2 text-right"
                  readonly
                  v-model="ticketsNum[index]"
                />
                <div class="col-md-1">
                  <span>
                    <i
                      class="fa fa-plus-square-o fa-2x p-1"
                      v-on:click="ticketsTotal<5?ticketsNum[index]++:ticketsNum[index]=0"
                      style="cursor:pointer;"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="tab-pane fade" id="foodDrinks">
          <div class="row" v-for="(item,index) in foodDrinks" :key="index">
            <label class="col-md-2 text-center p-1">{{index}}</label>
            <div class="col-md-1 offset-md-6">
              <span class="pull-right">
                <i
                  class="fa fa-minus-square-o fa-2x p-1"
                  v-on:click="minus(index)"
                  style="cursor:pointer;"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <input
              type="text"
              pattern="[0-5]"

              class="form-control col-md-2 text-right"
              readonly
              v-model="foodDrink[index]"
            />
            <div class="col-md-1">
              <span>
                <i
                  class="fa fa-plus-square-o fa-2x p-1"
                  v-on:click="add(index)"
                  style="cursor:pointer;"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="others">thinking...
        </div>

        <div>
          <button
            v-on:click="setProp"
            class="btn btn-success btn-md btn-block"
            v-show="showNext"
          >點我去哪裡</button>
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
      movies: [
        { movie_id: "0", movieName: "返校" },
        { movie_id: "1", movieName: "天氣之子" }
      ],
      days: [
        { day: "2019/10/1 (二)" },
        { day: "2019/10/2 (三)" },
        { day: "2019/10/3 (四)" }
      ],
      times: [
        { time: "10:00" },
        { time: "13:00" },
        { time: "15:00" },
        { time: "19:00" }
      ],
      tickets: [],
      ticketsNum:{},
      showNext: false,
      foodDrinks: { 爆米花: 0, 可樂: 0 },
      checkDays: "",
      movie_index: "0",
      day_index: "0",
      time_index: "0",
      foodDrink: { 爆米花: 0, 可樂: 0 }
    };
  },
  mounted() {
    this.loadMovies();
    this.loadTickets();

    if (sessionStorage.movie_index)
      this.movie_index = sessionStorage.movie_index;
    if (sessionStorage.day_index) this.day_index = sessionStorage.day_index;
    if (sessionStorage.time_index) this.time_index = sessionStorage.time_index;

    if (sessionStorage.ticketNum)
      this.ticketNum = Number(sessionStorage.ticketNum);

    if (sessionStorage.getItem("foodDrink"))
      this.foodDrink = JSON.parse(sessionStorage.getItem("foodDrink"));
  },
  methods: {
    loadMovies() {
      this.axios
        .get(`${this.$url}/getData.php`, {
          params: {
            fields: "getMovies"
          }
        })
        .then(response => {
          this.movies = response.data;
          this.loadMovieDay();
        });
    },

    loadMovieDay() {
      this.axios
        .get(`${this.$url}/getData.php`, {
          params: {
            fields: "getMovieDay",
            encoded_id: this.movies[
              sessionStorage.movie_index
                ? sessionStorage.movie_index
                : document.getElementById("movies").value
            ]["encoded_id"]
          }
        })
        .then(response => {
          // console.log(response.data);
          this.days = response.data;
          this.loadMovieTime();
        });
    },
    loadMovieTime() {
      this.axios
        .get(`${this.$url}/getData.php`, {
          params: {
            fields: "getMovieTime",
            encoded_id: this.movies[document.getElementById("movies").value][
              "encoded_id"
            ]
          }
        })
        .then(response => {
          this.times = response.data;
        });
    },
    loadTickets() {
      this.axios
        .get(`${this.$url}/getData.php`, {
          params: {
            fields: "getTickets"
          }
        })
        .then(response => {
          this.tickets = response.data;
          for(var i =0;i<this.tickets.length;i++)
          this.$set(this.ticketsNum,i,i);
        });
    },
    add(index) {
      if (this.foodDrink[index] < 5) this.foodDrink[index] += 1;
      else this.foodDrink[index] = 5;
      console.log(this.ticketsTotal);
    },
    minus(index) {
      if (this.foodDrink[index] > 0) this.foodDrink[index] -= 1;
      else this.foodDrink[index] = 0;
    },
    addTicket(index){
      this.tickets[index]["num"]++;
      console.log(this.tickets);
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
      sessionStorage.setItem("ticketNum", this.ticketNum);
      sessionStorage.setItem("foodDrink", JSON.stringify(this.foodDrink));
      this.$router.push("/");
    }
  },
  computed: {
    ticketsTotal: function() {
      let total = 0;
      for(var i=0;i<Object.keys(this.ticketsNum).length;i++)
      total += this.ticketsNum[i];
      return total;
    }
  },
  
  
}
</script>
