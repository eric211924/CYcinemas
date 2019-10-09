<template>
  <div class="row container m-auto">
    <div class="col-md-3">
      遊戲說明
    </div>
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
          <td colspan=3>
            <div class="text-center">
              <button v-bind:disabled="isStarted" class="btn btn-lg btn-warning" @click="rotation">START</button>
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
      <div><button class="btn btn-lg btn-success" @click="setProbability(popcornx2,drinkx3,mealSetx4,barx5,popcornx6,barx7,barx10)">調整賠率</button></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isStarted: false,
        initRotateIndex: 0,
        popcornx2: 0,
        drinkx3: 0,
        mealSetx4: 0,
        barx5: 0.8,
        popcornx6: 0,
        barx7: 0,
        barx10: 0,
        winOdds: 0.6
      }
    },
    computed:{
      // winOdds:function(){

       
      // },
      loseOdds:function(){
        return 1-this.winOdds
      }
    },
    methods: {
      rotation() {
        var i = 0;
        var moveTime = 150;
        var endPrize = Math.ceil(Math.random() * 30 + 20);
        // var endPrize = 8;
        // console.log(this.initRotateIndex);
        this.isStarted = true;
        var _this = this;
        console.log("endPrizeLocation: " + endPrize % 16);
        if (document.getElementsByClassName("cellChange")[this.initRotateIndex])
          document
          .getElementsByClassName("cellChange")[this.initRotateIndex]
          .classList.remove("cellChange");
        // console.log(document.getElementsByClassName("cellChange")[0])
        //   document.getElementsByClassName("cellChange")[0].classList.remove("cellChange");
        function running() {
          setTimeout(function () {
            // console.log(_this.initRotateIndex);
            document.getElementById("img" + ((_this.initRotateIndex + i) % 16)).classList.add("cellChange");
            if (((_this.initRotateIndex + i) % 16) - 1 >= 0)
              document
              .getElementById("img" + (((_this.initRotateIndex + i) % 16) - 1))
              .classList.remove("cellChange");

            if ((_this.initRotateIndex + i) % 16 == 15) {
              setTimeout(function () {
                document
                  .getElementById("img" + 15)
                  .classList.remove("cellChange");
              }, moveTime);
            }
            i++;
            if ((_this.initRotateIndex + i) > endPrize - Math.ceil((endPrize - _this.initRotateIndex) / 3))
              moveTime = 450;
            if ((_this.initRotateIndex + i) > endPrize) {
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
      setProbability(x2 = 0, x3 = 0, x4 = 0, x5 = 0, x6 = 0, x7 = 0, x10 = 0) {
        // var totalOdds = x2 + x3 + x4 + x5 + x6 + x7 + x10
        console.log("totalOdds: " + this.totalOdds)
        console.log(`x2: ${x2}, x3: ${x3}, x4: ${x4}, x5: ${x5}, x6: ${x6}, x7: ${x7}, x10: ${x10}`)
        // if (!totalOdds){
        //   if(totalOdds==1){

        //   }else{

        //   }
        // }

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