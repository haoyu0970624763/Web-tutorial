<template>
    <div id="layout">
        <Nav showBackArrow=true showText=true navText="讀讀文章"></Nav>
        <div class="divide_bar"/>
        <div class="content" @click="toContent(0)">
            <div class="font_box">
                <div class="title1" v-text="resource[0].name"></div>
                <div class="title2" v-text="resource[0].detail"></div>
            </div>
            <div class="button">
                <img src="@/assets/anson/0610/right_button.svg"></img>
            </div>
        </div>
        <div class="divide_bar"/>
        <div class="content" @click="toContent(1)">
            <div class="font_box">
                <div class="title1" v-text="resource[1].name"></div>
                <div class="title2" v-text="resource[1].detail"></div>
            </div>
            <div class="button">
                <img src="@/assets/anson/0610/right_button.svg"></img>
            </div>
        </div>
        <div class="divide_bar"/>
        <div class="content" @click="toContent(2)">
            <div class="font_box">
                <div class="title1" v-text="resource[2].name"></div>
                <div class="title2" v-text="resource[2].detail"></div>
            </div>
            <div class="button">
                <img src="@/assets/anson/0610/right_button.svg"></img>
            </div>
        </div>
        <div class="divide_bar"/>
        <div class="content" @click="toContent(3)">
            <div class="font_box">
                <div class="title1" v-text="resource[3].name"></div>
                <div class="title2" v-text="resource[3].detail"></div>
            </div>
            <div class="button">
                <img src="@/assets/anson/0610/right_button.svg"></img>
            </div>
        </div>
        <div class="divide_bar"/>
        <div class="content" @click="toContent(4)">
            <div class="font_box">
                <div class="title1" v-text="resource[4].name"></div>
                <div class="title2" v-text="resource[4].detail"></div>
            </div>
            <div class="button">
                <img src="@/assets/anson/0610/right_button.svg"></img>
            </div>
        </div>
        <div class="divide_bar"/>
    </div>
</template>

<style scoped rel="stylesheet" type="text/css">
#layout{
    height: 100vh;
	background: linear-gradient(180deg, #FFFFFF 42.2%, #9FFBC1 203.98%, #40E9D2 270.1%);
}
#navbar{
    width: 100%;
    height: 7.4vh;
    background: linear-gradient(180deg, #F9FEA5 -214.29%, #96FBC4 -47.3%, #20E2D7 126.79%);
    box-shadow: 0 0.123vh 0 rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: space-around;
    align-items: center;
}
.press{
    background: #FFFFFF;
    border-radius: 1.23vh;
}
.show{
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
    background: linear-gradient(180deg, #F9FEA5 -214.29%, #96FBC4 -47.3%, #20E2D7 126.79%);
    -webkit-background-clip: text;
    background-clip: text;
    border-radius: 1.23vh;
    color: transparent;
}
.nonshow{
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
.divide_bar{
    position: relative;
    width: 100vw;
    height: 0;

    /*border: 0.2vh solid #A3FECC;*/
    border: 0.0123vh solid rgba(163, 254, 204, 1);
    background: #A3FECC;
}
.content{
    width: 100vw;
    height: 10.48vh;
    background: #FFFFFF;
    cursor: pointer;
    position: relative;
    
    display: flex;
    align-items: center;
}
.font_box{
    width: 80vw;
    padding: 0 0 0 2.96vh;
}
.button{
    position: relative;
    left: 2.96vh;
}
.title1{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 2.22vh;
    color: #5C5C5C;

    content: 'shit';
}
.title2{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 1.85vh;
    color: #C7C7C7;
}
</style>

<script>
import Nav from '@/components/Nav.vue'

export default {
    name: 'Article',
    components: {
        Nav
    },
    data() {
        return {
            resource: [
                {
                    name: '什麼是心理諮商？',
                    detail: '心輔組'
                },
                {
                    name: '良好的睡眠，從白天開始',
                    detail: '心輔組 張文耀心理師'
                },
                {
                    name: '自我覺察，是改變的入口',
                    detail: '心輔組 張愷晏心理師'
                },
                {
                    name: '轉個彎，看見更不一樣的風景',
                    detail: '心輔組 鄭淑惠講師'
                },
                {
                    name: '選擇幸福，讓抱怨不只是抱怨',
                    detail: '心輔組 林書郁實習心理師'
                }
            ]
        };
    },
    methods: {
        toContent: function(num) {
            this.$router.push({name:"Content", params:{number: num}});
        }
    }
}
</script>