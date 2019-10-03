<template>

<div class="container"> 
  <div class="row">
    <div class="col-md-8 offset-md-2">
        <div class="tab detail">
        <h6>訂購明細</h6> 
            <div> 
                <table>
                    <tr>
                        <td>&emsp;名&emsp;&emsp;稱&emsp;&emsp;&emsp;{{movieName}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;上映地點&emsp;&emsp;&emsp;中佑戲院{{theater}}影城</td>
                    </tr>
                    <tr>
                        <td>&emsp;放映場次&emsp;&emsp;&emsp;{{day}} {{time}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;座&emsp;&emsp;位&emsp;&emsp;&emsp;{{seat}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;票&emsp;&emsp;種&emsp;&emsp;&emsp;{{ticket}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;餐&emsp;&emsp;點&emsp;&emsp;&emsp;{{food}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;姓&emsp;&emsp;名&emsp;&emsp;&emsp;新增</td>
                    </tr>
                    <tr>
                        <td>&emsp;信&emsp;&emsp;箱&emsp;&emsp;&emsp;新增</td>
                    </tr>
                    <tr>
                        <td>&emsp;電&emsp;&emsp;話&emsp;&emsp;&emsp;新增</td>
                    </tr>
                    <tr>
                        <td>&emsp;總金額&emsp;&emsp;&emsp;&emsp;{{total}}</td>
                    </tr>
                </table>
             </div>
            </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8 offset-md-2">
    <button type="button" class="loginBtn btn btn-outline-warning">
                完成訂購
            </button>
     </div>
  </div>
</div>


</template>

<style lang="scss" scoped>
    .col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,
    .col-md-8{
        padding:0; 
        button{
            height:50px; 
        }
    }
    .detail{
        margin:3% 0 0 0;
        border: 1px solid orange; 
        h6{
        background-color:orange;
        }
        div{  
            table{ 
                tr{ 
                    border-bottom: 2px solid rgb(190,190,190); 
                } 
            }
        }
    }
</style>
