<template>
  <div class="desktop">
    <div id="namebar">
      <Nav showBackArrow="true" showText="true" navText="聯絡資料" />
    </div>
    <div class="title" id="title1">基本資料</div>
    <div class="text" id="text1">姓名</div>
    <div class="text" id="name">{{ this.name }}</div>
    <div class="text" id="text2">學號</div>
    <div class="text" id="num">{{ this.$store.state.userName }}</div>
    <div class="title" id="title2">聯絡資料填寫</div>
    <div class="textboxback" id="textbox1">
      <div class="textbox">
        <div id="email"></div>
        <input
          type="text"
          v-model="information.email"
          placeholder="請輸入常用電子信箱"
          id="emailtext"
        />
      </div>
    </div>
    <div class="textboxback" id="textbox2">
      <div class="textbox">
        <div id="phone"></div>
        <input
          type="text"
          v-model="information.phone"
          placeholder="請輸入手機號碼"
          id="phonetext"
        />
      </div>
    </div>
    <div class="textboxback" id="textbox3">
      <div class="textbox">
        <div id="address"></div>
        <input
          type="text"
          v-model="information.address"
          placeholder="請輸入聯絡地址"
          id="addresstext"
        />
      </div>
    </div>
    <div class="textboxback" id="textbox4">
      <div class="textbox">
        <div id="contact"></div>
        <input
          type="text"
          v-model="information.contact"
          placeholder="請輸入緊急聯繫人姓名"
          id="contacttext"
        />
      </div>
    </div>
    <div class="textboxback" id="textbox5">
      <div class="textbox">
        <div id="contactnum"></div>
        <input
          type="text"
          v-model="information.contactnum"
          placeholder="請輸入緊急聯繫人電話"
          id="contactnumtext"
        />
      </div>
    </div>
    <div class="nextstep" @click="tonext">下一步</div>
    <div class="nextstep" id="cancel" @click="tocancel">取消預約</div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Contactinformation",
  components: {
    Nav,
  },
  data() {
    return {
      user: '',
      name: '',
      information: {
        email: "",
        phone: "",
        address: "",
        contact: "",
        contactnum: "",
      },
    };
  },
  methods: {
    tonext() {
      this.$router.push({
        name: "Reservationsuccess",
      });
    },
    tocancel() {
      this.$router.push("/home");
    },
  },
  created() {
    this.$http
      .post("/api/GetUserInfo", {
        userID: this.$store.state.userName,
      })
      .then((res) => {
        this.user = res.body;
        this.name = this.user[0].name;
      });
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.desktop {
  position: absolute;
  display: block;
  width: 375px;
  height: 687px;
  overflow: hidden;
}
#namebar {
  width: 375px;
  height: 50px;
}
.title {
  position: absolute;
  width: 80px;
  height: 34px;
  left: 30px;
  top: 90px;
  font-family: Taipei Sans TC Beta;
  font-weight: bold;
  font-size: 20px;
  line-height: 34px;
  align-items: center;
  color: #5c5c5c;
}
#title2 {
  width: 119px;
  height: 20px;
  top: 218px;
  line-height: 20px;
  letter-spacing: -0.24px;
}
.text {
  position: absolute;
  width: 30px;
  height: 22px;
  left: 30px;
  top: 127px;
  font-family: PingFang TC;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #5c5c5c;
}
#text2 {
  top: 155px;
}
#name {
  width: 42px;
  left: 84px;
  top: 127px;
}
#num {
  width: 123px;
  left: 84px;
  top: 155px;
}
.textboxback {
  position: absolute;
  width: 313px;
  height: 42px;
  left: 30px;
  top: 251px;
  border-radius: 33px;
  background: linear-gradient(180deg, #96fbc4 33.15%, #20e2d7 127.81%);
}
.textbox {
  position: absolute;
  width: 311px;
  height: 40px;
  left: 1px;
  top: 1px;
  background: #ffffff;
  /*border-image-source: linear-gradient(180deg, #96FBC4 33.15%, #20E2D7 127.81%);*/
  border-radius: 33px;
}
#textbox2 {
  top: 308px;
}
#textbox3 {
  top: 365px;
}
#textbox4 {
  top: 422px;
}
#textbox5 {
  top: 479px;
}
#email {
  position: absolute;
  width: 17.7px;
  height: 13px;
  background-image: url("../assets/Tim/email.svg");
  background-repeat: no-repeat;
  background-size: 17.7px 13px;
  left: 20.01px;
  top: 13px;
}
#phone {
  position: absolute;
  width: 14px;
  height: 20px;
  background-image: url("../assets/Tim/phone.svg");
  background-repeat: no-repeat;
  background-size: 14px 20px;
  left: 20px;
  top: 9px;
}
#address {
  position: absolute;
  width: 15px;
  height: 15.41px;
  background-image: url("../assets/Tim/address.svg");
  background-repeat: no-repeat;
  background-size: 15px 15.41px;
  left: 19.5px;
  top: 11.09px;
}
#contact {
  position: absolute;
  width: 17.03px;
  height: 16.25px;
  background-image: url("../assets/Tim/contact.svg");
  background-repeat: no-repeat;
  background-size: 17.03px 16.25px;
  left: 18.48px;
  top: 10.56px;
}
#contactnum {
  position: absolute;
  width: 16.67px;
  height: 16.67px;
  background-image: url("../assets/Tim/contactnum.svg");
  background-repeat: no-repeat;
  background-size: 16.67px 16.67px;
  left: 18.67px;
  top: 10.67px;
}
#emailtext {
  position: absolute;
  width: 245px;
  height: 20px;
  left: 47px;
  top: 11px;
  font-family: Taipei Sans TC Beta;
  font-size: 15px;
  line-height: 20px;
  /*color: rgba(186, 186, 186, 0.66);*/
  border: 0;
}
#phonetext {
  position: absolute;
  width: 245px;
  height: 20px;
  left: 47px;
  top: 10px;
  font-family: Taipei Sans TC Beta;
  font-size: 15px;
  line-height: 20px;
  /*color: rgba(186, 186, 186, 0.66);*/
  border: 0;
}
#addresstext {
  position: absolute;
  width: 245px;
  height: 20px;
  left: 47px;
  top: 10px;
  font-family: Taipei Sans TC Beta;
  font-size: 15px;
  line-height: 20px;
  /*color: rgba(186, 186, 186, 0.66);*/
  border: 0;
}
#contacttext {
  position: absolute;
  width: 245px;
  height: 20px;
  left: 47px;
  top: 10px;
  font-family: Taipei Sans TC Beta;
  font-size: 15px;
  line-height: 20px;
  /*color: rgba(186, 186, 186, 0.66);*/
  border: 0;
}
#contactnumtext {
  position: absolute;
  width: 245px;
  height: 20px;
  left: 47px;
  top: 10px;
  font-family: Taipei Sans TC Beta;
  font-size: 15px;
  line-height: 20px;
  /*color: rgba(186, 186, 186, 0.66);*/
  border: 0;
}
input:focus {
  outline: none;
}
::placeholder {
  color: rgba(186, 186, 186, 0.66);
}
::-webkit-input-placeholder {
  color: rgba(186, 186, 186, 0.66);
}
:-ms-input-placeholder {
  color: rgba(186, 186, 186, 0.66);
}
::-moz-placeholder {
  color: rgba(186, 186, 186, 0.66);
  opacity: 1;
}
.nextstep {
  position: absolute;
  width: 313px;
  height: 43px;
  left: 30px;
  top: 560px;
  background: #20e2d7;
  box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
  border-radius: 33px;
  font-family: Taipei Sans TC Beta;
  font-size: 16px;
  line-height: 43px;
  text-align: center;
  color: #ffffff;
}
#cancel {
  background: #c7c7c7;
  box-shadow: 2px 2px 10px rgba(204, 204, 204, 0.75);
  top: 615px;
}
</style>