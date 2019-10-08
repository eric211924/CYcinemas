<template>
  <div>
    <div
      class="modal fade"
      id="register"
      tabindex="-1"
      role="dialog"
      aria-labelledby="register"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">註冊</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- 表單主體 -->
          <div class="modal-body" >
            <div class="form-group">
              <label for>姓名 :</label>
              <input type="text" class="form-control" maxlength="20" v-model="name"/>
              {{ nameResult }}
            </div>
            <div class="form-group">
              <label for>帳號 :</label>
              <input type="text" class="form-control" maxlength="20" v-model="account"/>
              {{ accResult }}
            </div>
            <div class="form-group">
              <label for>密碼 :</label>
              <input type="text" class="form-control" maxlength="20" v-model="password"/>
              {{ pwdResult }}
            </div>
            <div class="form-group">
              <label for>信箱 :</label>
              <input type="text" class="form-control" v-model="email"/>
              {{ emailResult }}
            </div>
            <div class="form-group">
              <label for>手機號碼 :</label>
              <input type="text" class="form-control" v-model="phone"/>
              {{ phoneResult }}
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button
              type="button"
              class="btn btn-primary"
              v-bind:disabled="isDisabled"
              @click="registered"
              data-dismiss="modal"
            >送出</button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      name: '',
      account: '',
      password: '',
      email: '',
      phone: '',
      result: "",
      isDisabled: true,
      nameResult: "",
      accResult: "",
      pwdResult: "",
      emailResult: "",
      phoneResult: "",
      nameReady: false,
      accReady: false,
      pwdReady: false,
      emailReady: false,
      phoneReady: false 
    }
  },
  mounted() {
  },
  // 監看各輸入欄位資料正確性 (是否空值 密碼長度 規則等是否正確)
  watch: {
    // 姓名: 長度不限 任意中英文組合 (不含特殊符號與數字)
    // ^[\u4e00-\u9fa5a-zA-Z0-9]+$
    name: function (val) {
      var nameTest = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(this.name);
      if(nameTest == false) {
        this.nameResult = "姓名需為任意中英文組合 不能有特殊符號 數字 空白";
        this.nameReady = false;
        this.checkInput();
      } else {
        this.nameResult = "OK";
        this.nameReady = true;
        this.checkInput();
      }
    },
    // 帳號: 至少五碼 且為任意英數字組合 (不含特殊符號) 
    // 並同時比對資料庫是否有相同帳號
    account: function () {
      var accTest = /^[A-Za-z0-9]{5,}/gm.test(this.account);
      if (accTest == true) {
        // 通過正規表示式 => 檢查帳號是否存在
        var _this = this;
        var account = this.account;
        var num_rows = 0;
        this.axios.get('https://cy-cinemas.ml/members/' + account)
          .then(function (response) {
            num_rows = response.data;
            if(num_rows > 0) {
              _this.accResult = "此帳號有人使用 換一個吧";
              _this.accReady = false;
              _this.checkInput();
            } else {
              _this.accResult = "OK";
              _this.accReady = true;
              _this.checkInput();
            }
          }).catch(function (error) {
           _this.accResult = error;
          });
      }else {
        // 未通過正規表示式 => 報錯
        this.accResult = "帳號必須為任意英數字組合 且大於五碼";
        this.accReady = false;
        this.checkInput();
      }
    },
    // 密碼: 至少五碼 且為任意英數字組合 (不含特殊符號)
    password: function () {
      var pwdTest = /^[A-Za-z0-9]{5,}/gm.test(this.password);
      if (pwdTest == true) {
        this.pwdResult = "OK";
        this.pwdReady = true;
        this.checkInput();
      } else {
        this.pwdResult = "密碼必須為任意英數字組合 且大於五碼";
        this.pwdReady = false;
        this.checkInput();
      }
    },
    // Email
    email: function () {
      var emailTest = /[a-zA-Z0-9]+@[a-zA-Z0-9.]+/.test(this.email);
      if (emailTest == true) {
        this.emailResult = "OK";
        this.emailReady = true;
        this.checkInput();
      } else {
        this.emailResult = "無效的Email";
        this.emailReady = false;
        this.checkInput();
      }
    },
    // phone: 只能輸入手機
    phone: function () {
      var phoneTest = /^09\d{2}-?\d{3}-?\d{3}$/.test(this.phone);
      if (phoneTest == true) {
        this.phoneResult = "OK";
        this.phoneReady = true;
        this.checkInput();
      } else {
        this.phoneResult = "電話格式為手機 且不能有特殊符號連接 (例 0912345678)";
        this.phoneReady = false;
        this.checkInput();
      }
    }
  },
  methods: {
    checkInput() {
      if (this.nameReady == false || this.accReady == false || this.pwdReady == false || this.emailReady == false || this.phoneReady == false) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },
    registered() {
      // var _this = this;
      // var formData = new FormData();
      // formData.append('name', this.name);
      // formData.append('account', this.account);
      // formData.append('password', this.password);
      // formData.append('email', this.email);
      // formData.append('phone', this.phone);
      // // https://cy-cinemas.ml/members/members
      // // http://localhost/CYcinemasBackEnd/members/members
      // this.axios.post('https://cy-cinemas.ml/members/members', formData)
      //   .then(function (response) {
      //     _this.result = response.data;
      //     _this.$toasted.success(_this.result, {
      //       theme: 'bubble',
      //       duration: 3000
      //     });
      //   }).catch(function (error) {
      //     _this.$toasted.error("會員註冊失敗，請確認網路連線狀態", {
      //         theme: 'bubble',
      //         duration: 3000
      //       });
      //   });
      console.log("before clear");

      this.isDisabled = false;
      this.nameReady = false;
      this.accReady = false;
      this.pwdReady = false;
      this.emailReady = false;
      this.phoneReady = false;

      this.nameResult = "";
      this.accResult = "";
      this.pwdResult = "";
      this.emailResult = "";
      this.phoneResult = "";

      this.name = '';
      this.account = '';
      this.password = '';
      this.email = '';
      this.phone = '';

      console.log("after clear");
      $('#register').modal('hide');
    },
  }
}
</script>