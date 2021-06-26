<template>
    <div>
        <Nav showBackArrow=true showText=true navText="放鬆練習"></Nav>

        <div id="layout">
            <div class="divide_bar"/>
            <div class="content" @click="openLink('https://tamhd.org/abdominal-breathing-exercise')">
                <div class="font_box">
                    <div class="title1">腹式呼吸</div>
                    <div class="title2">降低呼吸頻率、放鬆肌肉</div>
                </div>
                <div class="button">
                    <img src="@/assets/anson/0610/right_button.svg"></img>
                </div>
            </div>
            <div class="divide_bar"/>
            <div class="content" @click="openLink('https://www.facebook.com/shorahealing/photos/pcb.3099807806787910/3099799473455410')">
                <div class="font_box">
                    <div class="title1">腹專注當下訓練</div>
                    <div class="title2">轉移注意力、減緩焦慮</div>
                </div>
                <div class="button">
                    <img src="@/assets/anson/0610/right_button.svg"></img>
                </div>
            </div>
            <div class="divide_bar"/>
            <div class="content" @click="openLink('https://tamhd.org/progress-muscle-relaxation/')">
                <div class="font_box">
                    <div class="title1">漸進式肌肉放鬆法</div>
                    <div class="title2">改善失眠、放鬆肌肉</div>
                </div>
                <div class="button">
                    <img src="@/assets/anson/0610/right_button.svg"></img>
                </div>
            </div>
            <div class="divide_bar"/>
            <div class="content" @click="openLink('https://tamhd.org/self-suggestion-and-relaxation-training/')">
                <div class="font_box">
                    <div class="title1">自我暗示放鬆訓練</div>
                    <div class="title2">身體與情緒的平靜</div>
                </div>
                <div class="button">
                    <img src="@/assets/anson/0610/right_button.svg"></img>
                </div>
            </div>
            <div class="divide_bar"/>
        </div>
    </div>
</template>

<style scoped rel="stylesheet" type="text/css">
#layout{
    height: 92.5vh;
	background: linear-gradient(180deg, #FFFFFF 42.2%, #9FFBC1 203.98%, #40E9D2 270.1%);
    text-align: left;
}
.title1{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 2.22vh;
    color: #5C5C5C;
}
.title2{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 1.85vh;
    color: #C7C7C7;
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
    text-align: left;
}
.button{
    position: relative;
    left: 2.96vh;
    width: 10vw;
}
</style>

<script>
import Nav from '@/components/Nav.vue'
export default {
    name: 'Relax',
    components: {
        Nav
    },
	data() {
		return {
			
		};
	},
    methods: {
        openLink: function(link) {
            window.open(link, '_blank');
        }
    }
}
</script>