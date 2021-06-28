<template>
  <div class="desktop">
    <div id="namebar">
      <Nav showBackArrow=true showText navText="匹配結果" />
    </div>
    <div class="ornament"></div>
    <div class="ornament" id="rotate"></div>
    <transition name="photo">
      <div v-if="pickdone" id="bigphoto" :style="fitperson.bigphotostyle"></div>
    </transition>
    <div id="fittext">最適合你的心理師是</div>
    <transition name="text">
      <div v-if="pickdone" id="fitname">{{ fitperson.name }}</div>
    </transition>
    <div class="word">放心！下一步還能查看其他心理師的介紹與時間！</div>
    <div class="nextstep" @click="makereservation">預約時間</div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Matchresult",
  components: {
    Nav,
  },
  data() {
    return {
      pickdone: false,
      expert: [
        {
          photo: {
            backgroundImage: "url(" + require("@/assets/Tim/expert1.svg") + ")",
          },
          descripphoto: {
            backgroundImage: "url(" + require("@/assets/Tim/descripexpert1.svg") + ")",
          },
          maximtext: "“ 生命是不斷發現與開拓的冒險旅程 ”",
          gendercontent: "女",
          expertcontent: "情緒低落,感情議題,自我探索",
          talkstylecontent: "溫柔安慰,理性辯證",
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
          descripphoto: {
            backgroundImage: "url(" + require("@/assets/Tim/descripexpert2.svg") + ")",
          },
          maximtext: "“ 抱持對人性的理解，開創出人生的新解 ”",
          gendercontent: "女",
          expertcontent: "情緒低落,性別議題,自我探索",
          talkstylecontent: "客觀視角分析,溫柔安慰",
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
          descripphoto: {
            backgroundImage: "url(" + require("@/assets/Tim/descripexpert3.svg") + ")",
          },
          maximtext: "“ 生命中的所有經驗，最終都會化作生命的養分 ”",
          gendercontent: "女",
          expertcontent: "情緒低落,睡眠問題,家庭狀況",
          talkstylecontent: "溫柔安慰,客觀視角分析",
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
          descripphoto: {
            backgroundImage: "url(" + require("@/assets/Tim/descripexpert4.svg") + ")",
          },
          maximtext: "“ 人生就像旅行，總有不同風景 ”",
          gendercontent: "男",
          expertcontent: "情緒低落,人際相處,感情議題",
          talkstylecontent: "客觀視角分析",
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
          descripphoto: {
            backgroundImage: "url(" + require("@/assets/Tim/descripexpert5.svg") + ")",
          },
          maximtext: "“ 理智是人生的燈塔 ”",
          gendercontent: "男",
          expertcontent: "情緒低落,生活變故,生涯規劃",
          talkstylecontent: "客觀視角分析,理性辯證",
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
      fitperson: {
        name: "",
        bigphotostyle: {},
      },
      pick: 0,
    };
  },
  methods: {
    sortbykey(array, key) {
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      });
    },
    pickmostfit() {
      this.$store.state.analysisResult.forEach((element) => {
        this.expert.forEach((i) => {
          i.score = i.score + i[element];
        });
      });
      this.sortbykey(this.expert, "score");
      this.expert.forEach((i, index) => {
        i.id = index + 2;
      });
      this.pick = 2;
      this.fitperson.name = this.expert[0].name;
      this.fitperson.bigphotostyle = this.expert[0].photo;
    },
    enteranimate() {
      this.pickdone = true;
    },
    makereservation() {
      var count = 0;
      this.$store.commit("setMentalId", this.pick.toString());
      this.$store.commit("setMentalInfo", this.expert);
      if (
        this.$store.state.mentalId != "" &&
        this.$store.state.mentalId != "1"
      ) {
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
  created() {
    this.pickmostfit();
  },
  mounted() {
    this.enteranimate();
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.desktop {
  position: absolute;
  display: block;
  width: 375px;
  height: 687px;
  overflow: hidden;
}
#namebar {
  width: 375px;
  height: 50px;
}
.ornament {
  position: absolute;
  width: 46.39px;
  height: 99.12px;
  background-image: url("../assets/svg/ornament.svg");
  background-repeat: no-repeat;
  background-size: 46.39px 99.12px;
  left: 267px;
  top: 237.09px;
}
#rotate {
  transform: rotate(-155.12deg);
  left: 72.275px;
  top: 152.44px;
}
.photo-enter-active {
  transition: all 0.8s ease;
}
.photo-enter {
  transform: translateX(15px);
  opacity: 0;
}
.text-enter-active {
  transition: all 1.6s ease;
}
.text-enter {
  transform: translateX(25px);
  opacity: 0;
}
#bigphoto {
  position: absolute;
  width: 165px;
  height: 165px;
  top: 178.76px;
  left: 104px;
  background-size: 165px 165px;
  background-repeat: no-repeat;
}
#fittext {
  position: absolute;
  width: 117px;
  height: 18px;
  left: 129px;
  top: 378.76px;
  font-family: Taipei Sans TC Beta;
  font-size: 13px;
  line-height: 18px;
  align-items: center;
  color: #5c5c5c;
}
#fitname {
  position: absolute;
  width: 60px;
  height: 34px;
  left: 158px;
  top: 406.76px;
  font-family: Taipei Sans TC Beta;
  font-weight: bold;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #4f4f4f;
}
.word {
  position: absolute;
  left: 45px;
  top: 445px;
  font-size: 13px;
  color: rgba(199, 199, 199, 1);
}
.nextstep {
  position: absolute;
  width: 284px;
  height: 43px;
  left: 46px;
  top: 486.76px;
  background: #20e2d7;
  box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
  border-radius: 33px;
  font-family: Taipei Sans TC Beta;
  font-size: 16px;
  line-height: 43px;
  text-align: center;
  color: #ffffff;
}
</style>
