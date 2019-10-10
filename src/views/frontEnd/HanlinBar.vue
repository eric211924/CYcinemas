<template>
  <div class="row container m-auto">
    <div class="col-md-3">遊戲說明</div>
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
    <div class="col-md-3">
      <div>押注</div>
      <div>
        <button class="btn btn-lg btn-success" @click="setProbability">調整賠率</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isStarted: false,
      initRotateIndex: 0,
      bettingOddsArray: [0.1, 0.1, 0.1, 0.5, 0.4, 0.4, 0.3],
      winOdds: 0.4,
      endPrizeArray: [],
      endPrizeIndex: 0
    };
  },
  methods: {
    rotation() {
      var i = 0;
      var moveTime = 150;
      var endPrize =
        this.endPrizeArray[
          Math.floor(Math.random() * this.endPrizeArray.length)
        ] + (Math.round(Math.random() * 2) + 1) * 16;
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
              .getElementById("img" + (((_this.initRotateIndex + i) % 16) - 1))
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
            switch (endPrize % 16) {
              case 5:
              case 9:
              case 12:
                _this.$toasted.info("爆米花；恭喜得到2倍點數", {
                  theme: "bubble",
                  duration: 3000
                });
                break;
              case 0:
              case 6:
              case 8:
              case 10:
                _this.$toasted.info("可樂:恭喜得到3倍點數", {
                  theme: "bubble",
                  duration: 3000
                });
                break;
              case 7:
              case 14:
                _this.$toasted.info("套餐；恭喜得到4倍點數", {
                  theme: "bubble",
                  duration: 3000
                });
                break;
              case 3:
                _this.$toasted.info("×5 BAR:恭喜得到5倍點數", {
                  theme: "bubble",
                  duration: 3000
                });
                break;
              case 13:
                _this.$toasted.info("可愛的爆米花；恭喜得到6倍點數", {
                  theme: "bubble",
                  duration: 3000
                });
                break;
              case 1:
                _this.$toasted.info("×7 BAR:恭喜得到7倍點數", {
                  theme: "bubble",
                  duration: 3000
                });
                break;
              case 2:
                _this.$toasted.info("×10 BAR:恭喜得到10倍點數", {
                  theme: "bubble",
                  duration: 3000
                });
                break;
              default:
                _this.$toasted.success("QQ差了一點點，再接再厲唷", {
                  theme: "bubble",
                  duration: 3000
                });
                break;
            }
            _this.isStarted = false;
            _this.initRotateIndex = endPrize % 16;
            return;
          }
          running();
        }, moveTime);
      }

      running();
    },
    setProbability() {
      this.endPrizeIndex = 0;
      var totalOdds = 0;
      this.endPrizeArray = [];
      for (let k = 0; k < 7; k++) totalOdds += this.bettingOddsArray[k];
      console.log("totalOdds: " + totalOdds);
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
      console.log(this.endPrizeArray);
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
</style>