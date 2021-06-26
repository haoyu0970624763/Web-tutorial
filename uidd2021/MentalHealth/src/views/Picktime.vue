<template>
  <div class="desktop">
    <div class="darken" v-show="seen"></div>
    <div id="namebar">
      <Nav showBackArrow="true" showText navText="挑選日期與時間" destination="analysis" />
    </div>
    <div id="pickbar">
      <div id="innerpickbar">
        <div
          class="photobox"
          id="b1"
          :class="{ photoboxB: picktimeisactive }"
        >
          <div class="photocircle" :class="{ photocircleB: picktimeisactive }" @click="clickpicktime">
            <div class="photocircleinner" id="c1"></div>
          </div>
          <div class="phototext">挑時間</div>
        </div>
        <div class="photobox" v-for="item in expert" :class="{ photoboxB: item.isActive }">
          <div class="photocircle" :class="{ photocircleB: item.isActive }" @click="clickphoto(item.id)">
            <div class="photocircleinner" :style="item.photo"></div>
          </div>
          <div class="phototext">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div id="splitline"></div>


    <div id="calendar">
      <b-calendar
        v-model="dateselect"
        :hide-header="true"
        :date-disabled-fn="dateDisabled"
        :date-info-fn="dateClass"
        v-if="!seen"
      ></b-calendar>
    </div>
    <div id="response">
      <div id="describe">請點選上方藍色日期，查看心理師有空的時間</div>
      <div id="container" v-if="picktimeisactive">
        <div
          class="availablereservation"
          v-for="item in availabletimelist"
          @click="setselect(item)"
          :class="{ Clickstyle: item.isClick }"
        >
          {{ item.avaltime }} {{ item.name }}
        </div>
      </div>
      <div id="container" v-else>
        <div
          class="availabletime"
          v-for="item in availabletimelist"
          @click="setselect(item)"
          :class="{ Clickstyle: item.isClick }"
        >
          {{ item.avaltime }}
        </div>
      </div>
      <div
        class="nextstep"
        :class="{ Clickstyle: nextavailable }"
        @click="nstep"
      >
      下一步
      </div>
    </div>
    <transition name="descript">
      <div class="Description" v-if="seen">
        <div id="photo" :style="description.photostyle"></div>
        <div id="descripname">{{ description.name }}</div>
        <div id="maxim">{{ description.maximtext }}</div>
        <button type="button" id="closebtn" @click="closedescription"></button>
        <div class="contenttitle" id="gender">性別</div>
        <div class="contenttitle" id="expert">擅長議題</div>
        <div class="contenttitle" id="talkstyle">諮商風格</div>
        <div class="content" id="genderc">{{ description.gendercontent }}</div>
        <div class="content" id="expertc">{{ description.expertcontent }}</div>
        <div class="content" id="talkstylec">
          {{ description.talkstylecontent }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Picktime",
  components: {
    Nav,
  },
  data() {
    return {
      BookInfo: "",
      reservationselect: {
        year: "",
        months: "",
        day: "",
        timeselect: "",
        personselect: "",
      },
      namelist: {
        1: "挑時間",
        2: "許欣宜",
        3: "林宜華",
        4: "陳以玟",
        5: "王浩偉",
        6: "陳俊宇",
      },
      dateselect: "",
      pickval: 0,
      seen: false,
      nextavailable: false,
      picktimeisactive: false,
      expert: [],
      description: {
        photostyle: {},
        name: "",
        maximtext: "",
        gendercontent: "",
        expertcontent: "",
        talkstylecontent: "",
      },
      availabledatelist: {
        挑時間: [],
        許欣宜: [],
        林宜華: [],
        陳以玟: [],
        王浩偉: [],
        陳俊宇: [],
      },
      availabletimelist: [],
    };
  },
  watch: {
    dateselect: function (val, oldVal) {
      this.nextavailable = false;
      this.reservationselect.timeselect = "";
      this.reservationselect.year = "";
      this.reservationselect.months = "";
      this.reservationselect.day = "";
      this.availabletimelist = [];
      if (this.dateselect != "") {
        if(this.pickval != 1) {
          var y,m,d;
          [y,m,d] = this.dateselect.split('-');
          if(Number(m) < 10) {
            m = m.replace("0", "");
          }
          if(Number(d) < 10) {
            d = d.replace("0", "");
          }
          let timelist = this.BookInfo.filter((item, index) => {
            if(y == item.Year && m == item.months && d == item.day && item.user_id == "" && item.mentalName == this.namelist[this.pickval]) {
              return true;
            }
          })
          timelist.forEach((i) => {
            this.availabletimelist.push({
              avaltime: i.time,
              name: this.namelist[this.pickval],
              isClick: false,
            });
          })
        }
        else {
          var y,m,d;
          [y,m,d] = this.dateselect.split('-');
          if(Number(m) < 10) {
            m = m.replace("0", "");
          }
          if(Number(d) < 10) {
            d = d.replace("0", "");
          }
          let timelist = this.BookInfo.filter((item, index) => {
            if(y == item.Year && m == item.months && d == item.day && item.user_id == "") {
              return true;
            }
          })
          timelist.forEach((i) => {
            this.availabletimelist.push({
              avaltime: i.time,
              name: i.mentalName,
              isClick: false,
            });
          })
        }
      }
    },
    pickval: function (val, oldVal) {
      this.dateselect = "";
    },
  },
  methods: {
    setavailabledatelist() {
      this.BookInfo.forEach((item) => {
        if(item.user_id == "") {
          var y = item.Year;
          if(Number(item.months) < 10) {
            var m = "0" + item.months;
          }
          else {
            var m = item.months;
          }
          if(Number(item.day) < 10) {
            var d = "0" + item.day;
          }
          else {
            var d = item.day;
          }
          var ymd = [y, m, d];
          this.availabledatelist[item.mentalName].push(ymd.join("-"));
          this.availabledatelist['挑時間'].push(ymd.join("-"));
        }
      });
    },
    setselect(si) {
      this.availabletimelist.forEach((i) => {
        i.isClick = false;
      });
      this.nextavailable = true;
      si.isClick = true;
      this.reservationselect.timeselect = si.avaltime;
      this.reservationselect.personselect = si.name;
      [
        this.reservationselect.year,
        this.reservationselect.months,
        this.reservationselect.day,
      ] = this.dateselect.split("-");
    },
    pickbarscroll(pv) {
      this.clickSrollLeft("pickbar", (pv - 1) * 93.75);
    },
    clickpicktime() {
      this.picktimeisactive = true;
      this.expert.forEach((i) => {
        i.isActive = false;
      });
      this.seen = false;
      this.pickbarscroll(1);
      this.pickval = 1;
      this.reservationselect.personselect = "";
    },
    clickphoto(id) {
      this.picktimeisactive = false;
      this.expert.forEach((i) => {
        i.isActive = false;
        if (i.id == id) {
          i.isActive = true;
          this.description.photostyle = i.descripphoto;
          this.description.name = i.name;
          this.description.maximtext = i.maximtext;
          this.description.gendercontent = i.gendercontent;
          this.description.expertcontent = i.expertcontent;
          this.description.talkstylecontent = i.talkstylecontent;
          this.reservationselect.personselect = i.name;
        }
      });
      this.seen = true;
      this.pickbarscroll(id);
      this.pickval = id;
    },
    clickSrollLeft(Id, pos) {
      var timer;
      timer = setInterval(function () {
        var current = document.getElementById(Id).scrollLeft;
        if (current >= pos) {
          if (current - pos <= 1) {
            document.getElementById(Id).scrollLeft = pos;
            clearInterval(timer);
          } else {
            document.getElementById(Id).scrollLeft = current - 1;
          }
        } else {
          if (pos - current <= 1) {
            document.getElementById(Id).scrollLeft = pos;
            clearInterval(timer);
          } else {
            document.getElementById(Id).scrollLeft = current + 2;
          }
        }
      }, 1);
      //document.getElementById(Id).scrollLeft = pos;
    },
    closedescription() {
      this.seen = false;
    },
    dateDisabled(ymd, date) {
      if(this.pickval == 0) {
        return true;
      }
      if (
        this.availabledatelist[this.namelist[this.pickval]].indexOf(ymd) > -1
      ) {
        return false;
      } else {
        return true;
      }
    },
    dateClass(ymd, date) {
      return ["table-primary", "border-0", "rounded-circle"];
    },
    getexpertsort() {
      this.$store.state.mentalInfo.forEach((i) => {
        this.expert.push(i);
      });
    },
    getpickid() {
      var pickid = this.$store.state.mentalId;
      if (parseInt(pickid) == 1) {
        this.clickpicktime();
      } else {
        this.clickphoto(pickid);
      }
    },
    nstep() {
      this.$store.commit("setBookMonth", this.reservationselect.months);
      this.$store.commit("setBookDay", this.reservationselect.day);
      this.$store.commit("setBookTime", this.reservationselect.timeselect);
      this.$store.commit("setBookMental", this.reservationselect.personselect);
      if (
        this.$store.state.month != "" &&
        this.$store.state.day != "" &&
        this.$store.state.time != "" &&
        this.$store.state.mental != ""
      ) {
        this.$router.push({
          name: "Contactinformation",
        });
      }
    },
  },
  created() {
    this.getexpertsort();
    this.$http.post("/api/GetBookInfo", {}).then((res) => {
      this.BookInfo = res.body;
    }).then(()=>{
      this.setavailabledatelist();
    }).then(()=>{
      this.getpickid();
    })
  },
  mounted() {
    console.log("username:", this.$store.state.userName);
      //this.getpickid();
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
.darken {
  position: absolute;
  display: block;
  width: 375px;
  height: 687px;
  overflow: hidden;
  background: rgba(27, 27, 27, 0.5);
  background-blend-mode: darken;
  z-index: 1;
}
#namebar {
  width: 375px;
  height: 50px;
}
#pickbar {
  position: relative;
  width: 375px;
  height: 84px;
  overflow: scroll;
}
#pickbar::-webkit-scrollbar {
  display: none;
}
#innerpickbar {
  display: table;
  word-spacing: -1em;
  position: absolute;
  left: 0px;
  width: 843.75px;
  height: 84px;
}
.photobox {
  display: inline-block;
  width: 53px;
  height: 72px;
  margin-left: 40.75px;
  margin-top: 6px;
  opacity: 40%;
}
.photoboxB {
  opacity: 100%;
  background-blend-mode: normal;
}
#b1 {
  margin-left: 161px;
}
.photocircle {
  position: relative;
  width: 53px;
  height: 53px;
  border-radius: 53px;
  background: #c7c7c7;
}
.photocircleB {
  background: linear-gradient(
    180deg,
    #f9fea5 -100.8%,
    #96fbc4 10.62%,
    #20e2d7 126.79%
  );
  background-blend-mode: normal;
}
.photocircleinner {
  position: absolute;
  width: 49px;
  height: 49px;
  border-radius: 49px;
  left: 2px;
  top: 2px;
  filter: drop-shadow(5px 5px 25px rgba(204, 204, 204, 0.75));
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: 45px 45px;
  background-position: center;
}
#c1 {
  background-image: url("../assets/svg/photo1.svg");
  background-size: 24px 24px;
}
.phototext {
  font-family: Taipei Sans TC Beta;
  font-size: 13px;
  width: 53px;
  height: 18px;
  line-height: 18px;
  margin-top: 1px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #5c5c5c;
}
#splitline {
  width: 375px;
  height: 1px;
  background: #c7c7c7;
  opacity: 0.2;
}
#calendar {
  margin-top: 17px;
  width: 375px;
  height: 246px;
  text-align: center;
  overflow: scroll;
}
#calendar::-webkit-scrollbar {
  display: none;
}
#response {
  position: relative;
  width: 375px;
  height: 290px;
}
.descript-enter-active,
.descript-leave-active {
  transition: all 0.8s ease;
}
.descript-enter,
.descript-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
#describe {
  position: absolute;
  width: 284px;
  height: 18px;
  top: 5px;
  left: 46px;
  font-family: Taipei Sans TC Beta;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #c7c7c7;
}
#container {
  position: absolute;
  top: 33px;
  left: 16px;
  width: 342px;
  height: 178px;
  overflow: scroll;
}
#container::-webkit-scrollbar {
  display: none;
}
.availabletime {
  display: inline-block;
  overflow-wrap: normal;
  padding: 10px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: 15px;
  width: 127px;
  height: 42px;
  margin-left: 30px;
  font-family: Taipei Sans TC Beta;
  font-size: 15px;
  line-height: 20px;
  color: #5c5c5c;
  text-align: center;
  border: 1px solid #20e2d7;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px rgba(204, 204, 204, 0.75);
  border-radius: 10px;
}
.availablereservation {
  padding: 10px 25px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: 15px;
  width: 284px;
  height: 42px;
  margin-left: 30px;
  font-family: Taipei Sans TC Beta;
  font-size: 15px;
  line-height: 20px;
  color: #5c5c5c;
  text-align: center;
  border: 1px solid #20e2d7;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px rgba(204, 204, 204, 0.75);
  border-radius: 10px;
}
.nextstep {
  position: absolute;
  width: 284px;
  height: 43px;
  border-radius: 33px;
  left: 46px;
  top: 200px;
  font-family: Taipei Sans TC Beta;
  font-size: 16px;
  line-height: 43px;
  text-align: center;
  color: #ffffff;
  background: #c7c7c7;
  box-shadow: 0px 4px 17px -1px rgba(113, 113, 113, 0.51);
}
.Clickstyle {
  background: #20e2d7;
  color: #ffffff;
}
.Description {
  position: absolute;
  width: 284px;
  height: 332px;
  top: 140px;
  left: 46px;
  box-shadow: 5px 5px 25px rgba(204, 204, 204, 0.75);
  border-radius: 10px;
  background-color: #ffffff;
  z-index: 2;
}
#photo {
  position: absolute;
  width: 80px;
  height: 95px;
  left: 30px;
  top: 41px;
  background-repeat: no-repeat;
  background-size: 80px 95px;
  opacity: 0.8;
  border-radius: 6px;
}
#descripname {
  position: absolute;
  width: 127px;
  height: 20px;
  left: 126px;
  top: 41px;
  font-family: Taipei Sans TC Beta;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}
#maxim {
  position: absolute;
  width: 127px;
  height: 36px;
  left: 126px;
  top: 78px;
  font-family: Taipei Sans TC Beta;
  font-size: 13px;
  line-height: 18px;
}
#closebtn {
  position: absolute;
  background-image: url("../assets/svg/closeicon.svg");
  background-repeat: no-repeat;
  background-size: 14px 14px;
  width: 14px;
  height: 14px;
  left: 253px;
  top: 16px;
  outline: none;
  border: none;
  background-color: #ffffff;
}
.contenttitle {
  position: absolute;
  left: 30px;
  width: 222px;
  height: 20px;
  background: linear-gradient(180deg, #96fbc4 33.15%, #20e2d7 127.81%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: Taipei Sans TC Beta;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
}
#gender {
  height: 16px;
  top: 151px;
}
#expert {
  top: 193px;
}
#talkstyle {
  top: 257px;
}
.content {
  position: absolute;
  left: 30px;
  width: 222px;
  height: 18px;
  color: #5c5c5c;
  font-family: Taipei Sans TC Beta;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
}
#genderc {
  top: 167px;
}
#expertc {
  height: 36px;
  top: 213px;
}
#talkstylec {
  top: 277px;
}
</style>
