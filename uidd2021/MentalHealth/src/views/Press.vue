<template>
  <div>
    <Nav showBackArrow="ture" showText="true" navText="壓力評估量表" />

    <div id="background">
      <div id="Question">
        <div id="Question_number">Q1</div>
        <div id="Question_box">
          您最近睡眠困難的程度？
          <br />（譬如難以入睡、易醒或早醒）
        </div>
      </div>

      <div id="button_list">
        <div
          class="button"
          @click="pressbutton(0)"
          :class="{ isPress: Q[Qn].level0, nonPress: !Q[Qn].level0 }"
        >
          完全沒有
        </div>
        <div
          class="button"
          @click="pressbutton(1)"
          :class="{ isPress: Q[Qn].level1, nonPress: !Q[Qn].level1 }"
        >
          輕微
        </div>
        <div
          class="button"
          @click="pressbutton(2)"
          :class="{ isPress: Q[Qn].level2, nonPress: !Q[Qn].level2 }"
        >
          中等程度
        </div>
        <div
          class="button"
          @click="pressbutton(3)"
          :class="{ isPress: Q[Qn].level3, nonPress: !Q[Qn].level3 }"
        >
          嚴重
        </div>
        <div
          class="button"
          @click="pressbutton(4)"
          :class="{ isPress: Q[Qn].level4, nonPress: !Q[Qn].level4 }"
        >
          非常嚴重
        </div>
      </div>

      <div id="page_select">
        <div
          @click="lastQ()"
          id="button_lastQ"
          class="page_button"
          style="opacity: 0.5"
        >
          上一題
        </div>

        <div @click="nextQ()" id="button_nextQ" class="page_button">下一題</div>
      </div>
    </div>
  </div>
</template>

<style rel="stylesheet" type="text/css">
#background {
  height: 93.7vh;
  background: linear-gradient(
    180deg,
    #ffffff 42.2%,
    #9ffbdf 203.98%,
    #40e9d2 270.1%
  );
  text-align: center;
  overflow: hidden;
}
#Question_number {
  width: 6.165vh;
  height: 6.165vh;
  background: #20e2d7;
  border-radius: 4.07vh;
  color: #ffffff;
  font-family: "SF Compact Display";
  font-style: normal;
  font-weight: 600;
  font-size: 2.22vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 4.56vh;
  left: 3.33vh;
  z-index: 10;
}
#Question_box {
  position: relative;
  top: 1.5vh;
  left: 6.41vh;
  width: 35.88vh;
  height: 13.93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 0.123vh solid #20e2d7;
  box-sizing: border-box;
  border-radius: 1.23vh;
}
#button_list {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 46.36vh;
  position: relative;
  top: 3.5vh;
}
.button {
  width: 25.89vh;
  height: 6.78vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 2.22vh;
}
.isPress {
  background: #20e2d7;
  box-sizing: border-box;
  border-radius: 4.07vh;
  color: #ffffff;
}
.nonPress {
  background: #ffffff;
  border: 0.123vh solid #20e2d7;
  box-sizing: border-box;
  border-radius: 4.07vh;
  color: #20e2d7;
}
#page_select {
  height: 7.03vh;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 8vh;
  color: #ffffff;
  font-size: 2.22vh;
}
.page_button {
  width: 18.87vh;
  height: 7.03vh;
  box-shadow: 0vh 0.49vh 2.1vh -0.123vh rgba(107, 182, 177, 0.51);
  border-radius: 4.07vh;
  background: #20e2d7;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Press",
  components: {
    Nav,
  },
  data() {
    return {
      Qn: 0,
      Question: [
        {
          number: "Q1",
          content: "您最近睡眠困難的程度？<br>（譬如難以入睡、易醒或早醒）",
        },
        {
          number: "Q2",
          content: "您最近感覺緊張不安的程度？",
        },
      ],
      Q: [
        {
          number: "Q1",
          content: "您最近睡眠困難的程度？<br>（譬如難以入睡、易醒或早醒）",
          level4: false,
          level3: false,
          level2: false,
          level1: false,
          level0: false,
        },
        {
          number: "Q2",
          content: "您最近感覺緊張不安的程度？",
          level4: false,
          level3: false,
          level2: false,
          level1: false,
          level0: false,
        },
        {
          number: "Q3",
          content: "您最近覺得<br>容易苦惱或動怒的程度？",
          level4: false,
          level3: false,
          level2: false,
          level1: false,
          level0: false,
        },
        {
          number: "Q4",
          content: "您最近感覺<br>憂鬱、心情低落的程度？",
          level4: false,
          level3: false,
          level2: false,
          level1: false,
          level0: false,
        },
        {
          number: "Q5",
          content: "您最近覺得比不上別人的程度？",
          level4: false,
          level3: false,
          level2: false,
          level1: false,
          level0: false,
        },
        {
          number: "Q6",
          content: "您最近有自殺想法的程度？",
          level4: false,
          level3: false,
          level2: false,
          level1: false,
          level0: false,
        },
      ],
    };
  },
  methods: {
    nextQ: function () {
      if (this.Qn == 5) {
        // change Page
        this.pagechange();
      } else {
        this.Qn = this.Qn + 1;
        if (this.Qn == 5) {
          document.getElementById("button_nextQ").innerHTML = "送出";
        }
      }
      document.getElementById("button_lastQ").style.opacity = 1;
      this.changeQ();
    },
    lastQ: function () {
      document.getElementById("button_nextQ").innerHTML = "下一題";
      if (this.Qn == 0) {
      } else {
        this.Qn = this.Qn - 1;
        if (this.Qn == 0) {
          document.getElementById("button_lastQ").style.opacity = 0.5;
        }
      }
      document.getElementById("button_nextQ").style.opacity = 1;
      this.changeQ();
    },
    changeQ: function () {
      document.getElementById("Question_number").innerHTML =
        this.Q[this.Qn].number;
      document.getElementById("Question_box").innerHTML =
        this.Q[this.Qn].content;
    },
    pressbutton: function (num) {
      this.Q[this.Qn].level0 = false;
      this.Q[this.Qn].level1 = false;
      this.Q[this.Qn].level2 = false;
      this.Q[this.Qn].level3 = false;
      this.Q[this.Qn].level4 = false;
      if (num == 0) this.Q[this.Qn].level0 = true;
      else if (num == 1) this.Q[this.Qn].level1 = true;
      else if (num == 2) this.Q[this.Qn].level2 = true;
      else if (num == 3) this.Q[this.Qn].level3 = true;
      else if (num == 4) this.Q[this.Qn].level4 = true;
    },
    pagechange: function () {
      var pressure = 0;
      var i = 0;
      for (i = 0; i < 6; i++) {
        if (this.Q[i].level1) pressure = pressure + 1;
        if (this.Q[i].level2) pressure = pressure + 2;
        if (this.Q[i].level3) pressure = pressure + 3;
        if (this.Q[i].level4) pressure = pressure + 4;
      }
      this.$store.commit("setPressScore", pressure);
      if (this.$store.state.PressScore != "") {
        this.$router.push({
          name: "PressResult"
        });
      }
    },
  },
};
</script>