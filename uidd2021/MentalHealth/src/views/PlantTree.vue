<template>
  <div>
    <div class="outer">
      <div class="box">
        <b-container>
          <b-row style="padding-top: 10px">
            <b-col style="text-align: center">
              <img
                v-if="haveMay == false"
                class="disable_arrow"
                src="@/yo_0613/tree_arrow.svg"
              />
              <img
                v-if="haveMay"
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
        <JuneTree
          v-if="month == 6"
          :todayLeaf="todayLeaf"
          :orangebird="orangebird"
        />
        <MayTree v-if="month == 5" />
      </div>
      <div style="padding: 12px; margin-top: 5px">
        <b-container>
          <b-row>
            <b-col style="padding: 0px; text-align: center">
              <div @click="btnHistory">
                <img src="@/yo_0613/tree_history.svg" />
                <div class="btn_text">歷史紀錄</div>
              </div>
            </b-col>
            <b-col style="padding: 0px; text-align: center">
              <div @click="btnExchange">
                <img src="@/yo_0613/tree_exchange.svg" />
                <div class="btn_text">兌換樹種</div>
              </div>
            </b-col>
            <b-col style="padding: 0px; text-align: center">
              <div @click="btnWriteDiary">
                <img src="@/yo_0613/tree_add.svg" />
                <div class="btn_text">新增日記</div>
              </div>
            </b-col>
            <b-col style="padding: 0px; text-align: center">
              <div @click="btnWatering">
                <img :class="isWaterClass" src="@/yo_0613/tree_water.svg" />
                <div class="btn_text">給樹澆水</div>
              </div>
            </b-col>
            <b-col style="padding: 0px; text-align: center">
              <div @click="btnQA">
                <img src="@/yo_0613/tree_Q.svg" />
                <div class="btn_text">使用說明</div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <!--可澆水的跳出視窗-->
    <div id="infoBox" ref="infoBox" class="noInfo">
      <div class="canWaterBox">
        <img class="canWaterimg" src="@/assets/yoyoLin/feeling_canWaterimg.svg" />
        <div class="canWaterText">已新增日記，<br />可以去澆水囉！</div>
        <div @click="clickOK" class="btn_ok">了解</div>
      </div>
    </div>

    <!--訪客小鳥的跳出視窗-->
    <div id="infoBoxBird" ref="infoBoxBird" class="noInfo">
      <div class="canWaterBox">
        <img class="canWaterimg" src="@/yo_0622/bird_info.svg" />
        <div class="birdtitle">有訪客來造訪你的樹</div>
        <div class="birdText">你辛勤的澆灌，讓樹木欣欣向榮</div>
        <div @click="clickOKBird" class="btn_ok">了解</div>
      </div>
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
      isWaterClass: "nowater",
      ID: "",
      haveMay: false,
      todayWater: false,
      todayLeaf: false,
      orangebird: false,
    };
  },
  created() {
    /* 記得改學號 */
    this.ID = this.$store.state.userName;

    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;

    /* 確認有哪些天有寫日記,是否要顯示5月樹,現在只有兩種樹 */
    this.$http
      .post("/api/checkDiaryDate", {
        id: this.ID,
      })
      .then((res) => {
        var i;
        var day_set = new Set();
        for (i = 0; i < res.body.length; i++) {
          //console.log(res.body[i].date)
          if (res.body[i].date.indexOf("2021-05") != -1) {
            this.haveMay = true;
          }

          if (res.body[i].date.indexOf("2021-06") != -1) {
            var day = parseInt(res.body[i].date.substr(8, 2), 10);
            day_set.add(day);
          }

          if (res.body[i].date.indexOf(today) != -1) {
            console.log("今天有寫日記");
            console.log("><><");
            this.$http
              .post("/api/checkWatering", {
                id: this.ID,
              })
              .then((res) => {
                if (res.body.length >= 1) {
                  console.log("今天已經澆水ㄌ");
                  this.todayWater = false;
                  this.isWaterClass = "nowater";
                } else {
                  console.log("今天還沒澆水但可以澆水了");
                  this.todayWater = true;
                  this.isWaterClass = "iswater";

                  this.$refs.infoBox.classList.remove("noInfo");
                  this.$refs.infoBox.classList.add("showInfo");
                }
              });
          }
        }
        this.timeout = setTimeout(() => {
          if (day_set.size >= 20 && this.todayWater == false) {
            this.orangebird = true;
            console.log("==1");
          }
        }, 1000 * 1);
      });
  },
  methods: {
    btnWatering: function () {
      console.log(this.todayWater);
      if (this.todayWater) {
        this.$http
          .post("/api/addWater", {
            id: this.ID,
          })
          .then((res) => {});
        console.log("澆水成功");
        this.todayWater = false;
        this.isWaterClass = "nowater";
        this.todayLeaf = true;

        this.$http
          .post("/api/checkDiaryDate", {
            id: this.ID,
          })
          .then((res) => {
            var i;
            var day_set = new Set();
            for (i = 0; i < res.body.length; i++) {
              if (res.body[i].date.indexOf("2021-06") != -1) {
                var day = parseInt(res.body[i].date.substr(8, 2), 10);
                day_set.add(day);
              }
            }
            console.log("澆水成功" + day_set.size);
            if (day_set.size >= 20) {
              this.timeout = setTimeout(() => {
                console.log("QQ");
                this.$refs.infoBoxBird.classList.remove("noInfo");
                this.$refs.infoBoxBird.classList.add("showInfo");
              }, 1000 * 5);
            }
          });
      }
    },
    clickOK: function () {
      this.$refs.infoBox.classList.remove("showInfo");
      this.$refs.infoBox.classList.add("noInfo");
    },
    clickOKBird: function () {
      this.$refs.infoBoxBird.classList.remove("showInfo");
      this.$refs.infoBoxBird.classList.add("noInfo");
      this.orangebird = true;
    },
    lastmonth: function () {
      if (this.haveMay) {
        this.$refs.Larrow.classList.add("disable_arrow");
        this.$refs.Rarrow.classList.remove("disable_arrow");
        this.month = 5;
        this.isWaterClass = "nowater";
      }
    },
    nextmonth: function () {
      this.$refs.Rarrow.classList.add("disable_arrow");
      this.$refs.Larrow.classList.remove("disable_arrow");
      this.month = 6;
      if (this.todayWater == true) {
        this.isWaterClass = "iswater";
      } else {
        this.isWaterClass = "nowater";
      }
    },
    btnWriteDiary: function () {
      this.$router.push({
        name: "DiaryWrite",
      });
    },
    btnExchange: function () {
      this.$router.push({
        name: "Tree_exchange",
      });
    },
    btnHistory: function () {
      this.$router.push({
        name: "TreeHistory",
      });
    },
    btnQA: function () {
      this.$router.push({
        name: "MoodQA",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.birdtitle {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding-top: 120px;
  text-align: center;

  color: #4f4f4f;
}
.birdText {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  padding-top: 5px;
  text-align: center;

  color: #4f4f4f;
}
.canWaterText {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  padding-top: 130px;
  text-align: center;

  color: #4f4f4f;
}
.canWaterimg {
  position: absolute;
  left: calc(50% - 17.12px / 2 - 17.44px);
  top: 30px;
}
.canWaterBox {
  /* Frame 171 */
  position: absolute;

  left: 74px;
  top: 191px;

  width: 227px;
  height: 243px;

  background: #ffffff;
  border-radius: 20px;
}
.btn_ok {
  position: absolute;
  width: 139px;
  height: 43px;
  left: calc(50% - 139px / 2);
  top: 177px;

  background: #20e2d7;
  box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
  border-radius: 33px;

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 43px;
  text-align: center;

  color: #ffffff;
}
#infoBox {
  position: fixed;
  width: 375px;
  height: 687px;
  left: 0px;
  top: 0px;

  background: rgba(27, 27, 27, 0.5);
}
#infoBoxBird {
  position: fixed;
  width: 375px;
  height: 687px;
  left: 0px;
  top: 0px;

  background: rgba(27, 27, 27, 0.5);
}
.showInfo {
  z-index: 100;
  display: block;
}
.noInfo {
  display: none;
}
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