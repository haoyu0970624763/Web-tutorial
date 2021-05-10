<template>
    <div class="desktop">
        <div id="namebar">
            <Nav showBackArrow showText navText="匹配結果" />
        </div>
        <div class="ornament"></div>
        <div class="ornament" id="rotate"></div>
        <div id="bigphoto" :style="fitperson.bigphotostyle"></div>
        <div id="fittext">最適合你的心理師是</div>
        <div id="fitname">{{ fitperson.name }}</div>
        <div class="nextstep" @click="makereservation">預約時間</div>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
    name: 'Matchresult',
    components: {
        Nav,
    },
    data() {
        return {
            fitperson: {
                name: "",
                bigphotostyle: {
                    backgroundImage: "url(" + require("@/assets/pic/avatar.jpg") + ")",
                },
            },
            pick: 0,
        };
    },
    methods: {
        pickmostfit() {
            this.pick = Math.floor(Math.random() * 5) + 2;
            this.fitperson.name = "陳陳陳";
            this.fitperson.bigphotostyle = {backgroundImage: "url(" + require("@/assets/svg/bigphoto.svg") + ")",};
        },
        makereservation() {
            this.$router.push({name: 'Picktime', params: { pickid: this.pick }});
        }
    },
    mounted() {
        this.pickmostfit();
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
#namebar {
	width: 375px;
	height: 50px;
}
.ornament {
    position: absolute;
    width: 46.39px;
    height: 99.12px;
    background-image: url("../assets/svg/ornament.svg");
    background-repeat: no-repeat;
    background-size: 46.39px 99.12px;
    left: 267px;
    top: 237.09px;
}
#rotate {
    transform: rotate(-155.12deg);
    left: 72.275px;
    top: 152.44px;
}
#bigphoto {
    position: absolute;
    width: 165px;
    height: 165px;
    top: 178.76px;
    left: 104px;
    background-size: 165px 165px;
    background-repeat: no-repeat;
}
#fittext {
    position: absolute;
    width: 117px;
    height: 18px;
    left: 129px;
    top: 378.76px;
    font-family: Taipei Sans TC Beta;
    font-size: 13px;
    line-height: 18px;
    align-items: center;
    color: #5C5C5C;
}
#fitname {
    position: absolute;
    width: 60px;
    height: 34px;
    left: 158px;
    top: 406.76px;
    font-family: Taipei Sans TC Beta;
    font-weight: bold;
    font-size: 20px;
    line-height: 34px;
    text-align: center;
    color: #4F4F4F;
}
.nextstep {
    position: absolute;
    width: 284px;
    height: 43px;
    left: 46px;
    top: 486.76px;
    background: #20E2D7;
    box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
    border-radius: 33px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 43px;
    text-align: center;
    color: #FFFFFF;
}
</style>
