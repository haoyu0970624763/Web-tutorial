<template>
    <div class="desktop">
        <div id="namebar">
            <Nav showUser />
        </div>
        <div id="pic"></div>
        <div id="text1">Hi, 曉潔</div>
        <div id="text2">來了解更多自我舒壓與校外求助資源吧！</div>
        <div id="title1">自我了解與舒壓</div>
        <div id="more1" class="more"></div>
        <div id="relax" class="rect">
            <div id="relaxicon"></div>
            <div id="relaxtext" class="text">放鬆練習</div>
        </div>
        <div id="read" class="rect">
            <div id="readicon"></div>
            <div id="readtext" class="text">讀讀文章</div>
        </div>
        <div id="title2">校外求助資源</div>
        <div id="more2" class="more"></div>
        <div id="hospital" class="rect">
            <div id="hospitalicon"></div>
            <div id="hospitaltext" class="text">醫療院所</div>
        </div>
        <div id="mental" class="rect">
            <div id="mentalicon"></div>
            <div id="mentaltext" class="text">心輔組織</div>
        </div>
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
.desktop {
	position: absolute;
	width: 375px;
	height: 687px;
}
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
    width: 112px;
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
    top: 487px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 21px;
    align-items: center;
    color: #5C5C5C;
}
.more {
    position: absolute;
    width: 81px;
    height: 26px;
    left: 277px;
    top: 332px;
    background-image: url("../assets/Tim/more.svg");
    background-repeat: no-repeat;
    background-size: 81px 26px;
}
#more2 {
    top: 485px;
}
.rect {
    position: absolute;
    width: 173px;
    height: 79px;
    left: 9px;
    top: 363px;
    background: linear-gradient(180deg, #F9FEA5 -214.29%, #96FBC4 -47.3%, #20E2D7 126.79%);
    box-shadow: 2px 2px 10px rgba(204, 204, 204, 0.75);
    border-radius: 10px;
}
#read {
    left: 193px;
    background: linear-gradient(180deg, #F9FEA5 -65.05%, #96FBC4 85.21%, #20E2D7 143.69%);
}
#hospital {
    top: 516px;
    background: linear-gradient(180deg, #F9FEA5 -65.05%, #96FBC4 85.21%, #20E2D7 143.69%);
}
#mental {
    top: 516px;
    left: 193px;
}
.text {
    position: absolute;
    width: 80px;
    height: 34px;
    left: 68px;
    top: 23px;
    font-family: Taipei Sans TC Beta;
    font-weight: bold;
    font-size: 20px;
    line-height: 34px;
    color: #FFFFFF;
}
#relaxicon {
    position: absolute;
    background-image: url("../assets/Tim/relax.svg");
    background-repeat: no-repeat;
    background-size: 28.7px 32.09px;
    left: 28.15px;
    top: 22.38px;
    width: 28.7px;
    height: 32.09px;
}
#readicon {
    position: absolute;
    background-image: url("../assets/Tim/read.svg");
    background-repeat: no-repeat;
    background-size: 31.43px 28.28px;
    left: 26.79px;
    top: 24.3px;
    width: 31.43px;
    height: 28.28px;
}
#hospitalicon {
    position: absolute;
    background-image: url("../assets/Tim/hospital.svg");
    background-repeat: no-repeat;
    background-size: 33px 38px;
    left: 26px;
    top: 19px;
    width: 33px;
    height: 38px;
}
#mentalicon {
    position: absolute;
    background-image: url("../assets/Tim/mental.svg");
    background-repeat: no-repeat;
    background-size: 33px 38px;
    left: 26px;
    top: 19px;
    width: 33px;
    height: 38px;
}
#footbar {
    position: fixed;
    top: 639px;
    width: 375px;
    height: 49px;
}
</style>
