<template>
  <div>
    <Nav showBackArrow="true" />
    <div id="layout_up">
      <div class="half_region">
        <p4>讓Aura為你匹配心理師</p4>

        <p5>只需回答幾個問題，讓我們為您推薦</p5>

        <div class="short_button" onclick="location.href='./analysis'">
          <font class="button_font">立即開始</font>
        </div>
      </div>

      <div id="middle">
        <div class="middle_line"></div>
        <p5>或</p5>
        <div class="middle_line"></div>
      </div>

      <div class="half_region">
        <p4>我想自己選</p4>

        <p5>適用於已經有想要的心理師， <br />或只想快快預約到個人諮商的您</p5>

        <div class="short_button" @click="pagechange">
          <font class="button_font">預約時間</font>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Feeling",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      expert: [
        {
          photo: {
            backgroundImage: "url(" + require("@/assets/Tim/expert1.svg") + ")",
          },
          name: "許欣宜",
          isActive: false,
          id: 2,
          score: 0,
          生涯規劃: 0,
          家庭狀況: 0,
          自我探索: 1,
          感情議題: 1,
          生活變故: 0,
          情緒低落: 1,
          性別議題: 0,
          人際相處: 0,
          睡眠問題: 0,
          其他: 1,
          不拘: 1,
          男: 0,
          女: 1,
          想被溫柔安慰: 1,
          想聽客觀的視角分析: 0,
          想被溫和的罵醒: 1,
        },
        {
          photo: {
            backgroundImage: "url(" + require("@/assets/Tim/expert2.svg") + ")",
          },
          name: "林宜華",
          isActive: false,
          id: 3,
          score: 0,
          生涯規劃: 0,
          家庭狀況: 0,
          自我探索: 1,
          感情議題: 0,
          生活變故: 0,
          情緒低落: 1,
          性別議題: 1,
          人際相處: 0,
          睡眠問題: 0,
          其他: 1,
          不拘: 1,
          男: 0,
          女: 1,
          想被溫柔安慰: 1,
          想聽客觀的視角分析: 1,
          想被溫和的罵醒: 0,
        },
        {
          photo: {
            backgroundImage: "url(" + require("@/assets/Tim/expert3.svg") + ")",
          },
          name: "陳以玟",
          isActive: false,
          id: 4,
          score: 0,
          生涯規劃: 0,
          家庭狀況: 1,
          自我探索: 0,
          感情議題: 0,
          生活變故: 0,
          情緒低落: 1,
          性別議題: 0,
          人際相處: 0,
          睡眠問題: 1,
          其他: 1,
          不拘: 1,
          男: 0,
          女: 1,
          想被溫柔安慰: 1,
          想聽客觀的視角分析: 1,
          想被溫和的罵醒: 0,
        },
        {
          photo: {
            backgroundImage: "url(" + require("@/assets/Tim/expert4.svg") + ")",
          },
          name: "王浩偉",
          isActive: false,
          id: 5,
          score: 0,
          生涯規劃: 0,
          家庭狀況: 0,
          自我探索: 0,
          感情議題: 1,
          生活變故: 0,
          情緒低落: 1,
          性別議題: 0,
          人際相處: 1,
          睡眠問題: 0,
          其他: 1,
          不拘: 1,
          男: 1,
          女: 0,
          想被溫柔安慰: 0,
          想聽客觀的視角分析: 1,
          想被溫和的罵醒: 0,
        },
        {
          photo: {
            backgroundImage: "url(" + require("@/assets/Tim/expert5.svg") + ")",
          },
          name: "陳俊宇",
          isActive: false,
          id: 6,
          score: 0,
          生涯規劃: 1,
          家庭狀況: 0,
          自我探索: 0,
          感情議題: 0,
          生活變故: 1,
          情緒低落: 1,
          性別議題: 0,
          人際相處: 0,
          睡眠問題: 0,
          其他: 1,
          不拘: 1,
          男: 1,
          女: 0,
          想被溫柔安慰: 0,
          想聽客觀的視角分析: 1,
          想被溫和的罵醒: 1,
        },
      ],
    };
  },
  methods: {
    pagechange() {
      var count = 0;
      this.$store.commit("setMentalId", "1");
      this.$store.commit("setMentalInfo", this.expert);
      if (this.$store.state.mentalId == "1") {
        count = count + 1;
      }
      if (this.$store.state.mentalInfo != "") {
        count = count + 1;
      }
      if (count == 2) {
        this.$router.push({
          name: "Picktime",
        });
      }
    },
  },
};
</script>

<style scoped rel="stylesheet" type="text/css">
html {
  scroll-behavior: smooth;
}

body {
  border: 0;
  padding: 0;
  margin: 0;

  font-family: Taipei Sans TC Beta;

  /* 	display: flex;
	flex-direction: column;
    align-items: center; */
}

button {
  border: none;
  outline: none;
  background: none;
  padding: 0;
  border-radius: 1vw;
  cursor: pointer;
}

blockquote {
  margin-block: 0;
}

.button_font {
  font-family: Taipei Sans TC Beta;
  font-size: 2.22vh;
  font-weight: normal;
  color: #ffffff;
}

.full_img {
  height: 100%;
}

#layout_up {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#navbar {
  width: 100vw;
  height: 6.94vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;

  background: #ffffff;
  box-shadow: 0 0.28vh 1.39vh rgba(118, 156, 145, 0.25);
}

#navbar_main {
  width: 11.39vh;
  height: 2.54vh;

  /* position: relative;
    left: 38.93vw; */
}

#navbar_side {
  display: flex;
  justify-content: space-around;
  width: 15vw;
}

.navbar_button {
  height: 1.63vh;
}

#navbar_back {
  position: absolute;
  left: 8vw;
}

.half_region {
  height: 45vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

p4 {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: bold;
  font-size: 2.77vh;
  color: #4f4f4f;

  line-height: 4.72vh;
}

p5 {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 2.08vh;
  color: #5c5c5c;

  line-height: 2.77vh;
}

.short_button {
  position: relative;
  top: 2.5vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: #20e2d7;
  box-shadow: 0 0.55vh 2.36vh -0.14vh rgba(107, 182, 177, 0.51);
  border-radius: 4.5vh;

  width: 16.1vh;
  height: 6vh;
  cursor: pointer;
}

#middle {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.middle_line {
  width: 14vh;
  height: 0;
  border: 0.14vh solid #c7c7c7;
}
</style>
