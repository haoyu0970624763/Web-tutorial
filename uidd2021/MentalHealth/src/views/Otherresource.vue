<template>
    <div class="desktop">
        <div id="namebar">
            <Nav showUser />
        </div>
        <div id="pic"></div>
        <div id="text1">Hi, 曉潔</div>
        <div id="text2">來了解更多自我舒壓與校外求助資源吧！</div>
        <div id="title1">自我舒壓</div>
        <div id="title2">校外求助資源</div>
        <div id="footbar">
            <Footer showResouce/>
        </div>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Otherresource',
    components: {
        Nav,
        Footer,
    },
    data() {
        return {

        };
    },
    methods: {

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
	width: 375px;
	height: 687px;
    #namebar {
        position: fixed;
        width: 375px;
        height: 50px;
    }
    #pic {
        position: absolute;
        top: 96px;
        left: 24px;
        width: 327px;
        height: 126px;
        background-image: url("../assets/svg/resourcepic.svg");
        background-repeat: no-repeat;
        background-size: 327px 126px;
    }
    #text1 {
        position: absolute;
        width: 188px;
        height: 41px;
        left: 44px;
        top: 244px;
        font-family: SF Pro Display;
        font-weight: 600;
        font-size: 28px;
        line-height: 41px;
        align-items: center;
        color: #1E1E1E;
    }
    #text2 {
        position: absolute;
        width: 289px;
        height: 21px;
        left: 44px;
        top: 287px;
        font-family: Taipei Sans TC Beta;
        font-size: 16px;
        line-height: 21px;
        align-items: center;
        color: #1E1E1E;
    }
    #title1 {
        position: absolute;
        width: 88px;
        height: 21px;
        left: 25px;
        top: 334px;
        font-family: Taipei Sans TC Beta;
        font-size: 16px;
        line-height: 21px;
        align-items: center;
        color: #5C5C5C;
    }
    #title2 {
        position: absolute;
        width: 104px;
        height: 21px;
        left: 25px;
        top: 467px;
        font-family: Taipei Sans TC Beta;
        font-size: 16px;
        line-height: 21px;
        align-items: center;
        color: #5C5C5C;
    }
    #footbar {
        position: fixed;
        top: 639px;
        width: 375px;
        height: 49px;
    }
}
</style>
