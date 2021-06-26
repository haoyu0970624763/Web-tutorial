<template>
  <div>
    <Nav />
    <div class="title">Log In</div>
    <div class="loginIMG"><img src="@/assets/yoyoLin/login_img.svg" /></div>
    <div class="inputBox">
      <div class="Box">
        <img class="picBox" src="@/assets/yoyoLin/ID.svg" />
        <input type="text" name="inputID" placeholder="請輸入學號" />
      </div>
      <div class="Box">
        <img class="picBox" src="@/assets/yoyoLin/password.svg" />
        <input type="password" name="inputPassword" placeholder="請輸入密碼" />
        <img class="picBox" src="@/assets/yoyoLin/eye.svg" />
      </div>
    </div>
    <div id="login_output"></div>
    <div class="btnBox">
      <button class="btn_login" @click="btn_login">登入</button>
    </div>
    <div class="text">—————————還沒有帳號?—————————</div>
    <div class="btnBox">
      <button class="btn_reg" @click="btn_reg">立即註冊</button>
    </div>
  </div>
</template>
<style scoped>
.text {
  margin-top: 25px;
  margin-bottom: 10px;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  text-align: center;
  /* 深灰 */
  color: #5c5c5c;
}
img{
    background-size: cover;
}
.btnBox {
  text-align: center;
}
#login_output {
  height: 20px;
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  font-style: normal;
  color: #fa8181;
  font-weight: normal;
  font-size: 13px;
}
.btn_reg {
  height: 43px;
  width: 284px;
  background: #ffffff;
  border: 1px solid #20e2d7;
  border-radius: 33px;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: #8e8e8e;
  margin-top: 15px;
}
.btn_login {
  height: 43px;
  width: 284px;
  background: #20e2d7;
  box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
  border-radius: 33px;
  border: none;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  margin-top: 15px;
}
.inputBox {
  text-align: center;
}
input:focus {
  outline: none;
}
.Box {
  position: relative;
  width: 283px;
  height: 42px;
  left: 37.5px;
  top: 0px;
  text-align: center;
  border-radius: 33px;
  border: 1px solid;
  /*使用 border-image 最大的問題在於，設置的 border-radius 會失效。 */
  background: linear-gradient(136.56deg, #ffffff -16.84%, #ffffff 102.5%)
      padding-box,
    /*this is your grey background*/
      linear-gradient(180deg, #96fbc4 33.15%, #20e2d7 127.81%) border-box;
  border: 1px solid transparent;
  border-radius: 33px;
  display: flex;
  flex-direction: row;
  margin: 7px;
}
.picBox {
  position: relative;
  width: 30px;
  height: 20px;
  left: 7.5px;
  top: 7.5px;
}
input {
  position: relative;
  background-color: transparent;
  left: 20px;
  border: 0;
}
.loginIMG {
  text-align: center;
  margin-bottom: 40px;
}
.title {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  color: #1e1e1e;
  margin-top: 35px;
  margin-bottom: 20px;
}
</style>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Login",
  components: {
    Nav,
  },
  methods: {
    btn_login() {
      console.log("press btn login");
      this.$http
        .post("/api/login", {
          ID: $("input[name=inputID]").val(),
          password: $("input[name=inputPassword]").val(),
        })
        .then((res) => {
          if (res.body.indexOf("success") != -1) {
            
            this.$store.commit("setUserInfo", $("input[name=inputID]").val());
              if (this.$store.state.userName != "") {
                console.log(this.$store.state.userName, "login");
                this.$router.push({
                  name: "home",
                });
              }
          } else {
            console.log(res.body);
            $("#login_output").html(res.body);
          }
        });
    },
    btn_reg() {
      console.log("press btn reg");
      this.$router.push({
        name: "Register",
      });
    },
  },
};
</script>