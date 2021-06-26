<template>
  <div>
    <div class="logobar">
      <b-container>
        <b-row>
          <b-col class="text-center">
            <img class="logoimg" src="@/assets/svg/logo.svg" />
          </b-col>
        </b-row>
        <b-col class="imgright">
          <img @click="toProfile()" class="usericonimg" src="@/assets/svg/usericon.svg" />
        </b-col>
      </b-container>
    </div>
    <div class="emptybar"></div>
    <div class="banner">
      <img id="slide1" src="@/assets/yoyoLin/home_slide1.svg" />
      <img id="slide2" src="@/assets/yoyoLin/home_slide2.svg" />
    </div>
    <div class="title">哈囉，歡迎來到Aura！</div>
    <div class="text_nofade">
      還不知道從哪裡開始使用嗎？可以先用1分鐘的評估測驗來檢測你現在的壓力與情緒狀態，並進一步了解Aura能幫助你什麼與你現在適合使用怎樣的資源。
    </div>
    <button @click="pressTab">
      立即檢測
      <img id="arrow" src="@/assets/yoyoLin/whiteArrow.svg" />
    </button>
    <div class="title">關於AURA</div>
    <div class="text_nofade">
      Aura是一個能滿足校園心理健康需求的線上平台，讓學生們能更便利地預約到適合的諮商服務，並提供其他舒壓管道來幫助學生更了解自我情緒與抒發。
    </div>

    <!--滑動區塊1-->
    <div
      style="height: 250px; width: 375px; position: relative; overflow: hidden"
    >
      <div class="circle" id="c1" ref="c1"></div>
      <div id="c1_img" ref="c1_img">
        <img src="@/assets/svg/home_c1_img.svg" />
      </div>
    </div>
    <div class="title2" ref="c1_title">更人性化的預約體驗</div>
    <div class="text" ref="c1_text">
      Aura 解決目前學生在使用諮商預約系統的痛點，提供匹配機制為使用者媒合理想的心理師條件，同時也優化心理師與諮商時間的預約介面，並提供預約記錄讓使用者們更方便地掌握預約狀態。
    </div>

    <!--滑動區塊2-->
    <div
      style="height: 250px; width: 375px; position: relative; overflow: hidden"
    >
      <div class="circle" id="c2" ref="c2"></div>
      <div id="c2_img" ref="c2_img">
        <img src="@/assets/svg/home_c2_img.svg" />
      </div>
    </div>
    <div class="title2" ref="c2_title">促進自我情緒與壓力的了解</div>
    <div  class="text" ref="c2_text">
     Aura 提供心情記錄功能，讓使用者能透過日記的方式覺察日常情緒波動，同時，使用者也能將日記發布到公共平台，以獲取建議或討論。此外，Aura 也建立了有趣的樹苗養成，鼓勵使用者定期的紀錄與回顧。
    </div>

    <!--滑動區塊3-->
    <div
      style="height: 250px; width: 375px; position: relative; overflow: hidden"
    >
      <div class="circle" id="c3" ref="c3"></div>
      <div id="c3_img" ref="c3_img">
        <img src="@/assets/svg/home_c3_img.svg" />
      </div>
    </div>
    <div class="title2" ref="c3_title">整合其他求助與舒壓資源</div>
    <div class="text" ref="c3_text">
      Aura也整合了其他心理輔導與舒壓資源，讓無法即時諮商或想自我調節情緒的使用者有其他方式可循，以紓緩校園諮商的需求量並增進使用者對於自我舒壓的知識。
    </div>

    <div class="bottom">
      地址：701台南市東區大學路1號光復校區雲平大樓東棟3樓<br />
      電話：(06)2757575分機50320。傳真：(06)2766421<br />
      2021 AURA | 版權所有 <br />
    </div>

    <Footer showHome="true" />
  </div>
</template>
<style scoped>
button {
  position: relative;

  height: 43px;
  width: 284px;
  left: 46px;

  background: linear-gradient(
    180deg,
    #f9fea5 -214.29%,
    #96fbc4 -47.3%,
    #20e2d7 126.79%
  );
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 33px;
  border: none;

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;

  text-align: center;

  color: #ffffff;
  margin-top: 15px;

  display: inline-block;
}
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
  top: -50px;
  position: relative;
  height: 28px;
  width: auto;
  padding-right: 12.5px;
}
.imgright {
  text-align: right;
}
.emptybar {
  height: 50px;
  background-color: #ffffff;
}

#slide1 {
  position: absolute;
  /* animation 參數設定 */
  animation-name: slidemove_1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 7s; /*動畫持續時間，單位為秒*/
  animation-delay: 0s; /*動畫延遲開始時間*/
  animation-iteration-count: infinite; /*動畫次數，infinite 為無限次*/
}
#slide2 {
  position: absolute;
  right: -375px;
  /* animation 參數設定 */
  animation-name: slidemove_2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 7s; /*動畫持續時間，單位為秒*/
  animation-delay: 0s; /*動畫延遲開始時間*/
  animation-iteration-count: infinite; /*動畫次數，infinite 為無限次*/
}

#arrow {
  position: relative;
  bottom: 5px;
}


@keyframes slidemove_1 {
  /* 中間 */
  0% {
    transform: translateX(0px);
  }
  40% {
    transform: translateX(0px);
  }

  /* out */
  40% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-375px);
    opacity: 1;
  }

  /* 等待slide2 */
  51% {
    transform: translateX(-375px);
    opacity: 0;
  }
  52% {
    transform: translateX(375px);
    opacity: 0;
  }
  53% {
    transform: translateX(375px);
    opacity: 1;
  }

  /* in */
  90% {
    transform: translateX(375px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes slidemove_2 {
  /* 等待 */
  0% {
    transform: translateX(0px);
    opacity: 0;
  }
  40% {
    transform: translateX(0px);
    opacity: 1;
  }

  /* in */
  40% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-375px);
    opacity: 1;
  }

  /* 中間 */
  50% {
    transform: translateX(-375px);
    opacity: 1;
  }
  90% {
    transform: translateX(-375px);
    opacity: 1;
  }

  /* out */

  100% {
    transform: translateX(-750px);
    opacity: 0;
  }
}
.bottom {
  margin-top: 60px;
  padding-top: 16px;
  width: auto;
  height: 90px;
  /* 內文5 */

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  text-align: center;

  color: #ffffff;

  /* 黑 */

  background: #1e1e1e;
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
}
#c1 {
  position: absolute;
  left: -168px;
  top: 50px;
}
#c1_img {
  position: absolute;
  right: -188px;
  top: 80px;
}
#c2 {
  position: absolute;
  right: -168px;
  top: 50px;
}
#c2_img {
  position: absolute;
  left: -188px;
  top: 80px;
}
#c3 {
  position: absolute;
  left: -168px;
  top: 50px;
}
#c3_img {
  position: absolute;
  right: -188px;
  top: 80px;
}
.circle {
  height: 168px;
  width: 168px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(150, 251, 196, 0.7) 33.15%,
    rgba(32, 226, 215, 0.7) 127.81%
  );
}
.leftin {
  /* animation 參數設定 */
  animation-name: leftin; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
}
@keyframes leftin {
  0% {
    opacity: 0;
    transform: translateX(0px);
  }
  50% {
    opacity: 1;
    transform: translateX(250px);
  }
  100% {
    opacity: 1;
    transform: translateX(250px);
  }
}
.rightin {
  /* animation 參數設定 */
  animation-name: rightin; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
}
@keyframes rightin {
  0% {
    opacity: 0;
    transform: translateX(0px);
  }
  50% {
    opacity: 1;
    transform: translateX(-250px);
  }
  100% {
    opacity: 1;
    transform: translateX(-250px);
  }
}
.text_fadein {
  /* animation 參數設定 */
  animation-name: text_fadein; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
}
@keyframes text_fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.title2 {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;

  text-align: center;

  color: #4f4f4f;
  opacity: 0;
}
.text {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  text-align: left;
  margin-top: 15px;
  padding-left: 8vw;
  padding-right: 8vw;

  /* 深灰 */

  color: #5c5c5c;
  opacity: 0;
}
.text_nofade {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  text-align: left;
  margin-top: 15px;
  padding-left: 8vw;
  padding-right: 8vw;

  /* 深灰 */

  color: #5c5c5c;
}
.title {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-top: 45px;

  color: #4f4f4f;
}
.banner {
  position: relative;
  width: 375px;
  height: 220px;
  overflow: hidden;

  background: #effffd;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
}
</style>
<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Homepage",
  data() {
    return {};
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    localStorage.clear();
    localStorage.setItem("isWater", "F");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 50) {
        this.$refs.c1.classList.add("leftin");
        this.$refs.c1_img.classList.add("rightin");
        this.$refs.c1_text.classList.add("text_fadein");
        this.$refs.c1_title.classList.add("text_fadein");
      }
      if (scrollTop >= 400) {
        this.$refs.c2.classList.add("rightin");
        this.$refs.c2_img.classList.add("leftin");
        this.$refs.c2_text.classList.add("text_fadein");
        this.$refs.c2_title.classList.add("text_fadein");
      }
      if (scrollTop > 700) {
        this.$refs.c3.classList.add("leftin");
        this.$refs.c3_img.classList.add("rightin");
        this.$refs.c3_text.classList.add("text_fadein");
        this.$refs.c3_title.classList.add("text_fadein");
      }
    },
    pressTab() {
      this.$router.push({
        name: "Press",
      });
    },
    toProfile() {
      this.$router.push({
        name: "profile",
      });
    },
  },
  components: {
    Nav,
    Footer,
  },
};
</script>