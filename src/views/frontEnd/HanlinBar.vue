<template>
  <div class="row container m-auto">
    <!-- 說明區 -->
    <div class="accordion col-md-3 mt-3" id="gameIntroduce">
      <div class="card">
        <div class="card-header text-center" id="headingOne">
          <button
            class="btn btn-light text-left"
            type="button"
            data-toggle="collapse"
            data-target="#introduce"
            aria-expanded="true"
            aria-controls="introduce"
          >
            <h4 class="mb-0 font-weight-bold">中佑小瑪莉</h4>
            <h4>
              遊戲說明
              <span class="small btn-link">點我</span>
            </h4>
          </button>
        </div>

        <div
          id="introduce"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#gameIntroduce"
        >
          <div class="card-body">
            <h5>1. 押注：</h5>
            <h6>投注認為會中獎的圖案</h6>
            <h5>2. 開始轉盤：</h5>
            <h6>點擊輪盤中的開始按鈕</h6>
            <h5>3. 結果：</h5>
            <h6>若押注的圖案跟轉到的圖案相符即有對應的點數獎勵</h6>
            <h6>ps. 小賭怡情大賭傷身</h6>
          </div>
        </div>
      </div>
    </div>

    <!-- 押注區 -->
    <div class="col-md-3 badge badge-light text-left border mt-3">
      <h3>押注</h3>
      <hr />
      <div>
        <span>點數：</span>
        <input type="text" class="text-right" disabled v-model="totalPoint" />
      </div>
      <hr />
      <div class="row mt-2">
        <div class="col-md-6 col-3 text-center">
          <img src="../../assets/hanlinBar/popcorn.png" alt />
          <p class="m-1">×2/6</p>
          <input
            type="text"
            class="text-center border border-secondary"
            maxlength="3"
            v-bind:disabled="isStarted"
            v-model="betPopcorn"
          />
          <div class="row justify-content-center my-2">
            <i
              class="fa fa-minus fa-lg"
              @click="isStarted?betPopcorn=betPopcorn:betPopcorn--"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-circle-o fa-lg mx-2"
              @click="isStarted?betPopcorn=betPopcorn:betPopcorn=0"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-plus fa-lg"
              @click="isStarted?betPopcorn=betPopcorn:betPopcorn++"
              aria-hidden="true"
            ></i>
          </div>
        </div>

        <div class="col-md-6 col-3 text-center">
          <img src="../../assets/hanlinBar/drink.png" alt />
          <p class="m-1">×3</p>
          <input
            type="text"
            class="text-center border border-secondary"
            maxlength="3"
            v-bind:disabled="isStarted"
            v-model="betDrink"
          />
          <div class="row justify-content-center my-2">
            <i
              class="fa fa-minus fa-lg"
              @click="isStarted?betDrink=betDrink:betDrink--"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-circle-o fa-lg mx-2"
              @click="isStarted?betDrink=betDrink:betDrink=0"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-plus fa-lg"
              @click="isStarted?betDrink=betDrink:betDrink++"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div class="col-md-6 col-3 text-center">
          <img src="../../assets/hanlinBar/mealSet.png" alt />
          <p class="m-1">×4</p>
          <input
            type="text"
            class="text-center border border-secondary"
            maxlength="3"
            v-bind:disabled="isStarted"
            v-model="betMealSet"
          />
          <div class="row justify-content-center my-2">
            <i
              class="fa fa-minus fa-lg"
              @click="isStarted?betMealSet=betMealSet:betMealSet--"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-circle-o fa-lg mx-2"
              @click="isStarted?betMealSet=betMealSet:betMealSet=0"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-plus fa-lg"
              @click="isStarted?betMealSet=betMealSet:betMealSet++"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div class="col-md-6 col-3 text-center">
          <img src="../../assets/hanlinBar/threeBar.png" alt />
          <p class="m-1">×5/7/10</p>
          <input
            type="text"
            class="text-center border border-secondary"
            maxlength="3"
            v-bind:disabled="isStarted"
            v-model="betBar"
          />
          <div class="row justify-content-center my-2">
            <i
              class="fa fa-minus fa-lg"
              @click="isStarted?betBar=betBar:betBar--"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-circle-o fa-lg mx-2"
              @click="isStarted?betBar=betBar:betBar=0"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-plus fa-lg"
              @click="isStarted?betBar=betBar:betBar++"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 遊戲區 -->
    <div class="col-md-6">
      <table align="center" class="mt-3">
        <tr>
          <td id="img0" class="cell">
            <img src="../../assets/hanlinBar/drink.png" alt />
          </td>
          <td id="img1" class="cell">
            <img src="../../assets/hanlinBar/bar7.png" alt />
          </td>
          <td id="img2" class="cell">
            <img src="../../assets/hanlinBar/threeBar.png" alt />
          </td>
          <td id="img3" class="cell">
            <img src="../../assets/hanlinBar/bar5.png" alt />
          </td>
          <td id="img4" class="cell">
            <img src="../../assets/hanlinBar/nothing.png" alt />
          </td>
        </tr>
        <tr>
          <td id="img15" class="cell">
            <img src="../../assets/hanlinBar/nothing.png" alt />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td id="img5" class="cell">
            <img src="../../assets/hanlinBar/popcorn.png" alt />
          </td>
        </tr>
        <tr>
          <td id="img14" class="cell">
            <img src="../../assets/hanlinBar/mealSet.png" alt />
          </td>
          <!-- <td></td> -->
          <td colspan="3">
            <div class="text-center">
              <button
                v-bind:disabled="isStarted"
                class="btn btn-lg btn-warning"
                @click="rotation"
              >START</button>
            </div>
          </td>
          <!-- <td></td> -->
          <td id="img6" class="cell">
            <img src="../../assets/hanlinBar/drink.png" alt />
          </td>
        </tr>
        <tr>
          <td id="img13" class="cell">
            <img src="../../assets/hanlinBar/popcorn6.png" alt />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td id="img7" class="cell">
            <img src="../../assets/hanlinBar/mealSet.png" alt />
          </td>
        </tr>
        <tr>
          <td id="img12" class="cell">
            <img src="../../assets/hanlinBar/popcorn.png" alt />
          </td>
          <td id="img11" class="cell">
            <img src="../../assets/hanlinBar/nothing.png" alt />
          </td>
          <td id="img10" class="cell">
            <img src="../../assets/hanlinBar/drink.png" alt />
          </td>
          <td id="img9" class="cell">
            <img src="../../assets/hanlinBar/popcorn.png" alt />
          </td>
          <td id="img8" class="cell">
            <img src="../../assets/hanlinBar/drink.png" alt />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// import { parse } from "path";
export default {
  data() {
    return {
      isStarted: false,
      initRotateIndex: 0,
      bettingOddsArray: [0.5, 0.3, 0.1, 0.05, 0.03, 0.02, 0.01],
      winOdds: 0.4,
      endPrizeArray: [],
      endPrizeIndex: 0,
      gamePoint: 100,
      betPopcorn: 0,
      betDrink: 0,
      betMealSet: 0,
      betBar: 0
    };
  },
  mounted() {
    // 初始化機率
    this.setProbability();
  },
  watch: {
    betPopcorn: function() {
      this.betPopcorn = parseInt(this.betPopcorn);
      if (this.totalPoint >= 0) {
        if (this.betPopcorn > 100) this.betPopcorn = 100;
        else if (this.betPopcorn < 0) this.betPopcorn = 0;
      } else {
        this.betPopcorn = 0;
      }
    },
    betDrink: function() {
      this.betDrink = parseInt(this.betDrink);
      if (this.totalPoint >= 0) {
        if (this.betDrink > 100) this.betDrink = 100;
        else if (this.betDrink < 0) this.betDrink = 0;
      } else {
        this.betDrink = 0;
      }
    },
    betMealSet: function() {
      this.betMealSet = parseInt(this.betMealSet);
      if (this.totalPoint >= 0) {
        if (this.betMealSet > 100) this.betMealSet = 100;
        else if (this.betMealSet < 0) this.betMealSet = 0;
      } else {
        this.betMealSet = 0;
      }
    },
    betBar: function() {
      this.betBar = parseInt(this.betBar);
      if (this.totalPoint >= 0) {
        if (this.betBar > 100) this.betBar = 100;
        else if (this.betBar < 0) this.betBar = 0;
      } else {
        this.betBar = 0;
      }
    }
  },
  computed: {
    totalPoint: function() {
      return (
        this.gamePoint -
        this.betPopcorn -
        this.betDrink -
        this.betMealSet -
        this.betBar
      );
    }
  },
  methods: {
    // 開轉邏輯
    rotation() {

      if (this.gamePoint - this.totalPoint<= 0) {
        this.$toasted.error("麻煩先下注", {
          theme: "bubble",
          duration: 3000
        });
      } else {
        var i = 0;
        var moveTime = 150;
        var endPrize =
          this.endPrizeArray[
            Math.floor(Math.random() * this.endPrizeArray.length)
          ] +
          (Math.round(Math.random() * 2) + 1) * 16;
        console.log(endPrize);
        // var endPrize = 8;
        // console.log(this.initRotateIndex);
        this.isStarted = true;
        var _this = this;
        console.log("endPrizeLocation: " + (endPrize % 16));
        if (document.getElementsByClassName("cellChange")[this.initRotateIndex])
          document
            .getElementsByClassName("cellChange")
            [this.initRotateIndex].classList.remove("cellChange");
        // console.log(document.getElementsByClassName("cellChange")[0])
        //   document.getElementsByClassName("cellChange")[0].classList.remove("cellChange");
        function running() {
          setTimeout(function() {
            // console.log(_this.initRotateIndex);
            document
              .getElementById("img" + ((_this.initRotateIndex + i) % 16))
              .classList.add("cellChange");
            if (((_this.initRotateIndex + i) % 16) - 1 >= 0)
              document
                .getElementById(
                  "img" + (((_this.initRotateIndex + i) % 16) - 1)
                )
                .classList.remove("cellChange");

            if ((_this.initRotateIndex + i) % 16 == 15) {
              setTimeout(function() {
                document
                  .getElementById("img" + 15)
                  .classList.remove("cellChange");
              }, moveTime);
            }
            i++;
            if (
              _this.initRotateIndex + i >
              endPrize - Math.ceil((endPrize - _this.initRotateIndex) / 3)
            )
              moveTime = 450;
            if (_this.initRotateIndex + i > endPrize) {
              _this.gamePoint = _this.totalPoint
              switch (endPrize % 16) {
                case 5:
                case 9:
                case 12:
                  if (_this.betPopcorn > 0) {
                    _this.gamePoint += 2*_this.betPopcorn
                    _this.$toasted.success("命中爆米花啦！恭喜得到2倍點數： "+2*_this.betPopcorn+"點", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }else{
                    _this.$toasted.info("可惜轉到了爆米花，再試個手氣吧", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }
                  break;
                case 0:
                case 6:
                case 8:
                case 10:
                  if(_this.betDrink>0){
                     _this.gamePoint += 3*_this.betDrink
                    _this.$toasted.success("命中可樂啦！恭喜得到3倍點數： "+3*_this.betDrink+"點", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }else{
                    _this.$toasted.info("可惜轉到了可樂，再試個手氣吧", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }
                  break;
                case 7:
                case 14:
                  if(_this.betMealSet>0){
                     _this.gamePoint += 4*_this.betMealSet
                    _this.$toasted.success("命中套餐啦！恭喜得到3倍點數： "+4*_this.betMealSet+"點", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }else{
                    _this.$toasted.info("可惜轉到了套餐，再試個手氣吧", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }
                  break;
                case 3:
                  if(_this.betBar>0){
                     _this.gamePoint += 5*_this.betBar
                    _this.$toasted.success("命中5倍Bar啦！恭喜得到5倍點數： "+5*_this.betBar+"點", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }else{
                    _this.$toasted.info("可惜轉到了Bar，再試個手氣吧", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }
                  break;
                case 13:
                  if (_this.betPopcorn > 0) {
                    _this.gamePoint += 6*_this.betPopcorn
                    _this.$toasted.success("命中可愛爆米花啦！恭喜得到6倍點數： "+6*_this.betPopcorn+"點", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }else{
                    _this.$toasted.info("可惜轉到了可愛爆米花，再試個手氣吧", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }
                  break;
                case 1:
                  if(_this.betBar>0){
                     _this.gamePoint += 7*_this.betBar
                    _this.$toasted.success("命中7倍Bar啦！恭喜得到7倍點數： "+7*_this.betBar+"點", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }else{
                    _this.$toasted.info("可惜轉到了Bar，再試個手氣吧", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }
                  break;
                case 2:
                  if(_this.betBar>0){
                     _this.gamePoint += 10*_this.betBar
                    _this.$toasted.success("命中10倍Bar啦！恭喜得到10倍點數： "+10*_this.betBar+"點", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }else{
                    _this.$toasted.info("可惜轉到了Bar，再試個手氣吧", {
                      theme: "bubble",
                      duration: 3000
                    });
                  }
                  break;
                default:
                  _this.$toasted.info("可惜是XX，再試一次?", {
                    theme: "bubble",
                    duration: 3000
                  });
                  break;
              }
              _this.betPopcorn=0;
              _this.betDrink=0;
              _this.betMealSet=0;
              _this.betBar=0;
              _this.isStarted = false;
              _this.initRotateIndex = endPrize % 16;
              return;
            }
            running();
          }, moveTime);
        }

        running();
      }
    },
    // 設定機率
    setProbability() {
      this.endPrizeIndex = 0;
      var totalOdds = 0;
      this.endPrizeArray = [];
      for (let k = 0; k < 7; k++) totalOdds += this.bettingOddsArray[k];
      // console.log("totalOdds: " + totalOdds);
      console.log("winOdds: " + this.winOdds);
      for (let k = 0; k < 7; k++) {
        this.bettingOddsArray[k] = Math.floor(
          ((this.bettingOddsArray[k] / totalOdds) * this.winOdds).toFixed(2) *
            100
        );
        switch (k) {
          case 0:
            var prizeArray = [5, 9, 12];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              var prize =
                prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 1:
            prizeArray = [0, 6, 8, 10];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 2:
            prizeArray = [7, 14];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 3:
            prizeArray = [3];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 4:
            prizeArray = [13];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 5:
            prizeArray = [1];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
          case 6:
            prizeArray = [2];
            for (let j = 0; j < this.bettingOddsArray[k]; j++) {
              prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
              this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
              this.endPrizeIndex += 1;
            }
            break;
        }
      }
      prizeArray = [4, 11, 15];
      for (let j = 0; j < Math.floor(100 * (1 - this.winOdds)); j++) {
        prize = prizeArray[Math.floor(Math.random() * prizeArray.length)];
        this.$set(this.endPrizeArray, this.endPrizeIndex, prize);
        this.endPrizeIndex += 1;
      }
      // console.log(this.endPrizeArray);
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}

.cell {
  width: 15%;
  border: 1px solid black;
}

.cellChange {
  outline: 3px solid blue;
}

input {
  width: 80%;
  font-size: 2vh;
}

.fa {
  width: 18%;
}
i {
  cursor: pointer;
}

p{
  font-size:1.8vw;
}
</style>