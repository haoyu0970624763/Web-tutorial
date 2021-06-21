<template>
  <div class="outer">
    <div class="box">
      <b-container>
        <b-row style="padding-top: 10px">
          <b-col style="text-align: center">
            <img
              @click="lastmonth"
              ref="Larrow"
              src="@/yo_0613/tree_arrow.svg"
            />
          </b-col>
          <b-col cols="6" style="text-align: center">
            <div class="choose_month">{{ month }}月/ 2021</div>
          </b-col>
          <b-col style="text-align: center">
            <img
              @click="nextmonth"
              ref="Rarrow"
              class="disable_arrow"
              src="@/yo_0613/tree_arrow_right.svg"
            />
          </b-col>
        </b-row>
      </b-container>

      <!--樹的樣子-->
      <JuneTree v-if="month == 6" />
      <MayTree v-if="month == 5" />
    </div>
    <div style="padding: 12px; margin-top: 3px">
      <b-container>
        <b-row>
          <b-col style="padding: 0px; text-align: center">
            <img src="@/yo_0613/tree_history.svg" />
            <div class="btn_text">歷史紀錄</div>
          </b-col>
          <b-col style="padding: 0px; text-align: center">
            <img src="@/yo_0613/tree_exchange.svg" />
            <div class="btn_text">兌換樹種</div>
          </b-col>
          <b-col style="padding: 0px; text-align: center">
            <router-link to="/diary/write">
              <img src="@/yo_0613/tree_add.svg" />
              <div class="btn_text">新增日記</div>
            </router-link>
          </b-col>
          <b-col style="padding: 0px; text-align: center">
            <img :class="isWaterClass" src="@/yo_0613/tree_water.svg" />
            <div class="btn_text">給樹澆水</div>
          </b-col>
          <b-col style="padding: 0px; text-align: center">
            <img src="@/yo_0613/tree_Q.svg" />
            <div class="btn_text">使用說明</div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import JuneTree from "@/views/JuneTree.vue";
import MayTree from "@/views/MayTree.vue";

export default {
  components: { JuneTree, MayTree },
  name: "PlantTree",
  data() {
    return {
      month: 6,
      isWaterClass: "iswater",
    };
  },
  methods: {
    lastmonth: function () {
      this.$refs.Larrow.classList.add("disable_arrow");
      this.$refs.Rarrow.classList.remove("disable_arrow");
      this.month = 5;
      this.isWaterClass = "nowater";
    },
    nextmonth: function () {
      this.$refs.Rarrow.classList.add("disable_arrow");
      this.$refs.Larrow.classList.remove("disable_arrow");
      this.month = 6;
      this.isWaterClass = "iswater";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iswater {
  opacity: 1;
}
.nowater {
  opacity: 0.3;
}
.disable_arrow {
  opacity: 0.2;
}
.choose_month {
  width: 117px;
  height: auto;

  border: 2px solid #fce2d5;
  box-sizing: border-box;
  border-radius: 52px;
  display: inline-block;

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  vertical-align: center;

  text-align: center;

  /* 深灰 */

  color: #5c5c5c;
}
.btn_text {
  margin-top: 5px;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  /* 深灰 */

  color: #5c5c5c;
}
.outer {
  width: 375px;
  height: auto;
  padding-top: 15px;
}
.box {
  width: 327px;
  height: 418px;

  background: #ffffff;
  /* 樹 卡片式 */

  box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  margin: 0 auto;
}
</style>