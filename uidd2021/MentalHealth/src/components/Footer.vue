<template>
  <div>
    <div class="emptybar"></div>
    <div class="footerbar">
      <b-container>
        <b-row>
          <b-col class="text-center" @click="toHome()">
            <!--暫時link到空頁面-->

            <img v-if="showHome" class="iconimg" src="@/assets/svg/homeA.svg" />
            <img v-else class="iconimg" src="@/assets/svg/home.svg" />
            <div v-if="showHome" class="icontext iconActivetext">首頁</div>
            <div v-else class="icontext iconGraytext">首頁</div>
          </b-col>
          <b-col class="text-center" @click="toReserve()">
            <!--暫時link到空頁面-->
            <img
              v-if="showSchedule"
              class="iconimg"
              src="@/assets/svg/scheduleA.svg"
            />
            <img v-else class="iconimg" src="@/assets/svg/schedule.svg" />
            <div v-if="showSchedule" class="icontext iconActivetext">
              諮商預約
            </div>
            <div v-else class="icontext iconGraytext">諮商預約</div>
          </b-col>
          <b-col class="text-center" @click="toMood()">
            <img
              v-if="showMood"
              class="iconimg"
              src="@/assets/svg/moodA.svg"
            />
            <img v-else class="iconimg" src="@/assets/svg/mood.svg" />
            <div v-if="showMood" class="icontext iconActivetext">心情紀錄</div>
            <div v-else class="icontext iconGraytext">心情紀錄</div>
          </b-col>
          <b-col class="text-center" @click="toOthers()">
            <img
              v-if="showResouce"
              class="iconimg"
              src="@/assets/svg/resouceA.svg"
            />
            <img v-else class="iconimg" src="@/assets/svg/resouce.svg" />
            <div v-if="showResouce" class="icontext iconActivetext">
              其他資源
            </div>
            <div v-else class="icontext iconGraytext">其他資源</div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  props: {
    //props讀取外部傳入的屬性。
    showHome: String,
    showMood: String,
    showResouce: String,
    showSchedule: String,
  },
  methods: {
    toHome() {
      this.$router.push({
        name: "home",
      });
    },
    toReserve() {
      this.$router.push({
        name: "reserve",
      });
    },
    toMood() {
      this.$router.push({
        name: "MoodTree",
      });
    },
    toOthers() {
      this.$router.push({
        name: "Otherresource",
      });
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footerbar {
  position: fixed;
  height: 49px;
  width: 100%;
  bottom: 0px;
  margin: 0px auto;
  background: #ffffff;
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
}

.iconimg {
  height: 22px;
  width: auto;

  /* icon圖片位置 */
  margin-top: 6.8%;
  margin-bottom: 2.33%;
}
.icontext {
  font-family: PingFang TC;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #c7c7c7;
}
.iconGraytext {
  color: #c7c7c7;
}
.iconActivetext {
  /* 漸層 */
  background: linear-gradient(
    180deg,
    #f9fea5 -214.29%,
    #96fbc4 -47.3%,
    #20e2d7 126.79%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.emptybar {
  height: 49px;
  background-color: #ffffff;
}

a {
  text-decoration: none;
}
</style>