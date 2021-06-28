<template>
  <div>
    <Nav showBackArrow="true" showText="true" navText="心情日記" />
    <div class="background">
      <div class="text">有什麼想法或煩惱就寫下來吧！</div>
      <router-link to="/diary/write">
        <img src="@/assets/svg/diary_main_btn_write.svg" />
      </router-link>
      <img src="@/assets/svg/diary_main_btn_history.svg" />
      <img id="img" src="@/assets/svg/diary_background.svg" />
    </div>
  </div>
</template>
<style scoped>
#img {
  padding-top: 30px;
}
.text {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #5c5c5c;
  /*位置*/
  text-align: center;
  padding-top: 10vh;
  padding-bottom: 2vh;
}
.background {
  height: 635px;
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
  name: "DiaryMain",
  components: {
    Nav,
  },
};
</script>
