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
          <div class="modal-body">
            <div class="form-group">
              <label for>姓名 :</label>
              <input type="text" class="form-control" v-model="name"/>
            </div>
            <div class="form-group">
              <label for>帳號 :</label>
              <input type="text" class="form-control" v-model="account" @change="checkAcc"/>
              {{ check }}
            </div>
            <div class="form-group">
              <label for>密碼 :</label>
              <input type="text" class="form-control" v-model="password"/>
            </div>
            <div class="form-group">
              <label for>信箱 :</label>
              <input type="text" class="form-control" v-model="email"/>
            </div>
            <div class="form-group">
              <label for>電話 :</label>
              <input type="text" class="form-control" v-model="phone"/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="registered" 
            >送出</button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var userList = []; // 暫存各使用者所填寫的資料
export default {
  data() {
    return {
      name: '',
      account: '',
      password: '',
      email: '',
      phone: '',
      check: ''
    }
  },
  methods: {
    registered() {
      // 註冊時 檢查帳號是否存在
      // 會員註冊資料暫存 若帳號無重複 將此筆資料存進local
      var userData = {
        name: this.name,
        account: this.account,
        password: this.password,
        email: this.email,
        phone: this.phone
      };
      // 檢查local內有無資料 無: 直接新增會員 有: 取出local內已存的帳號比對
      if (localStorage.getItem("allUser") === null) {
        this.$toasted.success("註冊成功", {
          theme: 'bubble',
          duration: 3000
        });
        userList.push(userData);
        localStorage.setItem("allUser", JSON.stringify(userList));
      } else {
        // 取出local內已存的帳號比對 
        // 有: 告知此帳號已存在 不存此會員註冊資料進local 
        // 無: 將此會員註冊資料存進local
        console.log("yes");
        var getAccount = JSON.parse(localStorage.getItem("allUser"));
        // console.log(getAccount);
        var accIsExist = getAccount.find(getAccount => getAccount.account == this.account);
        if (accIsExist) {
          this.$toasted.error("此帳號有人使用了 換一個吧", {
            theme: 'bubble',
            duration: 3000
          });
        } else {
          this.$toasted.success("會員建立成功", {
            theme: 'bubble',
            duration: 3000
          });
          getAccount.push(userData);
          localStorage.setItem("allUser", JSON.stringify(getAccount));
        }
      }
      this.name = "";
      this.account = "";
      this.password = "";
      this.email = "";
      this.phone = "";
      this.check = "";
    },
    checkAcc() {
      // 帳號輸入後 檢查帳號是否存在
      // 先檢查local內有無資料 無: 表示帳號可使用  有: 取出local內已存的帳戶名稱比對
      if (localStorage.getItem("allUser") === null) {
        this.check = "此帳號可以使用";
      } else {
        // 取出local內已存的帳戶名稱比對 
        // 有: 告知此帳戶已存在  無: 表示帳號可使用
        var getAccount = JSON.parse(localStorage.getItem("allUser"));
        var accIsExist = getAccount.find(getAccount => getAccount.account == this.account);
        if (accIsExist) {
          this.check = "此帳號已有人使用";
        } else {
          this.check = "此帳號可以使用";
        }
      }
    }
  }
}
</script>