<template>
    <div style="width: 327px;height: 378px;position: relative;border-radius: 6px;overflow:hidden">
        <img  id="cloud1" src="@/yo_0613/tree_cloud1.svg">
        <img  id="cloud2" src="@/yo_0613/tree_cloud2.svg">
        <img  id="cloud3" src="@/yo_0613/tree_cloud3.svg">
        
        <img  class="ground" src="@/yo_0613/tree_ground.svg">
        <img  class="tree" src="@/yo_0613/tree_may_trunk.svg">
        <img  class="ground2" src="@/yo_0613/tree_ground2.svg">


        <!--葉子-->
    </div>

  
</template>

<script>
export default {
name: 'MayTree',
    data() {
        return {
            ID:"",
            
        };
    },
    methods:{
        
    },
    created () {

        /* 記得改學號 */
        this.ID = "F74064046"

        /* 確認有哪些天有寫日記,顯示葉子 */
        this.$http
        .post("/api/checkDiaryDate", {
            id : this.ID,
        })
        .then((res) => {
            var i;
            var day;
            for(i=0;i<res.body.length;i++){
                //console.log(res.body[i].date)
                if(res.body[i].date.indexOf('2021-05')!=-1){
                    day = parseInt(res.body[i].date.substr(8, 2), 10);
                    console.log( "5月"+day +"號有寫日記")
                }
            }
            
                
        });
        
    },
   

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree{
    position: absolute;
    bottom:50px;
    width: 248.01px;
    left:53px;

    
}
#cloud1{
    position: absolute;
    top: 19px;
    animation: cloud1 15s linear infinite;
}
#cloud2{
    position: absolute;
    top: 59px;
    animation: cloud2 15s linear infinite;
}
#cloud3{
    position: absolute;
    top: 250px;
    animation: cloud3 15s linear infinite;
}

@keyframes cloud1 {
    0%{margin-left:20%;}
    20%{margin-left:40%;}
    40%{margin-left:60%;}
    60%{margin-left:80%;}
    80%{margin-left:100%;opacity: 1;}
    81%{margin-left:100%;opacity: 0;}
    82%{margin-left:0%;opacity: 0;}
    83%{margin-left:0%;opacity: 1;}
    100%{margin-left:20%;}
}
@keyframes cloud3 {
    0%{margin-left:80%;}
    20%{margin-left:100%;opacity: 1;}
    21%{margin-left:100%;opacity: 0;}
    22%{margin-left:0%;opacity: 0;}
    23%{margin-left:0%;opacity: 1;}
    40%{margin-left:20%;}
    60%{margin-left:40%;}
    80%{margin-left:60%;}
    100%{margin-left:80%;}
}
@keyframes cloud2 {
    0%{margin-left:80%;}
    20%{margin-left:60%;}
    40%{margin-left:40%;}
    60%{margin-left:20%;}
    80%{margin-left:0%;opacity: 1;}
    81%{margin-left:0%;opacity: 0;}
    82%{margin-left:100%;opacity: 0;}
    83%{margin-left:100%;opacity: 1;}
    100%{margin-left:80%;}
}
.ground{
    position: absolute;
    bottom:0px;
    
}
.ground2{
    position: absolute;
    bottom:35px;
    left:123px;
    
}
</style>