<template>
  <div>
    <div
      class="modal fade"
      id="register"
      tabindex="-1"
      role="dialog"
      aria-labelledby="register"
      aria-hidden="true"
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
          <div class="modal-body" novalidate>
            <div class="form-group needs-validation" v-bind:class="{'was-validated': invalid}">
              <label for>姓名 :</label>
              <input type="text" class="form-control" v-model="name" required/>
              <div class="valid-feedback">
                OK!
              </div>
              <div class="invalid-feedback">
                請輸入姓名
              </div>
            </div>
            <div class="form-group">
              <label for>帳號 :</label>
              <input type="text" class="form-control" v-model="account" @change="checkAcc" required/>
              <!-- <div class="invalid-feedback">
                請輸入帳號
              </div> -->
              {{ checkResult }}
            </div>
            <div class="form-group">
              <label for>密碼 :</label>
              <input type="text" class="form-control" v-model="password" required/>
            </div>
            <div class="form-group">
              <label for>信箱 :</label>
              <input type="text" class="form-control" v-model="email" required/>
            </div>
            <div class="form-group">
              <label for>電話 :</label>
              <input type="text" class="form-control" v-model="phone" required/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              v-bind:disabled="isDisabled"
              @click="registered"
            >送出</button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      name: '',
      account: '',
      password: '',
      email: '',
      phone: '',
      checkResult: "",
      result: "",
      isDisabled: false,
      invalid: false,
    }
  },
  mounted() {
    this.checkInput();
  },
  // 監看各輸入欄位資料正確性 (是否空值 密碼長度 規則等是否正確)
  watch: {
    // 姓名: 不為空值即可
    name: function () {
      if(this.name == "") {
        this.invalid = true;
        this.isDisabled = true;
      } else {
        this.invalid = false;
        this.isDisabled = false;
      }
    },
    // 帳號: 至少五碼 且為任意英數字組合 (不含特殊符號) 
    // 並同時比對資料庫是否有相同帳號
    account: function () {
      var regTest = /[A-Za-z0-9]{5,}/.test(this.account);
      console.log(regTest);
      
    }
  },
  methods: {
    checkInput() {
      if (this.name == "" || this.account == "" || this.password == "" || this.email == "" || this.phone == "") {
        this.isDisabled = true;
      }
    },
    registered() {
      var _this = this;
      var formData = new FormData();
      formData.append('name', this.name);
      formData.append('account', this.account);
      formData.append('password', this.password);
      formData.append('email', this.email);
      formData.append('phone', this.phone);
      // https://cy-cinemas.ml/members/members
      // http://localhost/CYcinemasBackEnd/members/members
      this.axios.post('https://cy-cinemas.ml/members/members', formData)
        .then(function (response) {
          _this.result = response.data;
          _this.$toasted.success(_this.result, {
            theme: 'bubble',
            duration: 3000
          });
        }).catch(function (error) {
          _this.$toasted.error("會員註冊失敗，請確認網路連線狀態", {
              theme: 'bubble',
              duration: 3000
            });
        });

      this.name = '';
      this.account = '';
      this.password = '';
      this.email = '';
      this.phone = '';
      this.checkResult = '';
    },
    checkAcc() {
      console.log('checked');
      var _this = this;
      var account = this.account;
      var num_rows = 0;
      // https://cy-cinemas.ml/members/
      // http://localhost/CYcinemasBackEnd/members/
      this.axios.get('https://cy-cinemas.ml/members/' + account)
        .then(function (response) {
          num_rows = response.data;
          if(num_rows > 0) {
            _this.checkResult = "此帳號已有人使用";
            _this.isDisabled = true;
          } else {
            _this.checkResult = "此帳號可以使用";
            _this.isDisabled = false;
          }
        }).catch(function (error) {
          _this.checkResult = error;
        });
    }
  }
}
</script>