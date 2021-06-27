<template>
  <div>
    <Nav showBackArrow="true" showText="ture" navText="兌換樹種" />
    <div class="outer">
      <div class="pointbox">
        <img class="pointimg" src="@/yo_0627/exchange_point.svg" />
        <div class="pointtext">{{ this.getPoint }} 點</div>
      </div>
      <b-container style="position: absolute; top: 80px">
        <b-row>
          <b-col style="text-align: right; padding: 0px">
            <img src="@/yo_0627/exchange_tree1.svg" />
          </b-col>
          <b-col style="text-align: left; padding: 0px">
            <img src="@/yo_0627/exchange_tree2.svg" />
          </b-col>
        </b-row>
        <b-row style="margin-top: -10px">
          <b-col class="usetext"> 使用中 </b-col>
          <b-col v-if="haveMay" style="text-align: left; padding: 0px">
            <img src="@/yo_0627/btn_use.svg" />
          </b-col>
          <b-col v-else style="text-align: left; padding: 0px">
            <img src="@/yo_0627/btn_exchange.svg" />
          </b-col>
        </b-row>
        <b-row>
          <b-col style="text-align: right; padding: 0px">
            <img src="@/yo_0627/exchange_tree3.svg" />
          </b-col>
          <b-col style="text-align: left; padding: 0px">
            <img src="@/yo_0627/exchange_tree4.svg" />
          </b-col>
        </b-row>
        <b-row style="margin-top: -10px">
          <b-col style="text-align: right; padding: 0px">
            <img src="@/yo_0627/btn_exchange.svg" />
          </b-col>
          <b-col style="text-align: left; padding: 0px">
            <img src="@/yo_0627/btn_exchange.svg" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer showMood="true" />
  </div>
</template>
<style scoped>
.usetext {
  text-align: center;
  left: 8px;
  padding: 0px;
  top: 20px;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  /* 淺灰 */

  color: #c7c7c7;
}
.outer {
  width: 375px;
  position: relative;
}
.pointbox .pointimg {
  display: inline-block;
  vertical-align: middle;
}
.pointbox .pointtext {
  display: inline-block;
  vertical-align: middle;
  /* 內文2 */
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  /* 深灰 */

  color: #5c5c5c;
}
.pointbox {
  position: absolute;
  right: 30px;
  height: 39px;
  width: 118px;
  border: 1px solid #80caa2;
  box-sizing: border-box;
  box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.3);
  border-radius: 25px;
  padding-top: 3px;
  text-align: center;
  top: 25px;
}
</style>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Tree_exchange",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      ID: "",
      getPoint: -1,
      haveMay: false,
    };
  },
  created() {
    /* 記得改學號 */
    this.ID = this.$store.state.userName;

    if (this.ID != "") {
      this.$http
        .post("/api/getPoint", {
          id: this.ID,
        })
        .then((res) => {
          if (res.body.indexOf("first") != -1) {
            this.getPoint = 0;
          } else {
            this.getPoint = res.body[0].points;
          }
        });
      /* 確認是否顯示使用按鈕 */
      this.$http
        .post("/api/checkDiaryDate", {
          id: this.ID,
        })
        .then((res) => {
          var i;
          for (i = 0; i < res.body.length; i++) {
            //console.log(res.body[i].date)
            if (res.body[i].date.indexOf("2021-05") != -1) {
              this.haveMay = true;
            }
          }
        });
    }
    //取點數
  },
};
</script>