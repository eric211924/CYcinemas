
<template>
  <div class="container">
    <h1 class="text-center my-5">訂票</h1>

    <div id="vm">
        <table >
            <tr>
                <td>
                    <p @click="a1=!a1; putSeatIn(a1,1)" v-bind:class="{changeColor:a1}" >1</p>
                    <p v-on:click="a4=!a4; putSeatIn(a4,4)" v-bind:class="{changeColor:a4}">4</p>
                    <p v-on:click="a7=!a7; putSeatIn(a7,7)" v-bind:class="{changeColor:a7}">7</p>
                </td>
                <td>
                    <p v-on:click="a2=!a2; putSeatIn(a2,2)" v-bind:class="{changeColor:a2}">2</p>
                    <p v-on:click="a5=!a5; putSeatIn(a5,5)" v-bind:class="{changeColor:a5}">5</p>
                    <p v-on:click="a8=!a8; putSeatIn(a8,8)" v-bind:class="{changeColor:a8}">8</p>
                </td>
                <td>
                    <p v-on:click="a3=!a3; putSeatIn(a3,3)" v-bind:class="{changeColor:a3}">3</p>
                    <p v-on:click="a6=!a6; putSeatIn(a6,6)" v-bind:class="{changeColor:a6}">6</p>
                    <p v-on:click="a9=!a9; putSeatIn(a9,9)" v-bind:class="{changeColor:a9}">9</p>
                </td>
               
            </tr>
        </table>
        every seat status: {{ checkedNames }}
        <br>
        checked seats: {{ finalSeat  }}


    </div>
  </div>
</template>

<script>
export default {
  // name: "chooseSeat",
  data(){
    return{
      a: false,
      a1: false,
      a2: false,
      a3: false,
      a4: false,
      a5: false,
      a6: false,
      a7: false,   
                           
      a8: false,
      a9: false,
      checkedNames: [0,0,0,0,0,0,0,0,0,0],
      finalSeat:[],
      x:'',
      seat:''
    }
  },
  mounted(){
    this.putSeatIn(this.x,this.seat);
  },
  methods:{
    putSeatIn(x,seat){
      let i=0,j=0;
      this.checkedNames[seat]=x ;
      for(i=0;i<this.finalSeat.length;i++)
      this.finalSeat[i]=0;
      for(i=0;i<10;i++){
        if(this.checkedNames[i]==true){
            this.finalSeat[j]=i;
            j++;
        }
      }
    }
  }
}
</script>




<style>
p {
  border: 1px solid black;
  height: 18px;
  width: 20px;
  text-align: center;
  /* padding: 2px; */
  line-height:18px;
}

.changeColor {
  background: rgba(169, 233, 233, 0.918);
}
</style>
