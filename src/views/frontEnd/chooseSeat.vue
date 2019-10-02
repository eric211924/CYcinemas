
<template>
  <div class="container">
    <h1 class="text-center my-5">訂票</h1>

    <div id="vm">
      <div>


      

        <table  class="table table-borderless" >
            <tr>
                <td>
                    <p @click="a1=!a1; putSeatIn(a1,1)" v-bind:class="{changeColor:a1}">1</p>
                    <p @click="a10=!a10; putSeatIn(a10,10)" v-bind:class="{changeColor:a10}">10</p>
                    <p @click="a19=!a19; putSeatIn(a19,19)" v-bind:class="{changeColor:a19}">19</p>
                    <p @click="a28=!a28; putSeatIn(a28,28)" v-bind:class="{changeColor:a28}">28</p>
                    <p @click="a37=!a37; putSeatIn(a37,37)" v-bind:class="{changeColor:a37}">37</p>
                    <p @click="a46=!a46; putSeatIn(a46,46)" v-bind:class="{changeColor:a46}">46</p>
                    <p @click="a55=!a55; putSeatIn(a55,55)" v-bind:class="{changeColor:a55}">55</p>
                    <p @click="a64=!a64; putSeatIn(a64,64)" v-bind:class="{changeColor:a64}">64</p>
                </td>
                <td>
                    <p @click="a2=!a2; putSeatIn(a2,2)" v-bind:class="{changeColor:a2}">2</p>
                    <p @click="a11=!a11; putSeatIn(a11,11)" v-bind:class="{changeColor:a11}">11</p>
                    <p @click="a20=!a20; putSeatIn(a20,20)" v-bind:class="{changeColor:a20}">20</p>
                    <p @click="a29=!a29; putSeatIn(a29,29)" v-bind:class="{changeColor:a29}">29</p>
                    <p @click="a38=!a38; putSeatIn(a38,38)" v-bind:class="{changeColor:a38}">38</p>
                    <p @click="a47=!a47; putSeatIn(a47,47)" v-bind:class="{changeColor:a47}">47</p>
                    <p @click="a56=!a56; putSeatIn(a56,56)" v-bind:class="{changeColor:a56}">56</p>
                    <p @click="a65=!a65; putSeatIn(a65,65)" v-bind:class="{changeColor:a65}">65</p>
                </td>
                <td>
                </td>
                <td>
                    <p @click="a3=!a3; putSeatIn(a3,3)" v-bind:class="{changeColor:a3}">3</p>
                    <p @click="a12=!a12; putSeatIn(a12,12)" v-bind:class="{changeColor:a12}">12</p>
                    <p @click="a21=!a21; putSeatIn(a21,21)" v-bind:class="{changeColor:a21}">21</p>
                    <p @click="a30=!a30; putSeatIn(a30,30)" v-bind:class="{changeColor:a30}">30</p>
                    <p @click="a39=!a39; putSeatIn(a39,39)" v-bind:class="{changeColor:a39}">39</p>
                    <p @click="a48=!a48; putSeatIn(a48,48)" v-bind:class="{changeColor:a48}">48</p>
                    <p @click="a57=!a57; putSeatIn(a57,57)" v-bind:class="{changeColor:a57}">57</p>
                    <p @click="a66=!a66; putSeatIn(a66,66)" v-bind:class="{changeColor:a66}">66</p>
                </td>
                
                <td>
                    <p @click="a4=!a4; putSeatIn(a4,4)" v-bind:class="{changeColor:a4}">4</p>
                    <p @click="a13=!a13; putSeatIn(a13,13)" v-bind:class="{changeColor:a13}">13</p>
                    <p @click="a22=!a22; putSeatIn(a22,22)" v-bind:class="{changeColor:a22}">22</p>
                    <p @click="a31=!a31; putSeatIn(a31,31)" v-bind:class="{changeColor:a31}">31</p>
                    <p @click="a40=!a40; putSeatIn(a40,40)" v-bind:class="{changeColor:a40}">40</p>
                    <p @click="a49=!a49; putSeatIn(a49,49)" v-bind:class="{changeColor:a49}">49</p>
                    <p @click="a58=!a58; putSeatIn(a58,58)" v-bind:class="{changeColor:a58}">58</p>
                    <p @click="a67=!a67; putSeatIn(a67,67)" v-bind:class="{changeColor:a67}">67</p>
                </td>
                <td>
                    <p @click="a5=!a5; putSeatIn(a5,5)" v-bind:class="{changeColor:a5}">5</p>
                    <p @click="a14=!a14; putSeatIn(a14,14)" v-bind:class="{changeColor:a14}">14</p>
                    <p @click="a23=!a23; putSeatIn(a23,23)" v-bind:class="{changeColor:a23}">23</p>
                    <p @click="a32=!a32; putSeatIn(a32,32)" v-bind:class="{changeColor:a32}">32</p>
                    <p @click="a41=!a41; putSeatIn(a41,41)" v-bind:class="{changeColor:a41}">41</p>
                    <p @click="a50=!a50; putSeatIn(a50,50)" v-bind:class="{changeColor:a50}">50</p>
                    <p @click="a59=!a59; putSeatIn(a59,59)" v-bind:class="{changeColor:a59}">59</p>
                    <p @click="a68=!a68; putSeatIn(a68,68)" v-bind:class="{changeColor:a68}">68</p>
                </td>
                <td>
                    <p @click="a6=!a6; putSeatIn(a6,6)" v-bind:class="{changeColor:a6}">6</p>
                    <p @click="a15=!a15; putSeatIn(a15,15)" v-bind:class="{changeColor:a15}">15</p>
                    <p @click="a24=!a24; putSeatIn(a24,24)" v-bind:class="{changeColor:a24}">24</p>
                    <p @click="a33=!a33; putSeatIn(a33,33)" v-bind:class="{changeColor:a33}">33</p>
                    <p @click="a42=!a42; putSeatIn(a42,42)" v-bind:class="{changeColor:a42}">42</p>
                    <p @click="a51=!a51; putSeatIn(a51,51)" v-bind:class="{changeColor:a51}">51</p>
                    <p @click="a60=!a60; putSeatIn(a60,60)" v-bind:class="{changeColor:a60}">60</p>
                    <p @click="a69=!a69; putSeatIn(a69,69)" v-bind:class="{changeColor:a69}">69</p>
                </td>
                <td>
                    <p @click="a7=!a7; putSeatIn(a7,7)" v-bind:class="{changeColor:a7}">7</p>
                    <p @click="a16=!a16; putSeatIn(a16,16)" v-bind:class="{changeColor:a16}">16</p>
                    <p @click="a25=!a25; putSeatIn(a25,25)" v-bind:class="{changeColor:a25}">25</p>
                    <p @click="a34=!a34; putSeatIn(a34,34)" v-bind:class="{changeColor:a34}">34</p>
                    <p @click="a43=!a43; putSeatIn(a43,43)" v-bind:class="{changeColor:a43}">43</p>
                    <p @click="a52=!a52; putSeatIn(a52,52)" v-bind:class="{changeColor:a52}">52</p>
                    <p @click="a61=!a61; putSeatIn(a61,61)" v-bind:class="{changeColor:a61}">61</p>
                    <p @click="a70=!a70; putSeatIn(a70,70)" v-bind:class="{changeColor:a70}">70</p>
                </td>
                <td>
                </td>
                <td>
                    <p @click="a8=!a8; putSeatIn(a8,8)" v-bind:class="{changeColor:a8}">8</p>
                    <p @click="a17=!a17; putSeatIn(a17,17)" v-bind:class="{changeColor:a17}">17</p>
                    <p @click="a26=!a26; putSeatIn(a26,26)" v-bind:class="{changeColor:a26}">26</p>
                    <p @click="a35=!a35; putSeatIn(a35,35)" v-bind:class="{changeColor:a35}">35</p>
                    <p @click="a44=!a44; putSeatIn(a44,44)" v-bind:class="{changeColor:a44}">44</p>
                    <p @click="a53=!a53; putSeatIn(a53,53)" v-bind:class="{changeColor:a53}">53</p>
                    <p @click="a62=!a62; putSeatIn(a62,62)" v-bind:class="{changeColor:a62}">62</p>
                    <p @click="a71=!a71; putSeatIn(a71,71)" v-bind:class="{changeColor:a71}">71</p>
                </td>
                <td>
                    <p @click="a9=!a9; putSeatIn(a9,9)" v-bind:class="{changeColor:a9}">9</p>
                    <p @click="a18=!a18; putSeatIn(a18,18)" v-bind:class="{changeColor:a18}">18</p>
                    <p @click="a27=!a27; putSeatIn(a27,27)" v-bind:class="{changeColor:a27}">27</p>
                    <p @click="a36=!a36; putSeatIn(a36,36)" v-bind:class="{changeColor:a36}">36</p>
                    <p @click="a45=!a45; putSeatIn(a45,45)" v-bind:class="{changeColor:a45}">45</p>
                    <p @click="a54=!a54; putSeatIn(a54,54)" v-bind:class="{changeColor:a54}">54</p>
                    <p @click="a63=!a63; putSeatIn(a63,63)" v-bind:class="{changeColor:a63}">63</p>
                    <p @click="a72=!a72; putSeatIn(a72,72)" v-bind:class="{changeColor:a72}">72</p>
                    
                </td>                    
            </tr>
        </table>

        </div>
        every seat status: {{ checkedNames }}
        <br>
        checked seats: {{ finalSeat  }}

=======
        <br><br><br>
        <router-link
            to="/order/Detail"
            class="btn btn-success btn-block"
          >點我去看訂單詳細</router-link>


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
      a10: false,
      a11: false,
      a12: false,
      a13: false,
      a14: false,
      a15: false,
      a16: false,
      a17: false, 
      a18: false,
      a19: false,
      a20: false,
      a21: false,
      a22: false,
      a23: false,
      a24: false,
      a25: false,
      a26: false,
      a27: false, 
      a28: false,
      a29: false,
      a30: false,
      a31: false,
      a32: false,
      a33: false,
      a34: false,
      a35: false,
      a36: false,
      a37: false, 
      a38: false,
      a39: false,
      a40: false,
      a41: false,
      a42: false,
      a43: false,
      a44: false,
      a45: false,
      a46: false,
      a47: false, 
      a48: false,
      a49: false,
      a50: false,
      a51: false,
      a52: false,
      a53: false,
      a54: false,
      a55: false,
      a56: false,
      a57: false, 
      a58: false,
      a59: false,
      a60: false,
      a61: false,
      a62: false,
      a63: false,
      a64: false,
      a65: false,
      a66: false,
      a67: false, 
      a68: false,
      a69: false,
      a70: false,
      a71: false,
      a72: false,
      a73: false,
      a74: false,
      a75: false,
      a76: false,
      a77: false, 
      a78: false,
      a79: false,
      checkedNames: [],
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
      for(i=0;i<80;i++){
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
  height: 30px;
  width: 30px;
  text-align: center;
  /* padding: 2px; */
  line-height:24px;
}

.changeColor {
  background: rgba(7, 73, 216, 0.918);
}

div{
  text-align: center;

}

div div{
  text-align: center;

}
</style>
