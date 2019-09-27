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
              <label for="theater" class="col-md-2 text-center p-1">選擇戲院</label>
              <select
                name="theater"
                id="theater"
                disabled
                class="form-control col-md-10 text-center"
              >
                <option value="0">阿正大戲院</option>
              </select>
              <input type="hidden" name="theater" value="0" />
            </div>

            <div class="form-group row">
              <label for="movies" class="col-md-2 text-center p-1">選擇電影</label>
              <select name="movies" id="movies" class="form-control col-md-10 text-center">
                <option
                  id="index"
                  v-bind:selected="checkMovieId==movies.movie_id"
                  v-bind:value="movies.movie_id"
                  v-for="(movies,index) in movies"
                  :key="index"
                >{{movies.movieName}}</option>
              </select>
            </div>

            <div class="form-group row">
              <label for="days" class="col-md-2 text-center p-1">選擇日期</label>
              <select name="days" id="days" class="form-control col-md-10 text-center">
                <option
                  v-bind:value="index"
                  v-bind:selected="checkDays==index"
                  v-for="(days,index) in days"
                  :key="index"
                >{{days.day}}</option>
              </select>
            </div>

            <div class="form-group row">
              <label for="screenings" class="col-md-2 text-center p-1">選擇場次</label>
              <select name="screenings" id="screenings" class="form-control col-md-10 text-center">
                <option
                  v-bind:value="index"
                  v-bind:selected="checkScreenings==index"
                  v-for="(screenings,index) in screenings"
                  :key="index"
                >{{screenings.screening}}</option>
              </select>
            </div>

            <div>
              <hr />

              <h3>票張數量</h3>
              <div class="form-group row">
                <label for="tickets" class="col-md-2 text-center p-1">全票</label>
                <div class="col-md-1 offset-md-6">
                  <span class="pull-right">
                    <i
                      class="fa fa-minus-square-o fa-2x p-1"
                      v-on:click="ticketNum>0?ticketNum-=1:ticketNum=0"
                      style="cursor:pointer;"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>

                <input
                  type="text"
                  pattern="[0-5]"
                  name
                  id
                  class="form-control col-md-2 text-right"
                  readonly
                  v-model="ticketNum"
                />
                <div class="col-md-1">
                  <span>
                    <i
                      class="fa fa-plus-square-o fa-2x p-1"
                      v-on:click="ticketNum<5?ticketNum+=1:ticketNum=5"
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
            <label for="tickets" class="col-md-2 text-center p-1">{{index}}</label>
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
              name
              id
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

        <div class="tab-pane fade" id="others">Thinking...</div>

        <div>
          <router-link
            to="/"
            tag="button"
            class="btn btn-success btn-md btn-block"
            v-on:click.native="setProp"
            v-show="showNext"
          >選好了準備去挑位子</router-link>
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
      screenings: [
        { screening: "10:00" },
        { screening: "13:00" },
        { screening: "15:00" },
        { screening: "19:00" }
      ],
      ticketNum: 0,
      showNext: false,
      foodDrinks: { 爆米花: 0, 可樂: 0 },
      checkMovieId: "",
      checkDays: "",
      checkScreenings: "",
      movie_id: "default",
      day: "",
      screening: "",
      foodDrink: { 爆米花: 0, 可樂: 0 }
    };
  },
  mounted() {
    // 這裡讀PHP

    if (!sessionStorage.getItem("movie_id"))
      sessionStorage.setItem("movie_id", "");
    else this.checkMovieId = sessionStorage.getItem("movie_id");
    if (!sessionStorage.getItem("days")) sessionStorage.setItem("days", "");
    else this.checkDays = sessionStorage.getItem("days");
    if (!sessionStorage.getItem("screenings"))
      sessionStorage.setItem("screenings", "");
    else this.checkScreenings = sessionStorage.getItem("screenings");

    if (sessionStorage.getItem("ticketNum"))
      this.ticketNum = sessionStorage.getItem("ticketNum");

    if (sessionStorage.getItem("foodDrink"))
      this.foodDrink = JSON.parse(sessionStorage.getItem("foodDrink"));
  },
  methods: {
    add(index) {
      if (this.foodDrink[index] < 5) this.foodDrink[index] += 1;
      else this.foodDrink[index] = 5;
    },
    minus(index) {
      if (this.foodDrink[index] > 0) this.foodDrink[index] -= 1;
      else this.foodDrink[index] = 0;
    },
    setProp() {
      sessionStorage.setItem("movie_id", this.movie_id);
      sessionStorage.setItem("days", this.day);
      sessionStorage.setItem("screenings", this.screening);
      sessionStorage.setItem("ticketNum", this.ticketNum);
      sessionStorage.setItem("foodDrink", JSON.stringify(this.foodDrink));
    }
  },
  watch: {
    ticketNum: function() {
      if (this.ticketNum > 0) this.showNext = true;
      else this.showNext = false;
      if (this.ticketNum < 0) this.ticketNum = 0;
      else if (this.ticketNum > 5) this.ticketNum = 5;

      this.movie_id = document.getElementById("movies").value;
      this.day = document.getElementById("days").value;
      this.screening = document.getElementById("screenings").value;
    }
  }
};
</script>