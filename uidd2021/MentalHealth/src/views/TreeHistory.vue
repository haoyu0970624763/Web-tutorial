<template>
  <div>
    <Nav showBackArrow="true" showText="true" navText="歷史紀錄" />
    <div class="chooseMonthBox">
      <b-container>
        <b-row>
          <b-col style="text-align: right">
            <img
              v-if="haveMay == false"
              class="disable_arrow"
              src="@/yo_0627/history_arrow.svg"
            />
            <img
              v-if="haveMay"
              @click="lastmonth"
              ref="Larrow"
              src="@/yo_0627/history_arrow.svg"
            />
          </b-col>
          <b-col cols="6" style="text-align: center">
            <div class="choose_month">{{ month }}月/ 2021</div>
          </b-col>
          <b-col style="text-align: left">
            <img
              @click="nextmonth"
              ref="Rarrow"
              class="disable_arrow"
              src="@/yo_0627/history_arrow_right.svg"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div v-if="month == 6">
      <div class="history_title">心情統計</div>
      <div class="mood_count_box">
        <div class="mood_box">
          <img src="@/yo_0613/Aicons_face-very-happy.svg" />
          <span class="text"
            >{{
              Math.ceil(
                (JuneMoodCount["veryhappy"] / JuneMoodCount["sum"]) * 100
              )
            }}%</span
          >
          <div
            class="veryhappylong"
            :style="{
              width:
                (JuneMoodCount['veryhappy'] / JuneMoodCount['sum'] + 0.05) *
                  190 +
                'px',
            }"
          >
            t
          </div>
          <span class="text">{{ JuneMoodCount["veryhappy"] }}</span>
        </div>
        <div class="mood_box">
          <img src="@/yo_0613/Aicons_face-happy.svg" />
          <span class="text"
            >{{
              Math.ceil((JuneMoodCount["happy"] / JuneMoodCount["sum"]) * 100)
            }}%</span
          >
          <div
            class="happylong"
            :style="{
              width:
                (JuneMoodCount['happy'] / JuneMoodCount['sum'] + 0.05) * 190 +
                'px',
            }"
          >
            t
          </div>
          <span class="text">{{ JuneMoodCount["happy"] }}</span>
        </div>
        <div class="mood_box">
          <img
            sytle="margin-right:10px;"
            src="@/yo_0613/Aicons_face-neutral.svg"
          />
          <span class="text"
            >{{
              Math.ceil(
                (JuneMoodCount["neutral"] / JuneMoodCount["sum"]) * 100
              )
            }}%</span
          >
          <div
            class="neutrallong"
            :style="{
              width:
                (JuneMoodCount['neutral'] / JuneMoodCount['sum'] + 0.05) * 190 +
                'px',
            }"
          >
            t
          </div>
          <span class="text">{{ JuneMoodCount["neutral"] }}</span>
        </div>
        <div class="mood_box">
          <img src="@/yo_0613/Aicons_face-sad.svg" />
          <span class="text"
            >{{
              Math.ceil((JuneMoodCount["sad"] / JuneMoodCount["sum"]) * 100)
            }}%</span
          >
          <div
            class="sadlong"
            :style="{
              width:
                (JuneMoodCount['sad'] / JuneMoodCount['sum'] + 0.05) * 190 +
                'px',
            }"
          >
            t
          </div>
          <span class="text">{{ JuneMoodCount["sad"] }}</span>
        </div>
        <div class="mood_box">
          <img src="@/yo_0613/Aicons_face-very-sad.svg" />
          <span class="text"
            >{{
              Math.ceil(
                (JuneMoodCount["verysad"] / JuneMoodCount["sum"]) * 100
              )
            }}%</span
          >
          <div
            class="verysadlong"
            :style="{
              width:
                (JuneMoodCount['verysad'] / JuneMoodCount['sum'] + 0.05) * 190 +
                'px',
            }"
          >
            t
          </div>
          <span class="text">{{ JuneMoodCount["verysad"] }}</span>
        </div>
      </div>
      <div class="history_title">本月日記</div>
      <div v-for="n in JuneDate" :key="n">
        <div class="diarybox">
          <b-container>
            <b-row style="padding-top: 10px">
              <b-col cols="3" style="padding-top: 0px; text-align: center">
                <span class="text_date">6/{{ n }} </span>
              </b-col>
              <b-col cols="9" style="text-align: left">
                <span class="text_date"> {{ JuneTitle[n] }}</span>
              </b-col>
            </b-row>
            <b-row style="padding-top: 10px">
              <b-col
                align-self="start"
                cols="3"
                style="padding-top: 0px; text-align: top"
              >
                <img
                  v-if="JuneMood[n].indexOf('開心') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-happy.svg"
                />
                <img
                  v-if="JuneMood[n].indexOf('小確幸') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-very-happy.svg"
                />
                <img
                  v-if="JuneMood[n].indexOf('平靜') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-neutral.svg"
                />
                <img
                  v-if="JuneMood[n].indexOf('有點糟') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-sad.svg"
                />
                <img
                  v-if="JuneMood[n].indexOf('好難過') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-very-sad.svg"
                />
              </b-col>
              <b-col align-self="start" cols="9" style="text-align: left">
                <div class="text2">遇到的事件/想法</div>
                <div class="text3">{{ JuneText1[n] }}</div>
                <div class="text2">處理方式</div>
                <div class="text3">{{ JuneText2[n] }}</div>
              </b-col>
            </b-row>
          </b-container>
          <div></div>
        </div>
      </div>
    </div>
    <div v-if="month == 5">
      <div class="history_title">心情統計</div>
      <div class="mood_count_box">
        <div class="mood_box">
          <img src="@/yo_0613/Aicons_face-very-happy.svg" />
          <span class="text"
            >{{
              Math.ceil(
                (MayMoodCount["veryhappy"] / MayMoodCount["sum"]) * 100
              )
            }}%</span
          >
          <div
            class="veryhappylong"
            :style="{
              width:
                (MayMoodCount['veryhappy'] / MayMoodCount['sum'] + 0.05) * 190 +
                'px',
            }"
          >
            t
          </div>
          <span class="text">{{ MayMoodCount["veryhappy"] }}</span>
        </div>
        <div class="mood_box">
          <img src="@/yo_0613/Aicons_face-happy.svg" />
          <span class="text"
            >{{
              Math.ceil((MayMoodCount["happy"] / MayMoodCount["sum"]) * 100)
            }}%</span
          >
          <div
            class="happylong"
            :style="{
              width:
                (MayMoodCount['happy'] / MayMoodCount['sum'] + 0.05) * 190 +
                'px',
            }"
          >
            t
          </div>
          <span class="text">{{ MayMoodCount["happy"] }}</span>
        </div>
        <div class="mood_box">
          <img
            sytle="margin-right:10px;"
            src="@/yo_0613/Aicons_face-neutral.svg"
          />
          <span class="text"
            >{{
              Math.ceil((MayMoodCount["neutral"] / MayMoodCount["sum"]) * 100)
            }}%</span
          >
          <div
            class="neutrallong"
            :style="{
              width:
                (MayMoodCount['neutral'] / MayMoodCount['sum'] + 0.05) * 190 +
                'px',
            }"
          >
            t
          </div>
          <span class="text">{{ MayMoodCount["neutral"] }}</span>
        </div>
        <div class="mood_box">
          <img src="@/yo_0613/Aicons_face-sad.svg" />
          <span class="text"
            >{{
              Math.ceil((MayMoodCount["sad"] / MayMoodCount["sum"]) * 100)
            }}%</span
          >
          <div
            class="sadlong"
            :style="{
              width:
                (MayMoodCount['sad'] / MayMoodCount['sum'] + 0.05) * 190 + 'px',
            }"
          >
            t
          </div>
          <span class="text">{{ MayMoodCount["sad"] }}</span>
        </div>
        <div class="mood_box">
          <img src="@/yo_0613/Aicons_face-very-sad.svg" />
          <span class="text"
            >{{
              Math.ceil((MayMoodCount["verysad"] / MayMoodCount["sum"]) * 100)
            }}%</span
          >
          <div
            class="verysadlong"
            :style="{
              width:
                (MayMoodCount['verysad'] / MayMoodCount['sum'] + 0.05) * 190 +
                'px',
            }"
          >
            t
          </div>
          <span class="text">{{ MayMoodCount["verysad"] }}</span>
        </div>
      </div>
      <div class="history_title">本月日記</div>
      <div v-for="n in MayDate" :key="n">
        <div class="diarybox">
          <b-container>
            <b-row style="padding-top: 10px">
              <b-col cols="3" style="padding-top: 0px; text-align: center">
                <span class="text_date">5/{{ n }} </span>
              </b-col>
              <b-col cols="9" style="text-align: left">
                <span class="text_date"> {{ MayTitle[n] }}</span>
              </b-col>
            </b-row>
            <b-row style="padding-top: 10px">
              <b-col
                align-self="start"
                cols="3"
                style="padding-top: 0px; text-align: top"
              >
                <img
                  v-if="MayMood[n].indexOf('小確幸') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-happy.svg"
                />
                <img
                  v-if="MayMood[n].indexOf('開心') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-very-happy.svg"
                />
                <img
                  v-if="MayMood[n].indexOf('平靜') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-neutral.svg"
                />
                <img
                  v-if="MayMood[n].indexOf('有點糟') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-sad.svg"
                />
                <img
                  v-if="MayMood[n].indexOf('好難過') != -1"
                  class="mood"
                  src="@/yo_0613/Aicons_face-very-sad.svg"
                />
              </b-col>
              <b-col align-self="start" cols="9" style="text-align: left">
                <div class="text2">遇到的事件/想法</div>
                <div class="text3">{{ MayText1[n] }}</div>
                <div class="text2">處理方式</div>
                <div class="text3">{{ MayText2[n] }}</div>
              </b-col>
            </b-row>
          </b-container>
          <div></div>
        </div>
      </div>
    </div>

    <Footer showMood="true" />
  </div>
</template>
<style scoped>
.text3 {
  /* 內文3 */

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  color: #5c5c5c;
}
.text2 {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;

  color: #979797;
  padding-top: 15px;
}
.diarybox .mood {
  height: 44.16666793823242px;
  width: 47.11111831665039px;
  border-radius: 0px;
  margin-left: -5px;
  margin-top: 20px;
}
.text_date {
  height: 22px;
  width: 100px;

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #5c5c5c;
}
.diarybox {
  position: relative;
  margin-left: 24px;
  width: 327px;
  height: auto;

  /* 淺灰 */

  border: 1px solid #c7c7c7;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.veryhappylong {
  height: 8px;
  background: #ffcbbf;
  border-radius: 11px;
  color: rgb(0, 0, 0, 0);
  display: inline-block;
}
.happylong {
  height: 8px;
  background: #ffe4af;
  border-radius: 11px;
  color: rgb(0, 0, 0, 0);
  display: inline-block;
}
.verysadlong {
  height: 8px;
  background: #b1c3f2;
  border-radius: 11px;
  color: rgb(0, 0, 0, 0);
  display: inline-block;
}
.sadlong {
  height: 8px;
  background: #bbdaff;
  border-radius: 11px;
  color: rgb(0, 0, 0, 0);
  display: inline-block;
}
.neutrallong {
  height: 8px;
  background: #dcf3a9;
  border-radius: 11px;
  color: rgb(0, 0, 0, 0);
  display: inline-block;
}
.mood_count_box .text {
  width: 27px;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  color: #979797;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
}
.mood_count_box {
  margin-top: 5px;
  margin-left: 24px;
  height: 228px;
  width: 327px;
  background: #ffffff;
  /* 漸層_綠 */

  border: 3px solid #96fbc4;
  box-sizing: border-box;
  border-radius: 10px;
  padding-top: 15px;
  padding-left: 30px;
  vertical-align: center;
}
.mood_box {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.history_title {
  margin-top: 25px;
  margin-left: 24px;

  /* 內文2 */

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  /* 深灰 */

  color: #5c5c5c;
}
.choose_month {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  vertical-align: center;

  text-align: center;

  /* 深灰 */

  color: #5c5c5c;
}
.chooseMonthBox {
  width: 250px;
  text-align: center;
  vertical-align: center;
  margin: 0 auto;
  padding-top: 18px;
}
.disable_arrow {
  filter: grayscale(100%);
}
</style>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "TreeHistory",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      ID: "",
      haveMay: false,
      month: 6,
      JuneMoodCount: {
        happy: 0,
        veryhappy: 0,
        neutral: 0,
        sad: 0,
        verysad: 0,
        sum: 0,
      },
      MayMoodCount: {
        happy: 0,
        veryhappy: 0,
        neutral: 0,
        sad: 0,
        verysad: 0,
        sum: 0,
      },
      JuneDate: [],
      MayDate: [],
      JuneTitle: [],
      MayTitle: [],
      JuneMood: [],
      MayMood: [],
      JuneText1: [],
      MayText1: [],
      JuneText2: [],
      MayText2: [],
    };
  },
  created() {
    /* 記得改學號 */
    this.ID = this.$store.state.userName;

    if (this.ID != "") {
      /* 確認有哪些天有寫日記,是否要顯示5月樹,現在只有兩種樹 */
      this.$http
        .post("/api/checkDiaryDate", {
          id: this.ID,
        })
        .then((res) => {
          var i;
          var Jset = new Set();
          var Mset = new Set();
          for (i = 0; i < res.body.length; i++) {
            //console.log(res.body[i].date)
            if (res.body[i].date.indexOf("2021-05") != -1) {
              this.haveMay = true;
              var day = parseInt(res.body[i].date.substr(8, 2), 10);
              Mset.add(day);

              this.MayTitle[day] = res.body[i].eventname;
              this.MayMood[day] = res.body[i].mood;
              this.MayText1[day] = res.body[i].course;
              this.MayText2[day] = res.body[i].diaryresult;

              if (res.body[i].mood.indexOf("好難過") != -1) {
                this.MayMoodCount.verysad++;
                this.MayMoodCount.sum++;
              } else if (res.body[i].mood.indexOf("有點糟") != -1) {
                this.MayMoodCount.sad++;
                this.MayMoodCount.sum++;
              } else if (res.body[i].mood.indexOf("平靜") != -1) {
                this.MayMoodCount.neutral++;
                this.MayMoodCount.sum++;
              } else if (res.body[i].mood.indexOf("小確幸") != -1) {
                this.MayMoodCount.happy++;
                this.MayMoodCount.sum++;
              } else {
                this.MayMoodCount.veryhappy++;
                this.MayMoodCount.sum++;
              }
            }

            if (res.body[i].date.indexOf("2021-06") != -1) {
              var day = parseInt(res.body[i].date.substr(8, 2), 10);
              Jset.add(day);

              this.JuneTitle[day] = res.body[i].eventname;
              this.JuneTitle[day] = res.body[i].eventname;
              this.JuneMood[day] = res.body[i].mood;
              this.JuneText1[day] = res.body[i].course;
              this.JuneText2[day] = res.body[i].diaryresult;

              if (res.body[i].mood.indexOf("好難過") != -1) {
                this.JuneMoodCount.verysad++;
                this.JuneMoodCount.sum++;
              } else if (res.body[i].mood.indexOf("有點糟") != -1) {
                this.JuneMoodCount.sad++;
                this.JuneMoodCount.sum++;
              } else if (res.body[i].mood.indexOf("平靜") != -1) {
                this.JuneMoodCount.neutral++;
                this.JuneMoodCount.sum++;
              } else if (res.body[i].mood.indexOf("小確幸") != -1) {
                this.JuneMoodCount.happy++;
                this.JuneMoodCount.sum++;
              } else {
                this.JuneMoodCount.veryhappy++;
                this.JuneMoodCount.sum++;
              }
            }
          }
          this.JuneDate = Array.from(Jset).sort(function (a, b) {
            return a - b;
          });
          this.MayDate = Array.from(Mset).sort(function (a, b) {
            return a - b;
          });
          console.log("TT" + this.JuneTitle);
        });
    }
  },
  methods: {
    lastmonth: function () {
      if (this.haveMay) {
        this.$refs.Larrow.classList.add("disable_arrow");
        this.$refs.Rarrow.classList.remove("disable_arrow");
        this.month = 5;
      }
    },
    nextmonth: function () {
      this.$refs.Rarrow.classList.add("disable_arrow");
      this.$refs.Larrow.classList.remove("disable_arrow");
      this.month = 6;
    },
  },
};
</script>