<template>

<div class="container">
<h1 class="text-center my-5">訂票</h1>
  <div class="row">
    <div class="col-md-6 padding1"> 
    <div class="tab">
        <h6>確認內容</h6> 
            <div> 
                <table>
                    <tr>
                        <td>&emsp;名&emsp;&emsp;稱&emsp;&emsp;&emsp;{{list.movieName}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;上映地點&emsp;&emsp;&emsp;中佑戲院{{list.theater}}影城</td>
                    </tr>
                    <tr>
                        <td>&emsp;放映場次&emsp;&emsp;&emsp;{{list.day}} {{list.time}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;座&emsp;&emsp;位&emsp;&emsp;&emsp;{{list.seat}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;票&emsp;&emsp;種&emsp;&emsp;&emsp;{{list.ticket}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;餐&emsp;&emsp;點&emsp;&emsp;&emsp;{{list.food_popcorn}}{{list.num_popcorn}}{{list.food_coke}}{{list.num_coke}}</td>
                    </tr>
                    <tr>
                        <td>&emsp;折&emsp;&emsp;扣&emsp;&emsp;&emsp;{{list.discount}}</td>
                    </tr> 
                    <tr>
                        <td>&emsp;總金額&emsp;&emsp;&emsp;&emsp;{{list.total}} x {{list.discount}} = {{list.real}}</td>
                    </tr> 
                </table>
             </div>
            </div>
            

            
    </div>
    
    <div class="col-md-6  padding2">
        <div class="tab2">
            <h6>購買者資訊</h6>   
            <!--input-->
            <div v-if="!list.isMember" class="editInputGrounp input-group input-group-sm mb-1">  
                <span> 真實姓名 &emsp; </span>
                <input v-model="list.memberName" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </span>
                </div>
            </div> 
            <!--input-->
            <!-- <div v-if="!list.isMember" class="editInputGrounp input-group input-group-sm mb-1"> 
                <span> 
                    帳號 &emsp;&emsp;&emsp; 
                </span>
                <input v-model="list.account" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-address-book-o" aria-hidden="true"></i>
                    </span>
                </div>
            </div>  -->
            <!--input-->
            <!-- <div v-if="!list.isMember" class="editInputGrounp input-group input-group-sm mb-1"> 
                <span>
                    密碼 &emsp;&emsp;&emsp;
                </span>
                <input v-model="list.password" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
            </div>  -->
            <!--input-->
            <div v-if="!list.isMember" class="editInputGrounp input-group input-group-sm mb-1"> 
                <span> 
                    電子信箱 &emsp; 
                </span>
                <input v-model="list.email" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </span>
                </div>
            </div> 
            <!--input-->
            <div v-if="!list.isMember" class="editInputGrounp input-group input-group-sm mb-3"> 
                <span>
                    手機號碼 &emsp;
                </span>
                <input v-model="list.phone" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i class="fa fa-phone-square" aria-hidden="true"></i>
                    </span>
                </div>
            </div> 
             
            <!--member only-->  
            <!--input-->
            <div  v-if="list.isMember" class="editInputGrounp input-group input-group-sm mb-1">  
                <span>
                    &emsp;真實姓名&ensp;:&ensp;{{list.memberName}} 
                </span>
            </div> 
            <!--input-->
            <div  v-if="list.isMember" class="editInputGrounp input-group input-group-sm mb-1">  
                <span>
                    &emsp;電子信箱&ensp;:&ensp;{{list.email}}  
                </span>
            </div>  
            <!--input-->
            <div  v-if="list.isMember" class="editInputGrounp input-group input-group-sm mb-3">  
                <span>
                    &emsp;手機號碼&ensp;:&ensp;{{list.phone}} 
                </span>
            </div>  
            
            
        </div><!--div"tab2"-->
        <button @click="editData" v-if="list.editBar"  type="button" class="loginBtn btn btn-outline-info">更改資料</button>
        
        <button v-if="list.loginBar"  href data-toggle="modal" data-target="#login" type="button" 
            class="loginBtn btn btn-outline-secondary">
                會員登入
            </button>
        <div class="tab3">
            <h6>信用卡資料</h6> 
            <!--input-->
            <div class="editInputGrounp input-group input-group-sm mb-3"> 
                <span>
                    信用卡卡號 &emsp;
                </span>
                <input v-model="list.cadrd1" maxlength="4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <span>-</span>
                <input v-model="list.cadrd2" maxlength="4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <span>-</span>
                <input v-model="list.cadrd3" maxlength="4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <span>-</span>
                <input v-model="list.cadrd4" maxlength="4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div> 
        </div><!--div"tab3"-->  
        <div class="btnGroup"> 
            
                <button @click="ok()" type='submit' name='btn' value='確認送出' class="btn btn-outline-primary">
                    <i class="fa fa-check" aria-hidden="true"></i> 確認訂購
                </button> 
                <router-link to="/" class="router-link1 btn btn-outline-danger"> 
                    <i class="fa fa-times" aria-hidden="true"></i> 取消訂購
                </router-link> 
            </div> 
        </div>
        </div> 
        <div class="row"> 
            <div class="col-md-12">  
            
            </div> 
            </div> 
    
  
</div>
</template>


<script> 
export default { 
    data(){
        return {
            list:{
                movieName: '返校',
                theater: '台中',
                day: '',
                time: '',
                ticket: '' ,
                food_popcorn:'爆米花',
                food_coke:'可樂',
                num_popcorn:0,
                num_coke:0,
                price: 0 ,
                num:  0,
                discount: 0.7,
                seat: '',
                hall: '',
                memberName:'', 
                email:'123@gmail.com',
                phone:'0919632541',
                total:101,
                real:1,  
                isMember:false,
                loginBar:true, 
                editBar:true,
                cadrd1:"1231",
                cadrd2:"1234",
                cadrd3:"1234",
                cadrd4:"1234"
            },
        FinishPageData:"" 
        }
    },
    mounted() { 
        this.getData();
        this.detailCheckLogin();
        this.countMoney();  
        this.saveDataToFinishPage();
    },
    methods:{
        saveDataToFinishPage:function() {
            // this.FinishPageData = JSON.stringify(this.list)
            sessionStorage.setItem('FinishPageData',JSON.stringify(this.list))
            // console.log(this.FinishPageData); 
            
        },
        editData:function() {
            this.list.isMember = 0; 
            this.list.loginBar = 0;
        },
        detailCheckLogin:function() { 
            if (localStorage.getItem('status')) { // 檢查是否在登入狀態 
            this.list.isMember = 1; 
            this.list.loginBar = 0; 
            this.list.editBar = 1;
            this.memberGetData();
            }else{
                this.list.isMember = 0; 
                this.list.loginBar = 1; 
                this.list.editBar = 0;
            }
        }, 
        checkPersonalInfo:function(){
            if( this.list.memberName.trim()==""| 
                this.list.email.trim()==""|
                this.list.phone.trim()==""|
                this.list.cadrd1.trim()==""|
                this.list.cadrd2.trim()==""|
                this.list.cadrd3.trim()==""|
                this.list.cadrd4.trim()==""
                )
            return 0;
            return 1;
        },
        ok:function(){ 
            if(this.list.isMember)
            return window.location.href="./#/order/FinishDetail";
            if(this.checkPersonalInfo()){ 
                // 資料無空白
                if(!(/.+@+.+\.com/.test(this.list.email))) 
                    return alert("email error"); 
                if(!(/^09\d{8}$/.test(this.list.phone)))
                    return alert("phone error"); 
                // if(!(/\d{4}/.test(this.list.card1)))
                //     return alert("card error"); 
                this.saveDataToFinishPage();
                return window.location.href="./#/order/FinishDetail";
            }
            return alert("資料尚未填完"); 
        }, 
        countMoney:function(){
            // this.list.total=this.list.price*this.list.num;
            this.list.real =Math.ceil(this.list.total*this.list.discount);
        },
        memberGetData: function(){ 
            this.list.memberName = localStorage.getItem('nowName'); 
            this.list.email = localStorage.getItem('email'); 
            this.list.phone = localStorage.getItem('phone'); 
        },
        getData: function(){ 
            if(sessionStorage.getItem('foodDrinksNum')){
                var foodDrinksNum = JSON.parse(sessionStorage.getItem('foodDrinksNum'));
                this.list.num_coke = foodDrinksNum.可樂 ; 
                this.list.num_popcorn = foodDrinksNum.爆米花;
            }
            var movie_index = JSON.parse(sessionStorage.getItem('movie_index'));
            var day_index = JSON.parse(sessionStorage.getItem('day_index'));
            var time_index = JSON.parse(sessionStorage.getItem('time_index'));
            var ticketsNum = JSON.parse(sessionStorage.getItem('ticketsNum')); 
        } 
    } 
} 
</script>

<style lang="scss" scoped>
    .container{
        // margin:0;
        // width:100;
        // border:2px solid blue;
    }
    .col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-12{ 
        padding:0; 
        // border:2px solid red;
    }
    .padding1{
        padding:0% 1% 0% 0%; 
    }
    .padding2{ 
        padding:0% 0% 0% 1%;
    }
    .tab{
        width:95%;
        height:90%;
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
        margin:0% 0 0 0; 
        // width:90%; 
        .editInputGrounp{
            span:not(:first-child){
                font-size:25px;
                width:10px; 
            }
        } 
    } 
    .btnGroup{  
        margin:5% 0%;   //上下間隔 
        button{
            margin:0% 1% 0% 0%;  
            width:49%;
            font-size:20px;
        }  
        .router-link1{ 
            margin:0% 0% 0% 1%;  
           width:49%;
            font-size:20px; 
        } 
    }
    .loginBtn{ 
         margin:2% 0% 2% 0%;   //上下間隔 
         width:100%; 
    }
     
</style>
