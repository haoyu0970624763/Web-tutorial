<template>
  <div>
    <div class="logobar">
      <b-container>
        <b-row>
          <b-col @click="goOff()">
            <img
              v-if="showBackArrow === 'true'"
              class="arrowiconimg"
              src="@/assets/svg/keyboard_arrow_left.svg"
            />
          </b-col>
          <b-col class="text-center">
            <div v-if="showText === 'true'" class="text">{{ navText }}</div>
            <div v-else>
              <img class="logoimg" src="@/assets/svg/logo.svg" />
            </div>
          </b-col>
          <b-col class="imgright">
            <div v-if="showRecord === 'true'">
              <img class="usericonimg" src="@/assets/svg/recored.svg" />
            </div>
            <div v-if="showUser === 'true'" @click="goProfile()">
              <img class="usericonimg" src="@/assets/svg/usericon.svg" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="emptybar"></div>
  </div>
</template>

<script>
export default {
  inject:['reload'],
  name: "Nav",
  data() {
    return {};
  },
  methods: {
    goOff() {
      if (this.destination == "0") {
        this.$router.go(-1);
      } else if (this.destination == "reload") {
        this.reload();
      } else {
        this.$router.push({ name: this.destination });
      }
    },
    goProfile() {
      this.$router.push("/profile");
    },
  },
  props: {
    //props讀取外部傳入的屬性。
    showText: String,
    showBackArrow: String,
    showRecord: String,
    showUser: String,
    navText: String,
    destination: {
      type: String,
      default: "0",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logobar {
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0px;
  margin: 0px auto;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(118, 156, 145, 0.25);
  /* 讓內容物垂直置中*/
  height: 50px;
  line-height: 50px;
}
.logoimg {
  height: 20px;
  width: auto;
}
.usericonimg {
  height: 28px;
  width: auto;
  padding-right: 12.5%;
}
.arrowiconimg {
  height: 24px;
  width: auto;
  padding-left: 12.5%;
}
.imgright {
  text-align: right;
}
.emptybar {
  height: 50px;
  background-color: #ffffff;
}
.text {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color: #20e2d7;
  white-space: nowrap; /* 強制不換行 */
  /* 不知道為甚麼一直沒辦法很完美的垂直置中(視覺上感覺會差一點點)只好先用這樣的方法...*/
  margin-top: 2px;
}
</style>
