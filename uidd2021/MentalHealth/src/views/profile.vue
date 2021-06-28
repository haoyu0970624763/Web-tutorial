<template>
  <div class="profile-container">
    <div class="navbar">
      <div class="vector" @click="goBack()">
         <img src="@/assets/pic/Vector2.png" />
      </div>
      <div class="navText">我的檔案</div>

      <div class="profile-region">
        <div class="profile_pic">
          <img src="@/assets/pic/Ellipse43.png" />
        </div>
        <div class="name">{{ this.name }}</div>
        <div class="id">學號：{{ this.id }}</div>
      </div>
      <div class="function" id="first" @click="goto_reservationRecord()">
        <div class="pic">
          <img src="@/assets/pic/record.png" />
        </div>
        <div class="functionWord">預約紀錄</div>
      </div>
      <div class="function" id="second">
        <div class="pic">
          <img src="@/assets/pic/position.png" />
        </div>
        <div class="functionWord">心輔室位置圖</div>
      </div>
    </div>
    <Footer showHome="true" />
  </div>
</template>

<script>
export default {
  name: "profile",

  data() {
    return {
      user: '',
      name:'',
      id:''
    };
  },
  methods: {
    goto_reservationRecord() {
      this.$router.push({
        name: "reservation",
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.$http
      .post("/api/GetUserInfo", {
        userID: this.$store.state.userName,
      })
      .then((res) => {
        this.user = res.body[0];
        this.name = this.user.name;
        this.id = this.user.id;
      });
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
    .id {
      position: absolute;
      width: 150px;
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
      flex-direction: row;
      align-items: center;
      /* 白 */
      color: #ffffff;

      opacity: 0.8;
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
      left: 30px;
      top: 15px;
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
