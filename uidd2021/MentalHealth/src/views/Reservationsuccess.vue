<template>
    <div class="desktop">
        <div id="namebar">
            <Nav showBackArrow showText navText="預約成功" />
        </div>
        <div id="successtext">預約成功！</div>
        <div id="successtext2">已預約 個人諮商</div>
        <div id="successtext3">{{ reservationinfo.date }} {{ reservationinfo.time }} {{ reservationinfo.name }} 心理師</div>
        <div id="successphoto"></div>
        <div id="confirmtext">可到「我的檔案」中「預約紀錄」查看</div>
        <div id="infotext">如果需要取消預約，請務必在預約時間24小時之前，進行取消。</div>
        <div class="nextstep" @click="tofile">前往我的檔案</div>
        <div class="nextstep" id="backhome" @click="tohome">回首頁</div>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
    name: 'Reservationsuccess',
    components: {
        Nav,
    },
    data() {
        return {
            reservationinfo: {
                date: "",
                time: "",
                name: "",
            }
        };
    },
    methods: {
        tofile() {
            this.$router.push({
                name: 'profile', 
                params: {
                    date: this.reservationinfo.date,
                    time: this.reservationinfo.time,
                    name: this.reservationinfo.name
                }
            });
        },
        setreservationinfo() {
            this.reservationinfo.date = this.$route.params.date;
            this.reservationinfo.time = this.$route.params.time;
            this.reservationinfo.name = this.$route.params.name;
        },
        tohome() {
            this.$router.push("/");
        }
    },
    created() {
        this.setreservationinfo();
    }
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
#namebar {
	width: 375px;
	height: 50px;
}
#successtext {
    position: absolute;
    width: 100px;
    height: 20px;
    top: 103px;
    left: 138px;
    font-family: Taipei Sans TC Beta;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.23999999463558197px;
    text-align: center;
}
#successtext2 {
    position: absolute;
    width: 120px;
    height: 16px;
    top: 144px;
    left: 127px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.24px;
    color: #C7C7C7;
}
#successtext3 {
    position: absolute;
    width: 231px;
    height: 16px;
    top: 176px;
    left: 70px;
    font-family: Taipei Sans TC Beta;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.24px;
    color: #5C5C5C;
}
#successphoto {
    position: absolute;
    width: 144.61px;
    height: 157.74px;
    top: 232px;
    left: 116px;
    background-image: url("../assets/svg/success.svg");
    background-size: 144.61px 157.74px;
    background-repeat: no-repeat;
}
#confirmtext {
    position: absolute;
    width: 269px;
    height: 16px;
    top: 415px;
    left: 52px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.24px;
    text-align: center;
    color: #C7C7C7;
}
#infotext {
    position: absolute;
    height: 44px;
    width: 285px;
    left: 47px;
    top: 443px;
    font-family: Taipei Sans TC Beta;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #C7C7C7;
}
.nextstep {
    position: absolute;
    width: 313px;
    height: 43px;
    left: 31px;
    top: 512px;
    background: #20E2D7;
    box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
    border-radius: 33px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 43px;
    text-align: center;
    color: #FFFFFF;
}
#backhome {
    top: 575px;
}
</style>