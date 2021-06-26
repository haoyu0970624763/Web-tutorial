<template>
    <div>
        <Nav showBackArrow=true showText=true navText="線上支持"></Nav>

        <div id="layout">
            <div id="navbar">
                <div @click="ShowLeft=true" :class="{'press':ShowLeft, 'nonpress':!ShowLeft}">
                    <div :class="{'show':ShowLeft, 'nonshow':!ShowLeft}">電話專線</div>
                </div>
                <div @click="ShowLeft=false" :class="{'press':!ShowLeft, 'nonpress':ShowLeft}">
                    <div :class="{'show':!ShowLeft, 'nonshow':ShowLeft}">心輔網站</div>
                </div>
            </div>
            <div class="divide_bar"/>

            <div v-if="ShowLeft">
                <div class="content_Support" @click="openLink(resource.phone[0].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.phone[0].name"></div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content_Support" @click="openLink(resource.phone[1].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.phone[1].name"></div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content_Support" @click="openLink(resource.phone[2].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.phone[2].name"></div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content_Support" @click="openLink(resource.phone[3].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.phone[3].name"></div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content_Support" @click="openLink(resource.phone[4].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.phone[4].name"></div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
            </div>
            <div v-else>
                <div class="content_Support" @click="openLink(resource.website[0].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.website[0].name"></div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content_Support" @click="openLink(resource.website[1].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.website[1].name"></div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content_Support" @click="openLink(resource.website[2].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.website[2].name"></div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content_Support" @click="openLink(resource.website[3].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.website[3].name"></div>
                    </div>
                    <div class="button">
                        <img src="@/assets/anson/0610/right_button.svg"></img>
                    </div>
                </div>
                <div class="divide_bar"/>
                <div class="content_Support" @click="openLink(resource.website[4].link)">
                    <div class="font_box">
                        <div class="title1" v-text="resource.website[4].name"></div>
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
#layout{
    height: 92.5vh;
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
.content_Support{
    width: 100vw;
    height: 9.78vh;
    background: #FFFFFF;
    cursor: pointer;
    position: relative;
    
    display: flex;
    align-items: center;
}
.font_box{
    width: 80vw;
    padding: 0 0 0 2.96vh;
    text-align: left;
}
.button{
    position: relative;
    left: 2.96vh;
    width: 10vw;
}
.title1{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 2.67vh;
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
    name: 'Support',
    components: {
        Nav
    },
    data() {
        return {
            ShowLeft: true,
            resource: {
                phone: [
                    {
                        name: '台南市生命線協會 1995',
                        link: 'http://1995tainan.ho.net.tw/'
                    },
                    {
                        name: '張老師電話輔導 1980',
                        link: 'http://www.1980.org.tw/web3-20101110/about_us08.html'
                    },
                    {
                        name: '衛福部 - 安心專線 1925',
                        link: 'https://dep.mohw.gov.tw/domhaoh/cp-4906-54077-107.html'
                    },
                    {
                        name: '家庭教育諮詢專線 (02) 412-8185',
                        link: 'https://web.tainan.gov.tw/family/cp.aspx?n=17225'
                    },
                    {
                        name: '男性關懷專線 0800-013-999',
                        link: 'https://ifi.immigration.gov.tw/wSite/fp?xItem=9415&ctNode=37279&mp=1'
                    },
                ],
                website: [
                    {
                        name: '董氏基金會',
                        link: 'https://www.jtf.org.tw/'
                    },
                    {
                        name: '全國自殺防治中心',
                        link: 'https://www.tsos.org.tw/web/home'
                    },
                    {
                        name: '台南市憂鬱關懷協會',
                        link: 'http://www.changerblue.org.tw/ap/index.aspx'
                    },
                    {
                        name: '心快活',
                        link: 'https://wellbeing.mohw.gov.tw/nor/main'
                    },
                    {
                        name: '珍愛生命數位學習網',
                        link: 'https://www.tsos.org.tw/p/elearning'
                    },
                ]
            }
        };
    },
    methods: {
        openLink: function(link) {
            window.open(link, '_blank');
        }
    }
}
</script>