<template>

<div class="container">
  <div class="row">
    <div class="col-md-5 margin1"> 
    <div class="tab">
        <h6>確認內容</h6> 
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
                        <td>&emsp;新&emsp;&emsp;增&emsp;&emsp;&emsp;新增</td>
                    </tr>
                    <tr>
                        <td>&emsp;新&emsp;&emsp;增&emsp;&emsp;&emsp;新增</td>
                    </tr>
                    <tr>
                        <td>&emsp;總金額&emsp;&emsp;&emsp;&emsp;{{total}}</td>
                    </tr>
                </table>
             </div>
            </div>
            <button v-if="loginBar"  href data-toggle="modal" data-target="#login" type="button" 
            class="loginBtn btn btn-outline-dark">
                會員登入
            </button>

            
    </div>
    
    <div class="col-md-6  margin2">
        <div class="tab2">
            <h6>購買者資訊</h6>   
            <!--input-->
            <div v-if="!isMember" class="editInputGrounp input-group input-group-sm mb-1">  
                <span> 真實姓名 &emsp; </span>
                <input v-model="memberName" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </span>
                </div>
            </div> 
            <!--input-->
            <!-- <div v-if="!isMember" class="editInputGrounp input-group input-group-sm mb-1"> 
                <span> 
                    帳號 &emsp;&emsp;&emsp; 
                </span>
                <input v-model="account" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-address-book-o" aria-hidden="true"></i>
                    </span>
                </div>
            </div>  -->
            <!--input-->
            <!-- <div v-if="!isMember" class="editInputGrounp input-group input-group-sm mb-1"> 
                <span>
                    密碼 &emsp;&emsp;&emsp;
                </span>
                <input v-model="password" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
            </div>  -->
            <!--input-->
            <div v-if="!isMember" class="editInputGrounp input-group input-group-sm mb-1"> 
                <span> 
                    電子信箱 &emsp; 
                </span>
                <input v-model="email" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </span>
                </div>
            </div> 
            <!--input-->
            <div v-if="!isMember" class="editInputGrounp input-group input-group-sm mb-3"> 
                <span>
                    手機號碼 &emsp;
                </span>
                <input v-model="phone" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-phone-square" aria-hidden="true"></i>
                    </span>
                </div>
            </div> 
             
            <!--member only-->  
            <!--input-->
            <div  v-if="isMember" class="editInputGrounp input-group input-group-sm mb-1">  
                <span>
                    &emsp;真實姓名&ensp;:&ensp;{{memberName}} 
                </span>
            </div> 
            <!--input-->
            <div  v-if="isMember" class="editInputGrounp input-group input-group-sm mb-1">  
                <span>
                    &emsp;電子信箱&ensp;:&ensp;{{email}}  
                </span>
            </div>  
            <!--input-->
            <div  v-if="isMember" class="editInputGrounp input-group input-group-sm mb-3">  
                <span>
                    &emsp;手機號碼&ensp;:&ensp;{{phone}} 
                </span>
            </div>  
            <button @click="changeData" v-if="isMember" type="button" class="btn btn-outline-info">修改資料</button>
        </div><!--div"tab2"-->
        <div class="tab3">
            <h6>信用卡資料</h6> 
            <!--input-->
            <div class="editInputGrounp input-group input-group-sm mb-3"> 
                <span>
                    信用卡卡號 &emsp;
                </span>
                <input v-model="cadrd1" maxlength="4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <span>-</span>
                <input v-model="cadrd2" maxlength="4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <span>-</span>
                <input v-model="cadrd3" maxlength="4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <span>-</span>
                <input v-model="cadrd4" maxlength="4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div> 
        </div><!--div"tab3"-->   
            <div class="btnGroup"> 
            
                <button @click="ok()" type='submit' name='btn' value='確認送出' class="btn btn-sm btn-primary">
                    <i class="fa fa-check" aria-hidden="true"></i> 確認訂購
                </button> 
                <router-link to="/" class="router-link1 btn btn-sm btn-danger"> 
                    <i class="fa fa-times" aria-hidden="true"></i> 取消訂購
                </router-link>  
                <router-link to="/order/chooseSeat" class="router-link2 btn btn-sm btn-warning"> 
                    <i class="fa fa-reply" aria-hidden="true"></i> 回上一頁
                </router-link>  
                <!--hidden input-->
                <input type="hidden" name='sqlList' v-bind:value='sqlList'> 
            </div> 
    </div>
  </div> 
</div>
</template>


<script>  
var orderData = {
            movieName: '返校',
            theater: '台中',
            day: '2019-02-22',
            time: '14:00',
            ticket: '全票' ,
            food:'可樂',
            price: 280 ,
            num:  2,
            discount: 0,
            seat: 'A5,A6',
            hall: '第十廳',
            memberName:'', 
            email:'123@gmail.com',
            phone:'0911112222',
            total:580
}
sessionStorage.setItem('dataList',JSON.stringify(orderData));
export default { 
    data(){
        return {
            movieName: '',
            theater: '',
            day: '',
            time: '',
            ticket: '' ,
            food:'',
            price: 0 ,
            num:  0,
            discount: 0,
            seat: '',
            hall: '',
            memberName:'XXX', 
            email:'123@gmail.com',
            phone:'0919632541',
            total:'',
            real:'',  
            isMember:false,
            loginBar:true,
            sqlList:'',
            cadrd1:"1231",
            cadrd2:"1234",
            cadrd3:"1234",
            cadrd4:"1234"
        }
    },
    mounted() {  
        this.getData();
        this.detailCheckLogin();
        this.countMoney();  
    },
    methods:{ 
        changeData:function() {
            this.isMember = 0; 
            this.loginBar = 0;
        },
        detailCheckLogin:function() {
            if (localStorage.getItem('status')) { // 檢查是否在登入狀態 
            this.isMember = 1; 
            this.loginBar = 0; 
                var localSave= JSON.parse(localStorage.getItem('allUser')) 
                for (let i = 0; i < localSave.length; i++) { 
                    if(localStorage.getItem('logAccount') == localSave[i].account){ 
                        this.memberName = localSave[i].name;
                        this.email = localSave[i].email;
                        this.phone = localSave[i].phone; 
                        break;
                    } 
                }  
            }else{
                this.isMember = 0; 
                this.loginBar = 1; 
            }
        }, 
        checkPersonalInfo:function(){
            if( this.memberName.trim()==""| 
                this.email.trim()==""|
                this.phone.trim()==""|
                this.cadrd1.trim()==""|
                this.cadrd2.trim()==""|
                this.cadrd3.trim()==""|
                this.cadrd4.trim()==""
                )
            return 0;
            return 1;
        },
        ok:function(){ 
            if(this.isMember)
            return window.location.href="./#/order/FinishDetail";
            if(this.checkPersonalInfo()){ 
                // 資料無空白
                if(!(/.+@+.+\.com/.test(this.email))) 
                    return alert("email error"); 
                if(!(/^09\d{8}$/.test(this.phone)))
                    return alert("phone error"); 
                // if(!(/\d{4}/.test(this.card1)))
                //     return alert("card error"); 
                return window.location.href="./#/order/FinishDetail";
            }
            return alert("資料尚未填完"); 
        },
        cancel:function(){
            window.location.replace("http://localhost/php/cancel.html");
        },
        countMoney:function(){
            this.total=this.price*this.num;
            this.real =this.total*this.discount;
        },
        getData: function(){
            this.sqlList= sessionStorage.getItem('sqlList');
            this.movieName=JSON.parse(sessionStorage.getItem('dataList')).movieName; 
            this.theater=JSON.parse(sessionStorage.getItem('dataList')).theater; 
            this.day=JSON.parse(sessionStorage.getItem('dataList')).day; 
            this.time=JSON.parse(sessionStorage.getItem('dataList')).time; 
            this.ticket=JSON.parse(sessionStorage.getItem('dataList')).ticket; 
            this.food=JSON.parse(sessionStorage.getItem('dataList')).food; 
            this.price=JSON.parse(sessionStorage.getItem('dataList')).price;
            this.num=JSON.parse(sessionStorage.getItem('dataList')).num;
            this.discount=JSON.parse(sessionStorage.getItem('dataList')).discount;
            this.seat=JSON.parse(sessionStorage.getItem('dataList')).seat; 
            this.hall=JSON.parse(sessionStorage.getItem('dataList')).hall; 
            this.phone=JSON.parse(sessionStorage.getItem('dataList')).phone; 
        } 
    } 
} 
</script>

<style lang="scss" scoped>
    .col-md-3,.col-md-4,.col-md-5,.col-md-6{ 
        padding:0; 
    }
    .margin1{
        margin-top: 2%; 
    }
    .margin2{ 
        margin:2% 0 0 6%;
    }
    .tab,.tab2,.tab3{
        border-radius:5px; 
        border: 1px solid gray; 
        h6{ 
            text-align:left;
            padding:10px 0px 10px 20px;
            background-color:gray;
            color:white;
        }
        div{ 
            margin:20px 20px; 
            font-size:16px; 
            table{  
                text-align:left;
                width:100%;
                tr{ 
                    border-bottom: 2px solid gray;
                    td{
                        padding:5px 0px ; 
                    }
                }
                tr:last-child{ 
                    border-bottom: 0;
                }
            } 
        }
    }
    .tab2,.tab3{  
        button:last-child{ 
            width:100%; 
        }
        .input-group{
        margin-right:70px 40px; 
        }
        .editInputGrounp{ 
            padding-top:20px;
            padding-left:20px;
            padding-right:20px; 
            span{
                font-size:20px;
            } 
        }
        div{
            border: 0;
            margin:0px;  
            .fa{//icon寬度
                width:18px;
            }
        }
    }
    .tab3{ 
        margin:5% 0 0 0; 
        width:86%; 
        .editInputGrounp{
            span:not(:first-child){
                font-size:25px;
                width:10px; 
            }
        } 
    } 
    .btnGroup{  
        margin:3% 0%;   //上下間隔 
        button{
            margin:0% 5% 0% 0%; 
        }  
        .router-link1{ 
            margin:0% 5% 0% 0%; 
        }
        .router-link2{
            float:right; 
            margin:0% 14% 0% 0%; 
        }
    }
    .loginBtn{
         margin:3% 0%;   //上下間隔 
         width:100%;
         height:15%;
    }
     
</style>
