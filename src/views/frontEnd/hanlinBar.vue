<template>
  <div>
    <table align="center" class="mt-5">
      <tr>
        <td id="img0" class="cell">
          <img src="../../assets/hanlinBar/popcorn.png" alt />
        </td>
        <td id="img1" class="cell">
          <img src="../../assets/hanlinBar/bar50.png" alt />
        </td>
        <td id="img2" class="cell">
          <img src="../../assets/hanlinBar/threeBar.png" alt />
        </td>
        <td id="img3" class="cell">
          <img src="../../assets/hanlinBar/bar25.png" alt />
        </td>
        <td id="img4" class="cell">
          <img src="../../assets/hanlinBar/bar25.png" alt />
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
          <img src="../../assets/hanlinBar/drink.png" alt />
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td id="img6" class="cell">
          <img src="../../assets/hanlinBar/ticket.png" alt />
        </td>
      </tr>
      <tr>
        <td id="img13" class="cell">
          <img src="../../assets/hanlinBar/drink.png" alt />
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td id="img7" class="cell">
          <img src="../../assets/hanlinBar/ticket.png" alt />
        </td>
      </tr>
      <tr>
        <td id="img12" class="cell">
          <img src="../../assets/hanlinBar/mealSet.png" alt />
        </td>
        <td id="img11" class="cell">
          <img src="../../assets/hanlinBar/nothing.png" alt />
        </td>
        <td id="img10" class="cell">
          <img src="../../assets/hanlinBar/popcorn.png" alt />
        </td>
        <td id="img9" class="cell">
          <img src="../../assets/hanlinBar/drink.png" alt />
        </td>
        <td id="img8" class="cell">
          <img src="../../assets/hanlinBar/drink.png" alt />
        </td>
      </tr>
    </table>
    <div class="text-center mt-3">
      <button class="btn btn-lg btn-warning" @click="rotation">開始輪轉</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    rotation() {
      var i = 0;
      var moveTime = 150;
      var endTime = Math.ceil(Math.random() * 30 + 12);
      //   var endTime = 5;

      console.log("endTime: " + endTime);

      if (document.getElementsByClassName("cellChange")[0])
        document
          .getElementsByClassName("cellChange")[0]
          .classList.remove("cellChange");
      // console.log(document.getElementsByClassName("cellChange")[0])
      //   document.getElementsByClassName("cellChange")[0].classList.remove("cellChange");
      function running() {
        setTimeout(function() {
            console.log(i);
          document.getElementById("img" + (i % 16)).classList.add("cellChange");
          if ((i % 16) - 1 >= 0)
            document
              .getElementById("img" + ((i % 16) - 1))
              .classList.remove("cellChange");

          if (i % 16 == 15) {
            setTimeout(function() {
              document
                .getElementById("img" + 15)
                .classList.remove("cellChange");
            }, moveTime);
          }
          i++;
          if(i>endTime - Math.ceil(endTime/3)) moveTime =450;
          if(i>endTime) {
              switch(i%16){
                  case 0,4,7:
                      this.$toasted.info("恭喜得到")

              }
              return;}
          running();
        }, moveTime);
      }

      running();
    //   var test = setInterval(() => {
    //     if (i % 10 == 0) console.log(i);

    //     document.getElementById("img" + (i % 12)).classList.add("cellChange");
    //     if ((i % 12) - 1 >= 0)
    //       document
    //         .getElementById("img" + ((i % 12) - 1))
    //         .classList.remove("cellChange");

    //     if (i % 12 == 11) {
    //       setTimeout(function() {
    //         document.getElementById("img" + 11).classList.remove("cellChange");
    //       }, moveTime);
    //     }
    //     i++;
    //     if (i > endTime) clearInterval(test);
    //   }, moveTime);
    }
  }
};
</script>

<style scoped>
img {
  width: 6vw;
}
.cell {
  border: 1px solid black;
}
.cellChange {
  outline: 3px solid blue;
}
</style>
