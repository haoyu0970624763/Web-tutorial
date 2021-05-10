<template>
  <div class="reservation-container">
    <div class="navbar">
      <div class="vector">
        <a href="/profile"> <img src="@/assets/pic/Vector2.png" /> </a>
      </div>
      <div class="navText">預約紀錄</div>
    </div>
    <div class="functionList">
      <div class="region" id="left" @click.stop="setFlagLeft">
        <div
          v-bind:class="{ 'region-white': leftFlag, 'region-green': rightFlag }"
        >
          <p v-bind:class="{ 'word-white': rightFlag, 'word-green': leftFlag }">
            即將到來
          </p>
        </div>
      </div>
      <div class="region" id="right" @click.stop="setFlagRight">
        <div
          v-bind:class="{ 'region-white': rightFlag, 'region-green': leftFlag }"
        >
          <p v-bind:class="{ 'word-white': leftFlag, 'word-green': rightFlag }">
            過去預約
          </p>
        </div>
      </div>
      <div class="coming">
        <p id="topic">諮商前注意事項</p>
        <p id="text">
          1. 請務必準時抵達心輔室，如欲取消最晚請在前一天取消，否則不受理。
        </p>
        <p id="text2">2.前來諮商無需準備任何東西，保持平常心即可！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",

  data() {
    return {
      userName: "彭皓瑜",
      userDepartmentLevel: "資訊系 大三",
      leftFlag: 1,
      rightFlag: 0,

      classObject: {
        active: true,
        "text-danger": false,
      },
      formLogin: {
        userName: "",
        userPassword: "",
      },
      formRegister: {
        userName: "",
        userPassword: "",
        userPassword2: "",
      },
      // 显示不同的view
      typeView: 0,
      errorMeg: "",
    };
  },
  methods: {
    goback_home: function () {
      this.$router.push("/profile");
    },
    setFlagLeft: function () {
      this.leftFlag = 1;
      this.rightFlag = 0;
    },
    setFlagRight: function () {
      this.leftFlag = 0;
      this.rightFlag = 1;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@font-face {
  font-family: "Taipei Sans TC Beta";
  src: url("../assets/font/TaipeiSansTCBeta.ttf");
}
.reservation-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  .navbar {
    position: absolute;
    width: 375px;
    height: 50px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    box-shadow: 2px 2px 15px rgba(118, 156, 145, 0.25);

    .vector {
      position: absolute;
      left: 10%;
      top: 26.74%;
      bottom: 26.7%;
    }
    .navText {
      position: absolute;
      width: 80px;
      height: 34px;
      left: 140px;
      top: 8px;

      font-family: Taipei Sans TC Beta;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 34px;
      /* identical to box height, or 170% */
      display: flex;
      align-items: center;

      /* 漸層2_藍綠 */
      color: #20e2d7;
    }
  }
  .functionList {
    position: absolute;
    width: 375px;
    height: 65px;
    left: 0px;
    top: 50px;

    background: linear-gradient(
      180deg,
      #f9fea5 -214.29%,
      #96fbc4 -47.3%,
      #20e2d7 126.79%
    );
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

    #left {
      position: absolute;
      left: calc(50% - 151px / 2 - 88px);
    }
    #right {
      position: absolute;
      left: calc(50% - 151px / 2 + 88px);
    }
    .region-white {
      position: absolute;
      width: 151px;
      height: 38px;
      top: 13px;
      background: #ffffff;
      border-radius: 10px;
    }
    .region-green {
      position: absolute;
      width: 151px;
      height: 38px;
      top: 13px;
      background: linear-gradient(
        180deg,
        #f9fea5 -214.29%,
        #96fbc4 -47.3%,
        #20e2d7 126.79%
      );
      border-radius: 10px;
    }
    .word-green {
      position: absolute;
      left: 32.5px;
      top: 5px;
      font-family: Taipei Sans TC Beta;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      background: linear-gradient(
        180deg,
        #f9fea5 -214.29%,
        #96fbc4 -47.3%,
        #20e2d7 126.79%
      );
      background: -webkit-linear-gradient(
        180deg,
        #f9fea5 -214.29%,
        #96fbc4 -47.3%,
        #20e2d7 126.79%
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;

      display: flex;
      align-items: center;
      text-align: center;
    }
    .word-white {
      position: absolute;
      left: 32.5px;
      top: 5px;
      font-family: Taipei Sans TC Beta;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      display: flex;
      align-items: center;
      text-align: center;
      color: white;
    }
    .coming {
      p {
        font-family: Taipei Sans TC Beta;
        font-style: normal;
        font-weight: normal;
        display: flex;
        align-items: center;
      }
      #topic {
        position: absolute;
        width: 123px;
        height: 21px;
        left: 25px;
        top: 115px;

        font-size: 16px;
        line-height: 21px;
        /* 深灰 */
        color: #5c5c5c;
      }
      #text {
        position: absolute;
        width: 326px;
        height: 30px;
        left: 24px;
        top: 150px;

        font-size: 13px;
        line-height: 18px;

        color: #9e9e9e;
      }
      #text2 {
        position: absolute;
        width: 326px;
        height: 30px;
        left: 24px;
        top: 185px;

        font-size: 13px;
        line-height: 18px;

        color: #9e9e9e;
      }
    }
  }
}
</style>