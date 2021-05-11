<template>
	<div>
  		<Nav showBackArrow=true />
		<div id="layout_up">			
			<div class="half_region">
				<p1>讓Aura為你匹配心理師</p1>
				
				<p2>只需回答幾個問題，讓我們為您推薦</p2>
				
				<div class="short_button" onclick="location.href='./analysis'">
					<font class="button_font">立即開始</font>
				</div>
			</div>
			
			<div id="middle">
				<div class="middle_line"></div>
				<p2>或</p2>
				<div class="middle_line"></div>
			</div>

			<div class="half_region">
				<p1>我想自己選</p1>
				
				<p2>適用於已經有想要的心理師，
				<br>或只想快快預約到個人諮商的您</p2>
				
				<div class="short_button" @click="pagechange">
					<font class="button_font">預約時間</font>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Feeling',
    components:{
        Nav,
        Footer
    },
	methods: {
		pagechange() {
			this.$router.push({name:'Picktime', params:{pickid: 1}});
		}
	}
}
</script>

<style rel="stylesheet" type="text/css">
html{
	scroll-behavior: smooth;
}

body{
	border: 0;
	padding: 0;
	margin: 0;
	
	font-family: Taipei Sans TC Beta;
	
/* 	display: flex;
	flex-direction: column;
    align-items: center; */
}

button{
	border: none;
    outline: none;
    background: none;
    padding: 0;
    border-radius: 1vw;
    cursor: pointer;
}

blockquote{
	margin-block: 0;
}

.button_font{
	font-family: Taipei Sans TC Beta;
	font-size: 2.22vh;
	font-weight: normal;
	color: #FFFFFF;
}

.full_img{
	height: 100%;
}


#layout_up{
	display: flex;
	flex-direction: column;
    align-items: center;
}

#navbar{
	width: 100vw;
	height: 6.94vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 10;
	
	background: #FFFFFF;
	box-shadow: 0 0.28vh 1.39vh rgba(118, 156, 145, 0.25);
}

#navbar_main{
	width: 11.39vh;
	height: 2.54vh;
	
    /* position: relative;
    left: 38.93vw; */
}

#navbar_side{
	display: flex;
    justify-content: space-around;
    width: 15vw;
}

.navbar_button{
	height: 1.63vh;
}

#navbar_back{
    position: absolute;
	left: 8vw;
}

.half_region{
	height: 45vh;
	
	display: flex;
	justify-content: center;
    flex-direction: column;
    align-items: center;
}

p1{
	font-family: Taipei Sans TC Beta;
	font-style: normal;
	font-weight: bold;
	font-size: 2.77vh;
	color: #4F4F4F;
	
	line-height: 4.72vh;
}

p2{
	font-family: Taipei Sans TC Beta;
	font-style: normal;
	font-weight: normal;
	font-size: 2.08vh;
	color: #5C5C5C;
	
	line-height: 2.77vh;
}

.short_button{
	position: relative;
	top: 2.5vh;
	
    display: flex;
	flex-direction: row;
	align-items: center;
    justify-content: center;
	
	background: #20E2D7;
	box-shadow: 0 0.55vh 2.36vh -0.14vh rgba(107, 182, 177, 0.51);
	border-radius: 4.5vh;
	
	width: 16.1vh;
	height: 6vh;
	cursor: pointer;
}

#middle{
	width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.middle_line{
	width: 14vh;
	height: 0;
	border: 0.14vh solid #C7C7C7;
}
</style>
