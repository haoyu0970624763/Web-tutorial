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
      <div class="coming" v-if="leftFlag===1">
        <p id="topic">諮商前注意事項</p>
        <p id="text">
          1. 請務必準時抵達心輔室，如欲取消最晚請在前一天取消，否則不受理。
        </p>
        <p id="text2">2.前來諮商無需準備任何東西，保持平常心即可！</p>
      </div>
    </div>
    <div class="recordcontainer" :class="{recordpastcontainer : rightFlag}">
      <div class="record" v-for="recorditem in reservationrecord" :class="{recordpast : rightFlag}">
        <div id="datetitle">諮商日期</div>
        <div id="date">{{ recorditem.reservationyear }}/{{ recorditem.reservationmonth }}/{{ recorditem.reservationday }}</div>
        <div id="timetitle">諮商時間</div>
        <div id="time">{{ recorditem.reservationtime }}</div> 
        <div id="splitline"></div>
        <div id="nametitle">欲諮商的心理師</div>
        <div id="name">{{ recorditem.expertname }}心理師</div>
        <div id="statetitle">諮商狀態</div>
        <div id="st">{{ recorditem.state }}</div>
        <div id="cancel" v-if="rightFlag===0" @click="cancelreservation"></div>
        <div id="canceltext" v-if="rightFlag===0" @click="cancelreservation">取消預約</div>
        <div class="describecontent" :class="{describecontentbig : rightFlag}"></div>
        <div class="contenttext" :class="{contenttextbig : rightFlag}">詳細內容</div>     
      </div>
    </div>
    <Footer showRecord="true" />
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
      reservationrecord:[],
      // 显示不同的view
      typeView: 0,
      errorMeg: "",
      isCancel: false,
    };
  },
  methods: {
    goback_home: function () {
      this.$router.go(-1);
    },
    setFlagLeft: function () {
      this.leftFlag = 1;
      this.rightFlag = 0;
      this.getrecord();
    },
    setFlagRight: function () {
      this.leftFlag = 0;
      this.rightFlag = 1;
      this.getpastrecord();
    },
    getrecord() {
      var y, m, d;
      [m,d] = this.$route.params.date.split('/');
      m = "0" + m;
      var time = this.$route.params.time;
      var name = this.$route.params.name;
      this.reservationrecord = [];
      this.reservationrecord.push({
          reservationyear: "2021",
          reservationmonth: m,
          reservationday: d,
          reservationtime: time,
          expertname: name,
          state: "預約成立",
        }
      );
    },
    getpastrecord() {
      var y, m, d;
      [m,d] = this.$route.params.date.split('/');
      m = "0" + m;
      var time = this.$route.params.time;
      var name = this.$route.params.name;
      this.reservationrecord = [];
      if(this.isCancel)
      {
        this.reservationrecord.push({
            reservationyear: "2021",
            reservationmonth: m,
            reservationday: d,
            reservationtime: time,
            expertname: name,
            state: "結案",
          }
        );
      }     
    },
    cancelreservation() {
      this.reservationrecord = [];
      this.isCancel = true;
    }
  },
  created() {
    this.getrecord();
  }
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
    z-index: 1;
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
  .recordcontainer {
    position: absolute;
    width: 375px;
    height: 422px;
    top: 265px;
    overflow: scroll;
    .record {
      position: relative;
      width: 327px;
      height: 148px;
      margin-top: 23px;
      margin-left: 24px;
      box-shadow: 1px 4px 8px rgba(101, 101, 101, 0.14);
      border-radius: 10px;
      overflow: hidden;
      #datetitle {
        position: absolute;
        width: 52px;
        height: 18px;
        left: 24px;
        top: 12px;
        font-family: Taipei Sans TC Beta;
        font-size: 13px;
        line-height: 18px;
        align-items: center;
        color: #20E2D7;
      }
      #date {
        position: absolute;
        width: 67px;
        height: 17px;
        left: 80px;
        top: 12px;
        font-family: SF Compact Display;
        font-size: 14px;
        line-height: 17px;
        align-items: center;
        letter-spacing: -0.24px;
        color: #4F4F4F;
      }
      #timetitle {
        position: absolute;
        width: 52px;
        height: 18px;
        left: 176px;
        top: 11px;
        font-family: Taipei Sans TC Beta;
        font-size: 13px;
        line-height: 18px;
        align-items: center;
        color: #20E2D7;
      }
      #time {
        position: absolute;
        width: 74px;
        height: 17px;
        left: 233px;
        top: 12px;
        font-family: SF Compact Display;
        font-size: 14px;
        line-height: 17px;
        align-items: center;
        letter-spacing: -0.24px;
        color: #4F4F4F;
      }
      #splitline {
        position: absolute;
        width: 327px;
        height: 0px;
        left: 0px;
        top: 36px;
        border: 1px solid #E6E6E6;
      }
      #nametitle {
        position: absolute;
        width: 91px;
        height: 18px;
        left: 24px;
        top: 49px;
        font-family: Taipei Sans TC Beta;
        font-size: 13px;
        line-height: 18px;
        align-items: center;
        color: #BDBDBD;
      }
      #name {
        position: absolute;
        width: 90px;
        height: 20px;
        left: 24px;
        top: 71px;
        font-family: Taipei Sans TC Beta;
        font-size: 15px;
        line-height: 20px;
        align-items: center;
        color: #4F4F4F;
      }
      #statetitle {
        position: absolute;
        width: 52px;
        height: 18px;
        left: 176px;
        top: 49px;
        font-family: Taipei Sans TC Beta;
        font-size: 13px;
        line-height: 18px;
        align-items: center;
        color: #BDBDBD;
      }
      #st {
        position: absolute;
        width: 60px;
        height: 20px;
        left: 176px;
        top: 71px;
        font-family: Taipei Sans TC Beta;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        align-items: center;
        color: #20E2D7;
      }
      .describecontent {
        position: absolute;
        width: 164px;
        height: 43px;
        left: 0px;
        top: 105px;
        background: linear-gradient(180deg, #20E2D7 -40.7%, #96FBC4 209.22%, #F9FEA5 469.77%);
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        border-radius: 10px 0px 0px 0px;
        
        transform: matrix(1, 0, 0, -1, 0, 0);
      }
      .contenttext {
        position: absolute;
        width: 64px;
        height: 22px;
        left: 50px;
        top: 116px;
        font-family: PingFang HK;
        font-size: 16px;
        line-height: 22px;
        align-items: center;
        letter-spacing: -0.24px;
        color: #FFFFFF;
      }
      .describecontentbig {
        width: 327px;
      }
      .contenttextbig {
        left: 137px;
      }
      #cancel {
        position: absolute;
        width: 164px;
        height: 43px;
        left: 164px;
        top: 105px;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        border-radius: 10px 0px 0px 0px;
        transform: rotate(-180deg);
               
        
      }
      #canceltext {
        position: absolute;
        top: 116px;
        left: 213px;
        width: 64px;
        height: 22px;
        font-family: PingFang HK;
        font-size: 16px;
        line-height: 22px;
        align-items: center;
        letter-spacing: -0.24px;
        color: #20E2D7;
      }
    }
    .recordpast {
      margin-top: 31px;
    }
  }
  .recordcontainer::-webkit-scrollbar {
    display: none;
  }
  .recordpastcontainer{
    position: absolute;
    width: 375px;
    height: 566px;
    top: 121px;
  }
}
</style>