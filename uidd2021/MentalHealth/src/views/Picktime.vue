<template>
  <div class="desktop" :class="{ darken: seen }">
    <div id="namebar">
      <Nav showBackArrow showText navText="挑選日期與時間" />
    </div>
    <div id="pickbar">
      <div id="innerpickbar">
        <div
          class="photobox"
          id="b1"
          :class="{ photoboxB: isActive.a1 }"
          @click="clickphoto1"
        >
          <div class="photocircle" id="c1" :style="photo1"></div>
          <div class="phototext">挑時間</div>
        </div>
        <div
          class="photobox"
          id="b2"
          :class="{ photoboxB: isActive.a2 }"
          @click="clickphoto2"
        >
          <div class="photocircle" id="c2" :style="photo2"></div>
          <div class="phototext">陳陳陳</div>
        </div>
        <div
          class="photobox"
          id="b3"
          :class="{ photoboxB: isActive.a3 }"
          @click="clickphoto3"
        >
          <div class="photocircle" id="c3" :style="photo3"></div>
          <div class="phototext">陳陳陳</div>
        </div>
        <div
          class="photobox"
          id="b4"
          :class="{ photoboxB: isActive.a4 }"
          @click="clickphoto4"
        >
          <div class="photocircle" id="c4" :style="photo4"></div>
          <div class="phototext">陳陳陳</div>
        </div>
        <div
          class="photobox"
          id="b5"
          :class="{ photoboxB: isActive.a5 }"
          @click="clickphoto5"
        >
          <div class="photocircle" id="c5" :style="photo5"></div>
          <div class="phototext">陳陳陳</div>
        </div>
        <div
          class="photobox"
          id="b6"
          :class="{ photoboxB: isActive.a6 }"
          @click="clickphoto6"
        >
          <div class="photocircle" id="c6" :style="photo6"></div>
          <div class="phototext">陳陳陳</div>
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
      <div id="container" v-if="pickval === 1">
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
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'Picktime',
  components:{
    Nav,
  },
  data() {
    return {
      //
          userID:"F74072120",
          year:2021,
          months:5,
          day:15,
          time:9,  // it means 9:00 to 11:00
          time2:11 ,// it means 11:00 to 13:00
          teacher:"teacher1",
      //
      pickval: 0,
      dateselect: '',
      isActive:{
        a1: false,
        a2: false,
        a3: false,
        a4: false,
        a5: false,
        a6: false,
      },
      seen: false,
      timeselect: '',
      personselect: '',
      nextavailable: false,
      photo1: {
        backgroundImage: "url(" + require("@/assets/svg/photo1.svg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "24px 24px",
        backgroundPosition: "center",
      },
      photo2: {
        backgroundImage: "url(" + require("@/assets/svg/photo2.svg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "45px 45px",
        backgroundPosition: "center",
      },
      photo3: {
        backgroundImage: "url(" + require("@/assets/svg/photo3.svg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "45px 45px",
        backgroundPosition: "center",
      },
      photo4: {
        backgroundImage: "url(" + require("@/assets/svg/photo4.svg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "45px 45px",
        backgroundPosition: "center",
      },
      photo5: {
        backgroundImage: "url(" + require("@/assets/svg/photo5.svg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "45px 45px",
        backgroundPosition: "center",
      },
      photo6: {
        backgroundImage: "url(" + require("@/assets/svg/photo6.svg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "45px 45px",
        backgroundPosition: "center",
      },
      description: {
        photostyle: {
          backgroundImage: "url(" + require("@/assets/svg/photo.svg") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "83px 95px",
        },
        maximtext: '“ 抱持對人性的理解，開創出人生的新解 ”',
        gendercontent: '女',
        expertcontent: '情緒管理、生涯探索與規劃、性別議題、情感探索與經驗、人際適應',
        talkstylecontent: 'place holder',
      },
      availabledatelist: [],
      availabletimelist: [],
    };
  },
  watch: {
    dateselect: function(val, oldVal){
      this.nextavailable = false;
      this.timeselect = "";
      this.personselect = "";
      this.availabletimelist = [];
      if(this.dateselect != '')
      {
        var randm = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        for(var i = 0; i < randm; i++)
        {
          this.availabletimelist.push({avaltime: "9:00-10:00", name: "王王王", isClick: false});
        }
      }      
    },
    pickval: function(val, oldVal){
      this.availabledatelist = [];
      this.dateselect = '';
      var randm = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
      for(var i = 0; i < randm; i++)
      {
        var y = "2021";
        var m = "05";
        var d = String(Math.floor(Math.random() * (30 - 1 + 1)) + 10);
        var ymd = [y, m, d];
        this.availabledatelist.push(ymd.join('-'));
      }
    }
  },
  methods: {
    setselect(si) {
      this.availabletimelist.forEach(i=>{
        i.isClick = false;
      })
      this.nextavailable = true;
      si.isClick = true;
      this.timeselect = si.avaltime;
      this.personselect = si.name;
    },
    pickbarscroll(pv) {
      this.clickSrollLeft("pickbar", (pv - 1) * 95);
    },
    clickphoto1() {
      this.isActive.a1=true;
      this.isActive.a2=false;
      this.isActive.a3=false;
      this.isActive.a4=false;
      this.isActive.a5=false;
      this.isActive.a6=false;
      this.seen=false;
      this.pickbarscroll(1);
      this.pickval=1;
    },
    clickphoto2() {
      this.isActive.a1=false;
      this.isActive.a2=true;
      this.isActive.a3=false;
      this.isActive.a4=false;
      this.isActive.a5=false;
      this.isActive.a6=false;
      this.seen=true;
      this.pickbarscroll(2);
      this.pickval=2;
    },
    clickphoto3() {
      this.isActive.a1=false;
      this.isActive.a2=false;
      this.isActive.a3=true;
      this.isActive.a4=false;
      this.isActive.a5=false;
      this.isActive.a6=false;
      this.seen=true;
      this.pickbarscroll(3);
      this.pickval=3;
    },
    clickphoto4() {
      this.isActive.a1=false;
      this.isActive.a2=false;
      this.isActive.a3=false;
      this.isActive.a4=true;
      this.isActive.a5=false;
      this.isActive.a6=false;
      this.seen=true;
      this.pickbarscroll(4);
      this.pickval=4;
    },
    clickphoto5() {
      this.isActive.a1=false;
      this.isActive.a2=false;
      this.isActive.a3=false;
      this.isActive.a4=false;
      this.isActive.a5=true;
      this.isActive.a6=false;
      this.seen=true;
      this.pickbarscroll(5);
      this.pickval=5;
    },
    clickphoto6() {
      this.isActive.a1=false;
      this.isActive.a2=false;
      this.isActive.a3=false;
      this.isActive.a4=false;
      this.isActive.a5=false;
      this.isActive.a6=true;
      this.seen=true;
      this.pickbarscroll(6);
      this.pickval=6;
    },
    clickSrollLeft(Id, pos) {
      var timer;
      timer = setInterval(function() {
        var current = document.getElementById(Id).scrollLeft;
        if(current >= pos)
        {
          if(current - pos <= 1)
          {
            document.getElementById(Id).scrollLeft = pos;
            clearInterval(timer);
          }
          else
          {
            document.getElementById(Id).scrollLeft = current - 1;
          }
        }
        else
        {
          if(pos - current <= 1)
          {
            document.getElementById(Id).scrollLeft = pos;
            clearInterval(timer);
          }
          else
          {
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
      if(this.availabledatelist.indexOf(ymd) > -1) {
        return false;
      }
      else{
        return true;
      }
    },
    dateClass(ymd, date) {
        return ['table-primary', 'border-0', 'rounded-circle'];
    },
    getpickid() {
      this.pickval = this.$route.params.pickid;
      if(this.pickval === 1)
      {
        this.clickphoto1();
      }
      else if(this.pickval === 2)
      {
        this.clickphoto2();
      }
      else if(this.pickval === 3)
      {
        this.clickphoto3();
      }
      else if(this.pickval === 4)
      {
        this.clickphoto4();
      }
      else if(this.pickval === 5)
      {
        this.clickphoto5();
      }
      else if(this.pickval === 6)
      {
        this.clickphoto6();
      }
    },
    nstep() {
      this.$http
        .post("/api/book", {
          userID:"kk",
          year:this.year,
          months:this.months,
          day:this.day,
          time:this.time,  // it means 9:00 to 11:00
          teacher:this.teacher,
        })
        .then((res) => {
          this.$router.push("/Reservationsuccess");
        });
      
    }
  },
  mounted() {
    this.getpickid();
  }
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
  position: absolute;
  width: 850px;
  height: 84px;
}
.photobox {
  display: inline-block;
  width: 53px;
  height: 72px;
  margin-left: 42px;
  margin-top: 6px;
  opacity: 40%;
}
.photoboxB {
  display: inline-block;
  width: 53px;
  height: 72px;
  margin-left: 42px;
  margin-top: 6px;
  opacity: 100%;
}
#b1 {
  margin-left: 161px;
}
.photocircle {
  box-sizing: border-box;
  width: 53px;
  height: 53px;
  border: 2px solid rgba(150, 251, 196, 1);
  border-radius: 53px;
  margin-left: 1px;
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
  width: 375px;
  height: 263px;
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
  padding: 10px 25px;
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
  top: 211px;
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