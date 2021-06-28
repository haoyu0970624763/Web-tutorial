<template>
  <div>
    <Nav showText="true" navText="心情成長樹" showUser="true" />
    <div class="btn_switch_box">
      <b-container>
        <b-row>
          <b-col class="text-center">
            <div v-if="choose_mood" class="choose_btn">
              <div class="text">我的心情樹</div>
            </div>
            <div v-else @click="btn_switching" class="not_choose">
              我的心情樹
            </div>
          </b-col>
          <b-col class="text-center">
            <div v-if="!choose_mood" class="choose_btn">
              <div class="text">世界樹洞</div>
            </div>
            <div v-else @click="btn_switching" class="not_choose">世界樹洞</div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <PlantTree v-if="choose_mood" />
    <Worldhollow v-if="!choose_mood" />
    <Footer showMood="true" />
  </div>
</template>
<style scoped>
.not_choose {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}
.choose_btn {
  width: 151px;
  height: 38px;
  background: #ffffff;
  border-radius: 10px;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  vertical-align: center;
  display: inline-block;
}
.choose_btn .text {
  background: linear-gradient(
    180deg,
    #f9fea5 -214.29%,
    #96fbc4 -47.3%,
    #20e2d7 126.79%
  );
  background: -webkit-linear-gradient(to top, #3a1c71, #d76d77, #ffaf7b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.btn_switch_box {
  width: 375px;
  height: 60px;
  line-height: 60px;
  margin: 0px auto;
  /* icon 字 */
  background: linear-gradient(
    180deg,
    #f9fea5 -214.29%,
    #96fbc4 -47.3%,
    #20e2d7 126.79%
  );
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
}
</style>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import PlantTree from "@/views/PlantTree.vue";
import Worldhollow from "@/views/Worldhollow.vue";
export default {
  name: "MoodTree",
  data() {
    return {
      choose_mood: true,
    };
  },
  components: {
    Nav,
    Footer,
    PlantTree,
    Worldhollow,
  },
  methods: {
    btn_switching() {
      this.choose_mood = !this.choose_mood;
    },
  },
};
</script>