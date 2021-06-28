<template>
  <div>
    <Nav showBackArrow="true" showText="true" navText="新增心情日記" />
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      style="
        position: fixed;
        left: 50%;
        width: 260px;
        margin-left: -130px;
        text-align: center;
        font-size: 14px;
        margin-top: 10px;
      "
    >
      日記中有些部分遺漏了呢!
    </b-alert>
    <div class="background">
      <div style="padding-left: 6.4vw; padding-right: 6.4vw">
        <div class="top_text">回顧一天，選出一件最適合紀錄的心情事件吧！</div>
        <!--事件名稱-->
        <div>
          <div class="icon"><img src="@/assets/svg/icon_diary_pen.svg" /></div>
          <input
            id="intput_event_name"
            type="text"
            placeholder="事件名稱"
            autocomplete="off"
          />
        </div>
        <!--日期-->
        <div class="datebox" style="margin-top: 15px">
          <div class="icon">
            <img src="@/assets/svg/icon_diary_schedule.svg" />
          </div>
          <input
            class="form-date__input"
            type="date"
            id="input-date"
            name="input-date-start"
            v-bind:value="today"
          />
          <div class="icon"><img src="@/yo_0613/diary_category.svg" /></div>
          <select id="category">
            <option style="color: #c7c7c7" value="">請選擇類別</option>
            <option value="學業">學業</option>
            <option value="人際">人際</option>
            <option value="感情">感情</option>
            <option value="家庭">家庭</option>
            <option value="工作">工作</option>
            <option value="其他">其他</option>
          </select>
        </div>

        <!--心情評分-->
        <form id="rating">
          <div class="icon">
            <img src="@/assets/svg/icon_diary_rating_mood.svg" />
          </div>
          <input
            type="radio"
            id="very-happy"
            name="emoji_rating"
            value="開心"
          />
          <label for="very-happy">開心</label>

          <input type="radio" id="happy" name="emoji_rating" value="小確幸" />
          <label for="happy">小確幸</label>

          <input type="radio" id="neutral" name="emoji_rating" value="平靜" />
          <label for="neutral">平靜</label>

          <input type="radio" id="sad" name="emoji_rating" value="有點糟" />
          <label for="sad">有點糟</label>

          <input
            type="radio"
            id="very-sad"
            name="emoji_rating"
            value="好難過"
          />
          <label for="very-sad">好難過</label>
        </form>
        <!--事情的經過-->
        <div class="datebox" style="margin-top: 25px">
          <div class="icon">
            <img src="@/assets/svg/icon_diary_schedule.svg" />
          </div>
          <span class="text">事情的經過/想法</span>
        </div>
        <textarea
          id="event_process"
          placeholder="請輸入內容"
          autocomplete="off"
        ></textarea>

        <!--事情的結果-->
        <div class="datebox" style="margin-top: 15px">
          <div class="icon">
            <img src="@/assets/svg/icon_diary_schedule.svg" />
          </div>
          <span class="text">結果/處理方式</span>
        </div>
        <textarea
          id="event_result"
          placeholder="請輸入內容"
          autocomplete="off"
        ></textarea>
      </div>

      <!--送出按鈕/取消按鈕-->
      <b-container style="margin-top: 10px">
        <b-row class="text-center">
          <b-col>
            <div class="btn_submit" @click="showIFtreeHole">送出</div>
          </b-col>
          <b-col>
            <div class="btn_cancel" @click="backMood">取消</div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!--是否要發佈到世界樹洞的跳出視窗-->
    <div id="infoBox" ref="infoBox" class="noInfo">
      <div class="treeHoleBox">
        <img id="cancel" @click="cancel" src="@/yo_0613/diary_cancel.svg" />
        <div class="title">是否要同時發布到世界樹洞？</div>
        <div class="text">若是，請完成以下內容，若否，則可跳過此步驟</div>
        <div class="additionalbox">
          <img sytle="inline-block" src="@/yo_0613/diary_user_icon.svg" />
          <div class="text_no">匿名樹友 #{{ anonymous_no }}</div>
          <textarea
            id="input_anoymous"
            placeholder="請補充想與他人交流的問題內容，想寫什麼都可以，請盡量發揮！"
            autocomplete="off"
          ></textarea>
        </div>
        <div class="text" style="top: 60px">
          發佈到樹洞可與他人交流問題並獲得一枚點數唷！
        </div>
        <b-container style="margin-top: 67px">
          <b-row class="text-center">
            <b-col>
              <div
                class="btn_submit"
                @click="clickSubmit('y')"
                style="width: 125px"
              >
                確認發布
              </div>
            </b-col>
            <b-col>
              <div
                class="btn_cancel"
                @click="clickSubmit('n')"
                style="width: 125px"
              >
                略過發布
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<style scoped>
#input_anoymous {
  margin-top: 5px;
  resize: none;
  width: 100%;
  border: none;
}
.additionalbox .text_no {
  display: inline-block;
  position: relative;
  top: 2px;

  /* 內文3 */

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */

  /* 深灰 */

  color: #5c5c5c;
}
.additionalbox {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 14px;
  position: relative;
  width: 275px;
  height: 266px;
  left: calc(50% - 275px / 2 + 0.5px);
  top: 44px;

  background: #ffffff;
  border: 1px solid #20e2d7;
  box-sizing: border-box;
  border-radius: 20px;
}
.treeHoleBox .text {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-size: 12px;
  top: 35px;
  position: relative;

  text-align: center;

  /* 深灰 */

  color: #5c5c5c;
}
.treeHoleBox .title {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  top: 32px;
  position: relative;

  text-align: center;

  /* 深灰 */

  color: #5c5c5c;
}
.showInfo {
  z-index: 100;
  display: block;
}
.noInfo {
  display: none;
}
#cancel {
  position: absolute;
  width: 16px;
  height: 16px;
  right: 15px;
  top: 15px;
}
.treeHoleBox {
  position: absolute;
  width: 312px;
  height: 454px;
  left: 32px;
  top: 117px;

  background: #ffffff;
  border-radius: 20px;
}
#infoBox {
  position: fixed;
  width: 375px;
  height: 687px;
  left: 0px;
  top: 0px;

  background: rgba(27, 27, 27, 0.5);
}
select {
  padding-left: 15px;
  display: inline;
  background: linear-gradient(136.56deg, #ffffff -16.84%, #ffffff 102.5%);
  box-shadow: inset -3px -4px 8px rgba(255, 255, 255, 0.2),
    inset 3px 4px 10px rgba(54, 116, 101, 0.1);

  /*使用 border-image 最大的問題在於，設置的 border-radius 會失效。 */
  background: linear-gradient(136.56deg, #ffffff -16.84%, #ffffff 102.5%)
      padding-box,
    /*this is your grey background*/
      linear-gradient(
        127.69deg,
        #c3dad2 -23.43%,
        rgba(227, 227, 227, 0.22) 105.04%
      )
      border-box;

  border: 1px solid transparent;
  border-radius: 10px;
  display: inline-block;
  width: 126px;
  height: 38px;

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;

  /* 淺灰 */
  color: #5c5c5c;
}
option {
  background: linear-gradient(136.56deg, #ffffff -16.84%, #ffffff 102.5%);
  box-shadow: inset -3px -4px 8px rgba(255, 255, 255, 0.2),
    inset 3px 4px 10px rgba(54, 116, 101, 0.1);

  /*使用 border-image 最大的問題在於，設置的 border-radius 會失效。 */
  background: linear-gradient(136.56deg, #ffffff -16.84%, #ffffff 102.5%)
      padding-box,
    /*this is your grey background*/
      linear-gradient(
        127.69deg,
        #c3dad2 -23.43%,
        rgba(227, 227, 227, 0.22) 105.04%
      )
      border-box;

  border: 1px solid transparent;
  border-radius: 10px;
  display: inline-block;
  width: 126px;
  height: 38px;

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #5c5c5c;
}
.top_text {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  text-align: center;

  /* 深灰 */

  color: #5c5c5c;
  margin-bottom: 15px;
}
a {
  text-decoration: none;
}
.btn_cancel {
  height: 43px;
  width: 152px;
  background: #ffffff;
  border: 1px solid #20e2d7;
  box-sizing: border-box;
  box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
  border-radius: 33px;

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 43px;
  color: #8e8e8e;
  margin: 0 auto;
}
.btn_submit {
  height: 43px;
  width: 152px;
  background: #20e2d7;
  box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
  border-radius: 33px;

  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 43px;
  color: #ffffff;
  margin: 0 auto;
}
.background textarea {
  margin-top: 8px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;

  resize: none;
  width: 100%;
  height: 121px;
  background: linear-gradient(136.56deg, #ffffff -16.84%, #ffffff 102.5%);
  box-shadow: inset -3px -4px 8px rgba(255, 255, 255, 0.2),
    inset 3px 4px 10px rgba(54, 116, 101, 0.1);

  /*使用 border-image 最大的問題在於，設置的 border-radius 會失效。 */
  background: linear-gradient(136.56deg, #ffffff -16.84%, #ffffff 102.5%)
      padding-box,
    /*this is your grey background*/
      linear-gradient(
        127.69deg,
        #c3dad2 -23.43%,
        rgba(227, 227, 227, 0.22) 105.04%
      )
      border-box;

  border: 1px solid transparent;
  border-radius: 10px;
  display: inline-block;
}
.text {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  vertical-align: bottom;
  /* 深灰 */

  color: #5c5c5c;
}

.datebox {
  position: relative;
}
#input-date {
  height: 38px;
  width: 118px;
  text-align: center;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  color: #5c5c5c;
}
/* 隱藏原本的icon */
.form-date__input[type="date"]::-webkit-calendar-picker-indicator {
  /* 測試用 width: 170px;*/

  /* 正式 */
  width: 0px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  background: 0 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  pointer-events: auto;
}
/*webkit瀏覽器專用*/
::-webkit-input-placeholder {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #c7c7c7;
}
/*Firefox 4-18瀏覽器專用*/
input::-moz-placeholder {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #c7c7c7;
}
/*Firefox 19+瀏覽器專用*/
input::-moz-placeholder {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #c7c7c7;
}
/*IE10瀏覽器專用*/
:-ms-input-placeholder {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #c7c7c7;
}
#intput_event_name {
  height: 38px;
  width: 280px;
  padding-left: 15px;
}
input {
  background: linear-gradient(136.56deg, #ffffff -16.84%, #ffffff 102.5%);
  box-shadow: inset -3px -4px 8px rgba(255, 255, 255, 0.2),
    inset 3px 4px 10px rgba(54, 116, 101, 0.1);

  /*使用 border-image 最大的問題在於，設置的 border-radius 會失效。 */
  background: linear-gradient(136.56deg, #ffffff -16.84%, #ffffff 102.5%)
      padding-box,
    /*this is your grey background*/
      linear-gradient(
        127.69deg,
        #c3dad2 -23.43%,
        rgba(227, 227, 227, 0.22) 105.04%
      )
      border-box;

  border: 1px solid transparent;
  border-radius: 10px;
  display: inline-block;
}
.icon {
  display: inline-block;
  margin-right: 8px;
  width: 17px;
  height: auto;
  margin-left: 5px;
}
.background {
  height: 637px;
  background: linear-gradient(
    180deg,
    #ffffff 42.2%,
    #9ffbdf 203.98%,
    #40e9d2 270.1%
  );
  overflow: hidden;

  padding-top: 15px;
}

#rating label {
  position: relative;
  top: 12px;
  padding-top: 23px;
  width: 50px;
  height: 45px;
  vertical-align: bottom;
  margin-right: 5px;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 45px;
  text-align: center;

  /* 深灰 */

  color: #5c5c5c;
}
#very-happy + label {
  background: url("../yo_0613/icons_face-very-happy.svg") no-repeat center;
  background-size: 26px 25px;
}
#very-happy + label:hover {
  background: url("../yo_0613/Aicons_face-very-happy.svg") no-repeat center;
  background-size: 26px 25px;
}
#very-happy:checked + label {
  background: url("../yo_0613/Aicons_face-very-happy.svg") no-repeat center;
  background-size: 26px 25px;
}
#happy + label {
  background: url("../yo_0613/icons_face-happy.svg") no-repeat center;
  background-size: 26px 25px;
}
#happy + label:hover {
  background: url("../yo_0613/Aicons_face-happy.svg") no-repeat center;
  background-size: 26px 25px;
}
#happy:checked + label {
  background: url("../yo_0613/Aicons_face-happy.svg") no-repeat center;
  background-size: 26px 25px;
}

#neutral + label {
  background: url("../yo_0613/icons_face-neutral.svg") no-repeat center;
  background-size: 26px 25px;
}
#neutral + label:hover {
  background: url("../yo_0613/Aicons_face-neutral.svg") no-repeat center;
  background-size: 26px 25px;
}
#neutral:checked + label {
  background: url("../yo_0613/Aicons_face-neutral.svg") no-repeat center;
  background-size: 26px 25px;
}

#sad + label {
  background: url("../yo_0613/icons_face-sad.svg") no-repeat center;
  background-size: 26px 25px;
}
#sad + label:hover {
  background: url("../yo_0613/Aicons_face-sad.svg") no-repeat center;
  background-size: 26px 25px;
}
#sad:checked + label {
  background: url("../yo_0613/Aicons_face-sad.svg") no-repeat center;
  background-size: 26px 25px;
}

#very-sad + label {
  background: url("../yo_0613/icons_face-very-sad.svg") no-repeat center;
  background-size: 26px 25px;
}
#very-sad + label:hover {
  background: url("../yo_0613/Aicons_face-very-sad.svg") no-repeat center;
  background-size: 26px 25px;
}
#very-sad:checked + label {
  background: url("../yo_0613/Aicons_face-very-sad.svg") no-repeat center;
  background-size: 26px 25px;
}
input[type="text"]:focus {
  outline: none;
}
textarea:focus {
  outline: none;
}

input[type="radio"] {
  display: none;
}
</style>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Feeling",
  methods: {
    showIFtreeHole: function () {

      var name = $("#intput_event_name").val();
      var category = $("#category").val();
      var emoji = $('input:radio[name="emoji_rating"]:checked').val();
      var text1 = $("#event_process").val();
      var text2 = $("#event_result").val();
      if (name == "") {
        console.log("沒寫事件名稱");
        this.dismissCountDown = this.dismissSecs;
      } else if (category == "") {
        console.log("沒選類別");
        this.dismissCountDown = this.dismissSecs;
      } else if (emoji == null) {
        console.log("沒選表情");
        this.dismissCountDown = this.dismissSecs;
      } else if (text1 == "") {
        console.log("沒寫過程");
        this.dismissCountDown = this.dismissSecs;
      } else if (text2 == "") {
        console.log("沒寫結果");
        this.dismissCountDown = this.dismissSecs;
      } else {
        this.$refs.infoBox.classList.remove("noInfo");
        this.$refs.infoBox.classList.add("showInfo");
      }
    },
    backMood: function () {
      /* 取消寫日記 */
      this.$router.push({
        name: "MoodTree",
      });
    },
    cancel: function () {
      this.$refs.infoBox.classList.remove("showInfo");
      this.$refs.infoBox.classList.add("noInfo");
    },
    clickSubmit: function (isPublic) {

      var id = this.$store.state.userName;
      var name = $("#intput_event_name").val();
      var category = $("#category").val();
      var emoji = $('input:radio[name="emoji_rating"]:checked').val();
      var date = $("#input-date").val();
      var text1 = $("#event_process").val();
      var text2 = $("#event_result").val();
      if (isPublic == "y") {
        var addtext = $("#input_anoymous").val();
      } else {
        var addtext = "";
      }
      var number = this.anonymous_no;
      var now = new Date();
      //如果小于9，前面补0
      var hour = ("0" + now.getHours()).slice(-2);
      var minute = ("0" + (now.getMinutes() + 1)).slice(-2);
      //拼装完整
      var time = hour + ":" + minute;

      if (name == "") {
        console.log("沒寫事件名稱");
        this.dismissCountDown = this.dismissSecs;
      } else if (category == "") {
        console.log("沒選類別");
        this.dismissCountDown = this.dismissSecs;
      } else if (emoji == null) {
        console.log("沒選表情");
        this.dismissCountDown = this.dismissSecs;
      } else if (text1 == "") {
        console.log("沒寫過程");
        this.dismissCountDown = this.dismissSecs;
      } else if (text2 == "") {
        console.log("沒寫結果");
        this.dismissCountDown = this.dismissSecs;
      } else {
        /* 完整填寫日記 */
        console.log(id);
        console.log(name);
        console.log(category);
        console.log(emoji);
        console.log(text1);
        console.log(text2);
        console.log(date);
        console.log(time);
        this.$http
          .post("/api/writeDiary", {
            id: this.$store.state.userName,
            name: name,
            category: category,
            emoji: emoji,
            date: date,
            text1: text1,
            text2: text2,
            time: time,
            isPublic: isPublic,
            addtext: addtext,
            number: number,
          })
          .then((res) => {
            console.log("已將日記成功輸入資料庫");
            this.$router.push({
              name: "MoodTree",
            });
          });
      }
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
  data() {
    return {
      today: "",
      dismissSecs: 3,
      dismissCountDown: 0,
      anonymous_no: -1,
      ID: "",
      canWater: false,
    };
  },
  created() {
    var now = new Date();
    //格式化日，如果小于9，前面补0
    var day = ("0" + now.getDate()).slice(-2);
    //格式化月，如果小于9，前面补0
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    //拼装完整日期格式
    this.today = now.getFullYear() + "-" + month + "-" + day;
    this.ID = this.$store.state.userName;
    console.log(this.today);
    this.anonymous_no = this.$store.state.number;
  },
  components: {
    Nav,
  },
};
</script>