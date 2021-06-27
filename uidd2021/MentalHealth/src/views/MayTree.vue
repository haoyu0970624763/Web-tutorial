<template>
  <div
    style="
      width: 327px;
      height: 378px;
      position: relative;
      border-radius: 6px;
      overflow: hidden;
    "
  >
    <img id="cloud1" src="@/yo_0613/tree_cloud1.svg" />
    <img id="cloud2" src="@/yo_0613/tree_cloud2.svg" />
    <img id="cloud3" src="@/yo_0613/tree_cloud3.svg" />

    <img class="ground" src="@/yo_0613/tree_ground.svg" />
    <img class="tree" src="@/yo_0613/tree_may_trunk.svg" />
    <img class="ground2" src="@/yo_0613/tree_ground2.svg" />

    <!--葉子-->
    <div ref="leaf" class="leaf" v-for="n in 31" :key="n">{{ n }}</div>

    <!--鳥-->
    <div v-if="bluebird == true" class="blue_bird">test</div>
  </div>
</template>

<script>
export default {
  name: "MayTree",
  data() {
    return {
      ID: "",
      bluebird: false,
    };
  },
  methods: {},
  created() {
    /* 記得改學號 */
    this.ID = this.$store.state.userName;

    if (this.ID != "") {
      /* 確認有哪些天有寫日記,顯示葉子 */
      this.$http
        .post("/api/checkDiaryDate", {
          id: this.ID,
        })
        .then((res) => {
          var i;
          var day;
          var day_set = new Set();

          for (i = 0; i < res.body.length; i++) {
            //console.log(res.body[i].date)
            if (res.body[i].date.indexOf("2021-05") != -1) {
              day = parseInt(res.body[i].date.substr(8, 2), 10);
              day_set.add(day);
              //console.log( "5月"+day +"號有寫日記")
              //console.log(res.body[i].mood)
              if (res.body[i].mood.indexOf("好難過") != -1) {
                this.$refs.leaf[day - 1].classList.add("verysad_leaf");
              } else if (res.body[i].mood.indexOf("有點糟") != -1) {
                this.$refs.leaf[day - 1].classList.add("sad_leaf");
              } else if (res.body[i].mood.indexOf("平靜") != -1) {
                this.$refs.leaf[day - 1].classList.add("neutral_leaf");
              } else if (res.body[i].mood.indexOf("小確幸") != -1) {
                this.$refs.leaf[day - 1].classList.add("happy_leaf");
              } else {
                this.$refs.leaf[day - 1].classList.add("veryhappy_leaf");
              }
            }
          }
          console.log("這個月寫了" + day_set.size + "篇日記");
          if (day_set.size >= 10) {
            this.bluebird = true;
          }
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes fly {
  100% {
    background-position: 0 -1300px;
    transform: translateX(100px) translateY(-93px);
  }
}
.blue_bird {
  position: absolute;
  left: -50px;
  bottom: 30px;
  background-image: url("../yo_0622/blue_bird_sprites.png");
  width: 50px;
  height: 50px;
  background-size: cover;
  animation: fly 1.5s steps(26) 1;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  color: rgb(0, 0, 0, 0);
}
.sad_leaf {
  background: url("../yo_0622/may/tree_leaf_sad.svg") no-repeat center;
  background-size: 25px auto;
  transform: rotate(100deg);
}
.verysad_leaf {
  background: url("../yo_0622/may/tree_leaf_verysad.svg") no-repeat center;
  background-size: 25px auto;
}
.veryhappy_leaf {
  background: url("../yo_0622/may/tree_leaf_veryhappy.svg") no-repeat center;
  background-size: 25px auto;
}
.happy_leaf {
  background: url("../yo_0622/may/tree_leaf_happy.svg") no-repeat center;
  background-size: 25px auto;
}
.neutral_leaf {
  background: url("../yo_0622/may/tree_leaf_neutral.svg") no-repeat center;
  background-size: 25px auto;
}
@keyframes growup1 {
  0% {
    transform: scale(0) rotate(19.45deg);
  }
  100% {
    transform: scale(1) rotate(19.45deg);
    opacity: 1;
  }
}
@keyframes growup2 {
  0% {
    transform: scale(0) rotate(-29.45deg);
  }
  100% {
    transform: scale(1) rotate(-29.45deg);
    opacity: 1;
  }
}
@keyframes growup3 {
  0% {
    transform: scale(0) rotate(290deg);
  }
  100% {
    transform: scale(1) rotate(290deg);
    opacity: 1;
  }
}
@keyframes growup5 {
  0% {
    transform: scale(0) rotate(260deg);
  }
  100% {
    transform: scale(1) rotate(260deg);
    opacity: 1;
  }
}
@keyframes growup8 {
  0% {
    transform: scale(0) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(180deg);
    opacity: 1;
  }
}
.leaf:nth-of-type(1) {
  top: 240px;
  left: 203px;

  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(2) {
  top: 213px;
  left: 195px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(3) {
  top: 216px;
  left: 235px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(4) {
  left: 238px;
  top: 160px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(5) {
  left: 278px;
  top: 160px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup5; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(6) {
  left: 280px;
  top: 153px;

  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(7) {
  left: 295px;
  top: 185px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(8) {
  left: 70px;
  top: 252px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(9) {
  left: 55px;
  top: 225px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup5; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(10) {
  left: 65px;
  top: 220px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(11) {
  left: 115px;
  top: 215px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(12) {
  left: 130px;
  top: 178px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(13) {
  left: 98px;
  top: 151px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(14) {
  left: 80px;
  top: 140px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(16) {
  left: 60px;
  top: 145px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(15) {
  left: 52px;
  top: 149px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup5; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(17) {
  left: 188px;
  top: 188px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup5; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(18) {
  left: 212px;
  top: 113px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(19) {
  left: 240px;
  top: 98px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(20) {
  left: 144px;
  top: 140px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup5; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(21) {
  left: 76px;
  top: 82px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(22) {
  left: 88px;
  top: 72px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup5; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(23) {
  left: 95px;
  top: 65px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(24) {
  left: 187px;
  top: 103px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(27) {
  left: 212px;
  top: 70px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup5; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(28) {
  left: 210px;
  top: 60px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(31) {
  left: 175px;
  top: 45px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(30) {
  left: 165px;
  top: 43px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup2; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(29) {
  left: 159px;
  top: 50px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup5; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(26) {
  left: 140px;
  top: 78px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup5; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf:nth-of-type(25) {
  left: 150px;
  top: 82px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left;
}
.leaf {
  /*background: url("../yo_0622/tree_leaf_neutral.svg") no-repeat center;*/
  background-size: 25px auto;
  width: 30px;
  height: 30px;

  color: rgb(0, 0, 0, 0);
  position: absolute;
}
.tree {
  position: absolute;
  bottom: 50px;
  width: 248.01px;
  left: 53px;
}
#cloud1 {
  position: absolute;
  top: 19px;
  animation: cloud1 15s linear infinite;
}
#cloud2 {
  position: absolute;
  top: 59px;
  animation: cloud2 15s linear infinite;
}
#cloud3 {
  position: absolute;
  top: 250px;
  animation: cloud3 15s linear infinite;
}

@keyframes cloud1 {
  0% {
    margin-left: 20%;
  }
  20% {
    margin-left: 40%;
  }
  40% {
    margin-left: 60%;
  }
  60% {
    margin-left: 80%;
  }
  80% {
    margin-left: 100%;
    opacity: 1;
  }
  81% {
    margin-left: 100%;
    opacity: 0;
  }
  82% {
    margin-left: 0%;
    opacity: 0;
  }
  83% {
    margin-left: 0%;
    opacity: 1;
  }
  100% {
    margin-left: 20%;
  }
}
@keyframes cloud3 {
  0% {
    margin-left: 80%;
  }
  20% {
    margin-left: 100%;
    opacity: 1;
  }
  21% {
    margin-left: 100%;
    opacity: 0;
  }
  22% {
    margin-left: 0%;
    opacity: 0;
  }
  23% {
    margin-left: 0%;
    opacity: 1;
  }
  40% {
    margin-left: 20%;
  }
  60% {
    margin-left: 40%;
  }
  80% {
    margin-left: 60%;
  }
  100% {
    margin-left: 80%;
  }
}
@keyframes cloud2 {
  0% {
    margin-left: 80%;
  }
  20% {
    margin-left: 60%;
  }
  40% {
    margin-left: 40%;
  }
  60% {
    margin-left: 20%;
  }
  80% {
    margin-left: 0%;
    opacity: 1;
  }
  81% {
    margin-left: 0%;
    opacity: 0;
  }
  82% {
    margin-left: 100%;
    opacity: 0;
  }
  83% {
    margin-left: 100%;
    opacity: 1;
  }
  100% {
    margin-left: 80%;
  }
}
.ground {
  position: absolute;
  bottom: 0px;
}
.ground2 {
  position: absolute;
  bottom: 35px;
  left: 123px;
}
</style>