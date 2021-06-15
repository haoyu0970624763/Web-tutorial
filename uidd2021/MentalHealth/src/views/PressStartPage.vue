<template>
  <div>
    <Nav showBackArrow="ture" showText="true" navText="壓力評估量表" />
    <div class="background">
      <img style="padding-top: 90px" src="@/assets/yoyoLin/press_img.svg" />
      <div class="text">
        本量表所列舉的問題是為協助您瞭解您的身心適應狀況，請您仔細回想在最近一星期中(包括今天)，這些問題使您感到困擾或苦惱的程度，然後圈選一個您認為最能代表您感覺的答案。
      </div>
      <router-link to="/Press2">
        <img
          style="padding-top: 30px"
          src="@/assets/yoyoLin/press_btn_start.svg"
        />
      </router-link>
      <img
        style="padding-top: 5px"
        src="@/assets/yoyoLin/press_btn_history.svg"
      />
    </div>
  </div>
</template>
<style scoped>
.text {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #828282;

  /*位置*/
  text-align: center;
  padding-top: 20px;
  padding-left: 13%;
  padding-right: 13%;
}
.background {
  height: 92.75vh;
  background: linear-gradient(
    180deg,
    #ffffff 42.2%,
    #9ffbdf 203.98%,
    #40e9d2 270.1%
  );
  text-align: center;
  overflow: hidden;
}
</style>
<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "Press",
  components: {
    Nav,
  },
};
</script>