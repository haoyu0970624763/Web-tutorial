<template>
  <div class="profile-container">
    <div class="navbar">
      <div class="vector">
        <a href="/homepage"> <img src="@/assets/pic/Vector2.png" /> </a>
      </div>
      <div class="navText">我的檔案</div>

      <div class="profile-region">
        <div class="profile_pic">
          <img src="@/assets/pic/Ellipse43.png" />
        </div>
        <div class="name">{{ userName }}</div>
        <div class="DepartmentLevel">{{ userDepartmentLevel }}</div>
        <div class="vectorRegion">
          <img class="vector" src="@/assets/pic/Vector1.png" />
        </div>
      </div>
      <div class="function" id="first">
        <div class="pic">
          <img src="@/assets/pic/record.png" @click="goto_reservationRecord"/>
        </div>
        <div class="functionWord" @click="goto_reservationRecord">預約紀錄</div>
      </div>
      <div class="function" id="second">
        <div class="pic">
          <img src="@/assets/pic/position.png" />
        </div>
        <div class="functionWord">心輔室位置圖</div>
      </div>
      <div class="function" id="third">
        <div class="pic">
          <img src="@/assets/pic/question.png" />
        </div>
        <div class="functionWord">常見問題</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",

  data() {
    return{
      userName: "彭皓瑜",
      userDepartmentLevel: "資訊系 大三",
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
    goback_home() {
      this.$router.push("/Homepage");
    },
    goto_reservationRecord() {
      this.$router.push("/reservation");
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@font-face {
  font-family: "Taipei Sans TC Beta";
  src: url("../assets/font/TaipeiSansTCBeta.ttf");
}
.profile-container {
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

  .profile-region {
    position: absolute;
    width: 375px;
    height: 111px;
    left: 0px;
    top: 50px;
    background: linear-gradient(
      180deg,
      #f9fea5 -214.29%,
      #96fbc4 -47.3%,
      #20e2d7 126.79%
    );
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

    .profile_pic {
      position: absolute;
      width: 69px;
      height: 69px;
      img {
        max-width: 69px;
        max-width: 69px;
      }
      top: 21px;
      left: 31px;
      filter: drop-shadow(2px 2px 10px rgba(80, 156, 138, 0.71));
    }
    .name {
      position: absolute;
      width: 60px;
      height: 34px;
      left: 119px;
      top: 23px;

      font-family: Taipei Sans TC Beta;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 34px;

      display: flex;
      align-items: center;
      color: #ffffff;
    }
    .DepartmentLevel {
      position: absolute;
      width: 84px;
      height: 21px;
      left: 119px;
      top: 60px;
      /* 內文2 */
      font-family: Taipei Sans TC Beta;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      /* identical to box height, or 131% */
      display: flex;
      align-items: center;
      /* 白 */
      color: #ffffff;

      opacity: 0.8;
    }
    .vectorRegion {
      position: absolute;
      width: 28px;
      height: 28px;
      right: 27px;
      top: 43px;

      background: #ffffff;
      box-shadow: 2px 2px 10px #45c9c1;
      border-radius: 20px;
    }
    .vector {
      position: absolute;
      left: 10px;
    }
  }
  #first {
    position: absolute;
    top: 160px;
  }
  #second {
    position: absolute;
    top: 228px;
  }
  #third {
    position: absolute;
    top: 296px;
  }
  .function {
    position: absolute;
    width: 375px;
    height: 67px;
    left: 0px;
    border-top: 1px;
    border-bottom: 1px;
    background-color: #ffffff;

    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    .pic {
      position: absolute;
      height: 24px;
      width: 19px;
      left: 34.6px;
      top: 20px;
      border-radius: 0px;
    }
    .functionWord {
      position: absolute;
      width: 108px;
      height: 22px;
      left: 72px;
      top: 22px;
      /* 內文1 */
      font-family: Taipei Sans TC Beta;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height, or 122% */
      display: flex;
      align-items: center;

      /* 深灰 */
      color: #5c5c5c;
    }
  }
}
</style>
