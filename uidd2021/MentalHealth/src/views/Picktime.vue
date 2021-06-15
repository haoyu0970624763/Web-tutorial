<template>
  <div class="desktop" :class="{ darken: seen }">
    <div id="namebar">
      <Nav showBackArrow showText navText="挑選日期與時間" destination="analysis" />
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
    <div>{{this.pickID}}</div>
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
      //
      /*userID:"F74072120",
          year:2021,
          months:5,
          day:15,
          time:9,  // it means 9:00 to 11:00
          time2:11 ,// it means 11:00 to 13:00
          teacher:"teacher1",*/
      //
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
        photostyle: {
          backgroundImage: "url(" + require("@/assets/svg/photo.svg") + ")",
        },
        maximtext: "“ 抱持對人性的理解，開創出人生的新解 ”",
        gendercontent: "女",
        expertcontent:
          "情緒管理、生涯探索與規劃、性別議題、情感探索與經驗、人際適應",
        talkstylecontent: "place holder",
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
        for (var k = 0; k < 3; k++) {
          if (k == 1) {
            var n =
              this.pickval == 1
                ? Math.floor(Math.random() * 5) + 2
                : this.pickval;
            this.availabletimelist.push({
              avaltime: "14:00-15:00",
              name: this.namelist[n],
              isClick: false,
            });
          } else {
            var n =
              this.pickval == 1
                ? Math.floor(Math.random() * 5) + 2
                : this.pickval;
            var t1 = Math.floor(Math.random() * 5) + 7 + 5 * k;
            var t2 = t1 + 1;
            t1 = String(t1) + ":00";
            t2 = String(t2) + ":00";
            var t = [t1, t2];
            this.availabletimelist.push({
              avaltime: t.join("-"),
              name: this.namelist[n],
              isClick: false,
            });
          }
        }
      }
    },

    pickval: function (val, oldVal) {
      this.dateselect = "";
    },
  },
  methods: {
    setavailabledatelist() {
      for (var i = 1; i < 7; i++) {
        for (var j = 0; j < 5; j++) {
          var y = "2021";
          var m = "06";
          var d = String(Math.floor(Math.random() * (30 - 1 + 1)) + 10);
          var ymd = [y, m, d];
          this.availabledatelist[this.namelist[i]].push(ymd.join("-"));
        }
        this.availabledatelist[this.namelist[i]].push("2021-06-21");
      }
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
          this.description.photostyle = i.photo;
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
      this.$http
        .post("/api/book", {
          userID: "F74072120",
          year: this.reservationselect.year,
          months: this.reservationselect.months,
          day: this.reservationselect.day,
          time: this.reservationselect.timeselect, // it means 9:00 to 11:00
          teacher: "teacher1",
        })
        .then((res) => {
          this.$router.push({
            name: "Reservationsuccess",
            params: {
              date: [
                this.reservationselect.months.replace("0", ""),
                this.reservationselect.day,
              ].join("/"),
              time: this.reservationselect.timeselect,
              name: this.reservationselect.personselect,
            },
          });
        });
      /*this.$router.push({
        name: 'Reservationsuccess', 
        params: {
          date: [this.reservationselect.months.replace('0',''),this.reservationselect.day].join('/'), 
          time: this.reservationselect.timeselect, 
          name: this.reservationselect.personselect
        }
      });*/
    },
  },
  created() {
    this.getexpertsort();
    this.setavailabledatelist();
  },
  mounted() {
    this.getpickid();
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@font-face {
  font-family: "Taipei Sans TC Beta";
  src: url("../assets/font/TaipeiSansTCBeta.ttf");
}
.desktop {
  position: absolute;
  display: block;
  width: 375px;
  height: 687px;
  overflow: hidden;
}
.darken {
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: darken;
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
  top: 240px;
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
}
#photo {
  position: absolute;
  width: 83px;
  height: 95px;
  left: 30px;
  top: 47px;
  background-repeat: no-repeat;
  background-size: 83px 83px;
  background-position: center;
}
#maxim {
  position: absolute;
  width: 127px;
  height: 36px;
  left: 126px;
  top: 76px;
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