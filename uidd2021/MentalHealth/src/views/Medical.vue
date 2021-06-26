<template>
    <div>
        <Nav showBackArrow=true showText=true navText="醫療院所"></Nav>

        <div id="layout">
            <div id="navbar">
                <div @click="ShowLeft=true" :class="{'press':ShowLeft, 'nonpress':!ShowLeft}">
                    <div :class="{'show':ShowLeft, 'nonshow':!ShowLeft}">心理諮商</div>
                </div>
                <div @click="ShowLeft=false" :class="{'press':!ShowLeft, 'nonpress':ShowLeft}">
                    <div :class="{'show':!ShowLeft, 'nonshow':ShowLeft}">精神醫療</div>
                </div>
            </div>
            <div class="divide_bar"/>

            <div v-if="ShowLeft">
                <div class="content" @click="openLink('https://health.tainan.gov.tw/page.asp?mainid={591C736A-19E9-453C-9CD6-DCF3E70AD417}')">
                    <div class="font_box">
                        <div class="title1">台南市衛生局 - 免費諮商服務</div>
                        <div class="title2">各區衛生所</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('http://www.natureiswell.com.tw/')">
                    <div class="font_box">
                        <div class="title1">自然就好心理諮商所</div>
                        <div class="title2">臺南市東區慶東街214號1樓</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('https://www.kxmind.com/')">
                    <div class="font_box">
                        <div class="title1">寬欣心理治療所</div>
                        <div class="title2">臺南市北區育德一街227號</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('https://sites.google.com/site/lihuifangxinlizhiliaosuo/')">
                    <div class="font_box">
                        <div class="title1">李慧芳心理治療所</div>
                        <div class="title2">臺南市東區崇德十七街124號1樓</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('https://www.eosgrace.com/')">
                    <div class="font_box">
                        <div class="title1">曙光角落心理諮商診所</div>
                        <div class="title2">臺南市東區龍山里崇明路155巷4號1-2樓</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('https://hoh062160959.business.site/')">
                    <div class="font_box">
                        <div class="title1">心家心理治療所</div>
                        <div class="title2">臺南市東區大同里府連路190號2樓</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('https://www.smilinghealthy.com.tw/')">
                    <div class="font_box">
                        <div class="title1">微笑永康心理諮商所</div>
                        <div class="title2">臺南市永康區東橋里東橋五路77號2樓 </div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('http://www.holdingself.com.tw/')">
                    <div class="font_box">
                        <div class="title1">禾心心理諮商所</div>
                        <div class="title2">臺南市北區中華北路二段80巷65號</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
            </div>
            <div v-else>
                <div class="content" @click="openLink('https://service.hosp.ncku.edu.tw/Tandem/QueryDocUI.aspx?Lang=&skv=ax2i0%2Bu9%2BGxTJrZ%2FxXvwTC6pcPNyBkqbhRpjTKPQX6NaE%2BMYgMRvug%3D%3D')">
                    <div class="font_box">
                        <div class="title1">成大醫院 - 精神科門診</div>
                        <div class="title2">臺南市北區勝利路138號</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('https://www.tmh.org.tw/TMH2016/RegCal.aspx?Dept=BB&Kind=2')">
                    <div class="font_box">
                        <div class="title1">台南市立醫院 - 身心科</div>
                        <div class="title2">臺南市東區崇德路670號</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('http://www.chimei.org.tw/')">
                    <div class="font_box">
                        <div class="title1">奇美醫院 - 精神科門診</div>
                        <div class="title2">臺南市永康區中華路901號</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('http://www.sinlau.org.tw/')">
                    <div class="font_box">
                        <div class="title1">基督長老新會新樓醫院 - 身心內科</div>
                        <div class="title2">臺南市東區東門路一段57號</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content" @click="openLink('https://www.tnhosp.mohw.gov.tw/page.asp?orcaid=%7B05BEB2F9-947A-4E4A-85F0-AE83DF070257%7D')">
                    <div class="font_box">
                        <div class="title1">衛福部 台南醫院 - 一般精神科</div>
                        <div class="title2">臺南市中西區中山路125號</div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
            </div>
        </div>
    </div>
</template>

<style scoped rel="stylesheet" type="text/css">
#layout {
  height: 92.5vh;
  background: linear-gradient(
    180deg,
    #ffffff 42.2%,
    #9ffbc1 203.98%,
    #40e9d2 270.1%
  );
  text-align: left;
}
#navbar {
  width: 100%;
  height: 7.4vh;
  background: linear-gradient(
    180deg,
    #f9fea5 -214.29%,
    #96fbc4 -47.3%,
    #20e2d7 126.79%
  );
  box-shadow: 0 0.123vh 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.press {
  background: #ffffff;
  border-radius: 1.23vh;
}
.show {
  width: 18.62vh;
  height: 4.69vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: bold;
  font-size: 2.22vh;
  line-height: 4.19vh;
  background: linear-gradient(
    180deg,
    #f9fea5 -214.29%,
    #96fbc4 -47.3%,
    #20e2d7 126.79%
  );
  -webkit-background-clip: text;
  background-clip: text;
  border-radius: 1.23vh;
  color: transparent;
}
.nonshow {
  width: 18.62vh;
  height: 4.69vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.22vh;
  background: none;
  border-radius: 1.23vh;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: bold;
  font-size: 2.22vh;
  line-height: 4.19vh;
  color: rgba(255, 255, 255, 0.8);
}
.divide_bar {
  position: relative;
  width: 100vw;
  height: 0;
  /*border: 0.2vh solid #A3FECC;*/
  border: 0.0123vh solid rgba(163, 254, 204, 1);
  background: #a3fecc;
}
.content {
  width: 100vw;
  height: 10.48vh;
  background: #ffffff;
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: center;
}
.font_box {
  width: 80vw;
  padding: 0 0 0 2.96vh;
  text-align: left;
}
.button {
  position: relative;
  left: 2.96vh;
  width: 10vw;
}
.title1 {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 2.22vh;
  color: #5c5c5c;
}
.title2 {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 1.85vh;
  color: #c7c7c7;
}
</style>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Relax",
  components: {
    Nav,
  },
  data() {
    return {
      ShowLeft: true,
    };
  },
  methods: {
    openLink: function (link) {
      window.open(link, "_blank");
    },
  },
};
</script>