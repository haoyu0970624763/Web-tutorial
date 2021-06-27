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
    <img class="tree" src="@/yo_0613/tree_june_trunk.svg" />
    <img class="ground2" src="@/yo_0613/tree_ground2.svg" />

    <!--葉子-->
    <div ref="leaf" class="leaf" v-for="n in 31" :key="n">{{ n }}</div>

    <div ref="newleaf"></div>
    <!--鳥-->
    <div v-if="bluebird == true" class="blue_bird">test</div>
    <div v-if="orangebird == true" class="orange_bird">test</div>

    <!--澆水-->
    <img ref="watercan" id="watercan" src="@/yo_0622/watercan.svg" />
    <img ref="drop1" id="drop1" src="@/assets/svg/plant_drop.svg" />
    <img ref="drop2" id="drop2" src="@/assets/svg/plant_drop.svg" />
    <img ref="drop3" id="drop3" src="@/assets/svg/plant_drop.svg" />
    <img ref="drop4" id="drop4" src="@/assets/svg/plant_drop.svg" />
  </div>
</template>

<script>
export default {
  name: "JuneTree",
  data() {
    return {
      ID: "",
      bluebird: false,
    };
  },
  props: {
    todayLeaf: Boolean,
    orangebird: Boolean,
    required: true,
  },
  watch: {
    todayLeaf: function () {
      if (this.todayLeaf) {
        this.todayLeaf = false;
        console.log("澆水囉囉");
        this.$refs.watercan.classList.add("watercan");
        this.$refs.drop1.classList.add("drop1");
        this.$refs.drop2.classList.add("drop2");
        this.$refs.drop3.classList.add("drop3");
        this.$refs.drop4.classList.add("drop4");
        this.$http
          .post("/api/checkDiaryDate", {
            id: this.ID,
          })
          .then((res) => {
            var i;
            var day;
            var now = new Date();
            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);
            var today = now.getFullYear() + "-" + month + "-" + day;
            for (i = 0; i < res.body.length; i++) {
              if (res.body[i].date.indexOf(today) != -1) {
                if (res.body[i].mood.indexOf("好難過") != -1) {
                  this.$refs.newleaf.classList.add("leafnew");
                  this.$refs.newleaf.classList.add("leaf" + day);
                  this.$refs.newleaf.classList.add("verysad_leaf");
                } else if (res.body[i].mood.indexOf("有點糟") != -1) {
                  this.$refs.newleaf.classList.add("leafnew");
                  this.$refs.newleaf.classList.add("leaf" + day);
                  this.$refs.newleaf.classList.add("sad_leaf");
                } else if (res.body[i].mood.indexOf("平靜") != -1) {
                  this.$refs.newleaf.classList.add("leafnew");
                  this.$refs.newleaf.classList.add("leaf" + day);
                  this.$refs.newleaf.classList.add("neutral_leaf");
                } else if (res.body[i].mood.indexOf("小確幸") != -1) {
                  this.$refs.newleaf.classList.add("leafnew");
                  this.$refs.newleaf.classList.add("leaf" + day);
                  this.$refs.newleaf.classList.add("happy_leaf");
                } else {
                  this.$refs.newleaf.classList.add("leafnew");
                  this.$refs.newleaf.classList.add("leaf" + day);
                  this.$refs.newleaf.classList.add("veryhappy_leaf");
                }
              }
            }
          });
      }
    },
  },
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
          var now = new Date();
          var day = ("0" + now.getDate()).slice(-2);
          var month = ("0" + (now.getMonth() + 1)).slice(-2);
          var today = now.getFullYear() + "-" + month + "-" + day;
          var todayWater = false; //還沒澆水不能顯示樹葉

          for (i = 0; i < res.body.length; i++) {
            //console.log(res.body[i].date)
            if (res.body[i].date.indexOf("2021-06") != -1) {
              day = parseInt(res.body[i].date.substr(8, 2), 10);
              day_set.add(day);
              //console.log( "5月"+day +"號有寫日記")
              //console.log(res.body[i].mood)
              if (res.body[i].date.indexOf(today) != -1) {
                this.$http
                  .post("/api/checkWatering", {
                    id: this.ID,
                  })
                  .then((res) => {
                    if (res.body.length >= 1) {
                      console.log("顯示今天的樹葉");
                      this.$http
                        .post("/api/checkDiaryDate", {
                          id: this.ID,
                        })
                        .then((res) => {
                          var i;
                          var day;
                          var day_set = new Set();
                          var now = new Date();
                          var day = ("0" + now.getDate()).slice(-2);
                          var month = ("0" + (now.getMonth() + 1)).slice(-2);
                          var today =
                            now.getFullYear() + "-" + month + "-" + day;
                          for (i = 0; i < res.body.length; i++) {
                            if (res.body[i].date.indexOf(today) != -1) {
                              if (res.body[i].mood.indexOf("好難過") != -1) {
                                this.$refs.leaf[day - 1].classList.add(
                                  "verysad_leaf"
                                );
                              } else if (
                                res.body[i].mood.indexOf("有點糟") != -1
                              ) {
                                this.$refs.leaf[day - 1].classList.add(
                                  "sad_leaf"
                                );
                              } else if (
                                res.body[i].mood.indexOf("平靜") != -1
                              ) {
                                this.$refs.leaf[day - 1].classList.add(
                                  "neutral_leaf"
                                );
                              } else if (
                                res.body[i].mood.indexOf("小確幸") != -1
                              ) {
                                this.$refs.leaf[day - 1].classList.add(
                                  "happy_leaf"
                                );
                              } else {
                                this.$refs.leaf[day - 1].classList.add(
                                  "veryhappy_leaf"
                                );
                              }
                            }
                          }
                        });
                    } else {
                      console.log("今天的樹葉還不可以顯示");
                      todayWater = true;
                    }
                  });
              } else {
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
          }
          console.log("這個月寫了" + day_set.size + "篇日記");
          if (day_set.size >= 10) {
            this.bluebird = true;
          }
          if (day_set.size >= 20 && todayWater == true) {
            console.log("= =");
            this.orangebird = true;
          }
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#watercan {
  position: absolute;
  left: 59.5%;
  top: 45.4%;
  opacity: 0;
}
.watercan {
  /* animation 參數設定 */
  animation-name: watercan; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right bottom;
}
@keyframes watercan {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
    transform: rotate(-10deg);
  }
  75% {
    opacity: 1;
    transform: rotate(-15deg);
  }
  100% {
    opacity: 0;
  }
}

#drop1 {
  position: absolute;
  left: 53.5%;
  top: 72.4%;
  opacity: 0;
}
#drop2 {
  position: absolute;
  left: 55.5%;
  top: 78.4%;
  opacity: 0;
  transform: rotate(-35deg);
}
#drop3 {
  position: absolute;
  left: 46.5%;
  top: 79.4%;
  opacity: 0;
  transform: rotate(-15deg) scale(0.8);
}
#drop4 {
  position: absolute;
  left: 50.5%;
  top: 86.4%;
  opacity: 0;
  transform: rotate(-25deg);
}
.drop1 {
  /* animation 參數設定 */
  animation-name: drop; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.4s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
}
.drop2 {
  /* animation 參數設定 */
  animation-name: drop; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.6s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
}
.drop3 {
  /* animation 參數設定 */
  animation-name: drop; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.8s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
}
.drop4 {
  /* animation 參數設定 */
  animation-name: drop; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1s; /*動畫持續時間，單位為秒*/
  animation-delay: 1s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
}
@keyframes drop {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.orange_bird {
  position: absolute;
  right: -50px;
  top: 60px;
  background-image: url("../yo_0622/orange_bird_sprites.png");
  width: 40px;
  height: 40px;
  background-size: cover;
  animation: fly2 1.5s steps(25) 1;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  color: rgb(0, 0, 0, 0);
}
@keyframes fly2 {
  100% {
    background-position: 0 -1000px;
    transform: translateX(-115px) translateY(135px);
  }
}
@keyframes fly {
  100% {
    background-position: 0 -1300px;
    transform: translateX(120px) translateY(-88px);
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
  background: url("../yo_0622/june/tree_leaf_sad.svg") no-repeat center;
  background-size: 25px auto;
  transform: rotate(100deg);
}
.verysad_leaf {
  background: url("../yo_0622/june/tree_leaf_verysad.svg") no-repeat center;
  background-size: 25px auto;
}
.veryhappy_leaf {
  background: url("../yo_0622/june/tree_leaf_veryhappy.svg") no-repeat center;
  background-size: 25px auto;
}
.happy_leaf {
  background: url("../yo_0622/june/tree_leaf_happy.svg") no-repeat center;
  background-size: 25px auto;
}
.neutral_leaf {
  background: url("../yo_0622/june/tree_leaf_neutral.svg") no-repeat center;
  background-size: 25px auto;
}
@keyframes growup1 {
  0% {
    transform: scale(0) rotate(50deg);
  }
  100% {
    transform: scale(1) rotate(50deg);
    opacity: 1;
  }
}
@keyframes growup3 {
  0% {
    transform: scale(0) rotate(200deg);
  }
  100% {
    transform: scale(1) rotate(200deg);
    opacity: 1;
  }
}
@keyframes growup7 {
  0% {
    transform: scale(0) rotate(170deg);
  }
  100% {
    transform: scale(1) rotate(170deg);
    opacity: 1;
  }
}
@keyframes growup8 {
  0% {
    transform: scale(0) rotate(-70deg);
  }
  100% {
    transform: scale(1) rotate(-70deg);
    opacity: 1;
  }
}
.leaf:nth-of-type(1) {
  top: 230px;
  left: 188px;

  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(2) {
  top: 210px;
  left: 215px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(3) {
  top: 235px;
  left: 145px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(4) {
  left: 180px;
  top: 220px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(5) {
  left: 188px;
  top: 190px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(6) {
  left: 235px;
  top: 180px;

  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(7) {
  left: 255px;
  top: 212px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(8) {
  left: 105px;
  top: 230px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(9) {
  left: 68px;
  top: 235px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: bottom left;
}
.leaf:nth-of-type(10) {
  left: 50px;
  top: 219px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(11) {
  left: 96px;
  top: 220px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: top right;
}
.leaf:nth-of-type(12) {
  left: 117px;
  top: 178px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(13) {
  left: 60px;
  top: 170px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(14) {
  left: 33px;
  top: 166px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(15) {
  left: 78px;
  top: 177px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(16) {
  left: 45px;
  top: 144px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(17) {
  left: 181px;
  top: 180px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(18) {
  left: 160px;
  top: 187px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(19) {
  left: 150px;
  top: 150px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(20) {
  left: 163px;
  top: 146px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(21) {
  left: 190px;
  top: 138px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(22) {
  left: 85px;
  top: 152px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(23) {
  left: 61px;
  top: 82px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(24) {
  left: 81px;
  top: 70px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(25) {
  left: 48px;
  top: 100px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(26) {
  left: 135px;
  top: 80px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(27) {
  left: 120px;
  top: 120px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(28) {
  left: 166px;
  top: 96px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf:nth-of-type(29) {
  left: 149px;
  top: 45px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf:nth-of-type(30) {
  left: 135px;
  top: 80px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 0.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}

.leaf {
  /*background: url("../yo_0622/tree_leaf_neutral.svg") no-repeat center;*/
  background-size: 20px auto;
  width: 30px;
  height: 30px;

  color: rgb(0, 0, 0, 0);
  position: absolute;
}
.leafnew {
  /*background: url("../yo_0622/tree_leaf_neutral.svg") no-repeat center;*/
  background-size: 20px auto;
  width: 30px;
  height: 30px;

  color: rgb(0, 0, 0, 0);
  position: absolute;
}
.tree {
  position: absolute;
  bottom: 50px;
  width: 248.01px;
  left: 43px;
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
.leaf1 {
  top: 230px;
  left: 188px;

  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf2 {
  top: 210px;
  left: 215px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup1; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf3 {
  top: 235px;
  left: 145px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf4 {
  left: 180px;
  top: 220px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf5 {
  left: 188px;
  top: 190px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf6 {
  left: 235px;
  top: 180px;

  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf7 {
  left: 255px;
  top: 212px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf8 {
  left: 105px;
  top: 230px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf9 {
  left: 68px;
  top: 235px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: bottom left;
}
.leaf10 {
  left: 50px;
  top: 219px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf11 {
  left: 96px;
  top: 220px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: top right;
}
.leaf12 {
  left: 117px;
  top: 178px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf13 {
  left: 60px;
  top: 170px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf14 {
  left: 33px;
  top: 166px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf15 {
  left: 78px;
  top: 177px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf16 {
  left: 45px;
  top: 144px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf17 {
  left: 181px;
  top: 180px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf18 {
  left: 160px;
  top: 187px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 1.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf19 {
  left: 150px;
  top: 150px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf20 {
  left: 163px;
  top: 146px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf21 {
  left: 190px;
  top: 138px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 3.5s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf22 {
  left: 85px;
  top: 152px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf23 {
  left: 61px;
  top: 82px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf24 {
  left: 81px;
  top: 70px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf25 {
  left: 48px;
  top: 100px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf26 {
  left: 135px;
  top: 80px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf27 {
  left: 120px;
  top: 120px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf28 {
  left: 166px;
  top: 96px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup3; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
.leaf29 {
  left: 149px;
  top: 45px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup8; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: left bottom;
}
.leaf30 {
  left: 135px;
  top: 80px;
  /* animation 參數設定 */
  opacity: 0;
  animation-name: growup7; /*動畫名稱，需與 keyframe 名稱對應*/
  animation-duration: 2s; /*動畫持續時間，單位為秒*/
  animation-delay: 2.3s; /*動畫延遲開始時間*/
  animation-iteration-count: 1; /*動畫次數，infinite 為無限次*/
  animation-fill-mode: forwards;
  /*右下角*/
  transform-origin: right top;
}
</style>