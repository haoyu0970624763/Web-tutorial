<template>
  <div>
    <Nav showBackArrow="true" showText="true" navText="使用說明" />
    <div class="title">歡迎使用心靈成長樹!<br />這裡是一些相關規則說明</div>
    <div class="box">
      <div class="title2">什麼是心情成長樹？</div>
      <div class="line">______________________________</div>
      <div class="content">
        為了幫助大家在日常生活中，也能夠紀錄心情起伏的事件，並且透過簡單的分段填寫，達到沈澱，以及了解自己深處想法的目的。
        簡單來說，就是一棵陪你一起成長的樹！
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="box">
      <div class="title2">如何讓葉子長出來？</div>
      <div class="line">______________________________</div>
      <div class="content">
        每次填寫一篇日記，就能解鎖澆水按鈕，澆完水，就可以看到當天的葉子長出來，不過一天只能長一片葉子喔！
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="box">
      <div class="title2">連續澆水成功多天會有訪客到來！</div>
      <div class="line">______________________________</div>
      <div class="content">
        成功澆水、滋養數木多天，就會有可愛的動物訪客造訪，你可以選擇留下他，或者請他下次再來。
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="box">
      <div class="title2">如何獲得點數？</div>
      <div class="line">______________________________</div>
      <div class="content">
        使用世界樹洞功能，拍拍、回覆、將心情日記發佈到世界樹洞，每天各可以獲得一點，也就是說，每天最多獲得三點。
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="box">
      <div class="title2">選擇造型</div>
      <div class="line">______________________________</div>
      <div class="content">
        在 兌換樹種 頁面，可以用獲得的點數兌換想要的樹種。
        <div style="font-weight: bold">
          注意：請在每個月第一次澆水前選擇使用想要的樹種，只要開始長出葉子就不可更換囉！
        </div>
      </div>
    </div>
    <Footer showMood="true" />
  </div>
</template>
<style scoped>
.content {
  /* 內文3 */

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */

  /* 深灰 */

  color: #5c5c5c;
}
.line {
  color: rgba(150, 251, 196, 1);
  font-weight: bold;
  font-size: 16px;
  margin-top: -10px;
  margin-bottom: 10px;
}
.title2 {
  /* 內文2 */

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  /* 深灰 */

  color: #5c5c5c;
}
.box {
  height: auto;
  width: 327px;
  left: 24px;
  top: 224px;
  border-radius: 14px;

  background: #ffffff;
  /* 漸層_綠 */

  border: 2px solid #96fbc4;
  box-sizing: border-box;
  border-radius: 14px;
  margin: 0 auto;
  padding: 20px;
}
.title {
  /* 歡迎使用心靈成長樹！ 這裡是一些相關規則說明 */

  text-align: center;
  padding: 20px;

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  margin: 0 auto;

  /* 深灰 */

  color: #5c5c5c;
}
</style>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "MoodQA",
  components: {
    Nav,
    Footer,
  },
};
</script>