<template>
    <div>
        
        <Nav showBackArrow=ture showText=true navText="壓力評估量表" />    
        <div class="background">
            <img  style="padding-top:25px;padding-bottom:15px" src="@/yo_0512/press_btnQ1.svg">
            <div class="btn">完全沒有</div>
            <div class="btn">輕微</div>
            <div class="btn">中等程度</div>
            <div class="btn">嚴重</div>
            <div class="btn">非常嚴重</div>
            <b-container style="margin-top:15px;">
                <b-row class="text-center">
                    <b-col>
                        <div class="btn_next" id="btn_cant">上一題</div>
                            
                        
                    </b-col>
                    <b-col>
                        <div class="btn_next"  >下一題</div>
                            
                        
                    </b-col>
                        
                </b-row>
            </b-container> 
            
            
            
        </div>
        
    </div>
    
</template>
<style scoped>
#btn_cant{
    opacity: 0.5;
}
.btn_next{
    height: 57px;
    width: 152px;
    background: #20E2D7;
    box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
    border-radius: 33px;

    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 57px;
    color: #FFFFFF;
    margin: 0 auto;
    

}
.btn{
    height: 55px;
    width: 210px;


    background: #FFFFFF;
    border: 1px solid #20E2D7;
    box-sizing: border-box;
    border-radius: 33px;

    /* 內文1 */

    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    padding-top: 13px;

    text-align: center;

    margin: 8px;

    color: #20E2D7;

}
.text{
    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #828282;

    /*位置*/
    text-align: center;
    padding-top:20px;
    padding-left: 13%;
    padding-right: 13%;

}
.background{    
    height: 637px;
    background: linear-gradient(180deg, #FFFFFF 42.2%, #9FFBDF 203.98%, #40E9D2 270.1%);
    text-align: center;
    overflow:hidden;
}
</style>
<script>
import Nav from '@/components/Nav.vue'

export default {
    name: 'Press',
    components:{
        Nav,
    }
}
</script>