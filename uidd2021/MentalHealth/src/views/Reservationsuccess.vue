<template>
    <div class="desktop">
        <div id="namebar">
            <Nav showBackArrow showText navText="預約成功" />
        </div>
        <div id="successtext">預約成功！</div>
        <div id="confirmtext">可到「我的檔案」中「預約紀錄」查看</div>
        <div id="successphoto"></div>
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

        };
    },
    methods: {
        tofile() {
            this.$router.push("/profile");
        },
        tohome() {
            this.$router.push("/");
        }
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
#namebar {
	width: 375px;
	height: 50px;
}
#successtext {
    position: absolute;
    width: 269px;
    height: 20px;
    top: 114px;
    left: 53px;
    font-family: Taipei Sans TC Beta;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.24px;
    text-align: center;
}
#confirmtext {
    position: absolute;
    width: 269px;
    height: 16px;
    top: 144px;
    left: 53px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.24px;
    text-align: center;
}
#successphoto {
    position: absolute;
    width: 196.61px;
    height: 214.46px;
    top: 198px;
    left: 89px;
    background-image: url("../assets/svg/success.svg");
    background-size: 196.61px 214.46px;
    background-repeat: no-repeat;
}
#infotext {
    position: absolute;
    height: 44px;
    width: 309px;
    left: 35px;
    top: 443px;
    font-family: Taipei Sans TC Beta;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #4F4F4F;
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