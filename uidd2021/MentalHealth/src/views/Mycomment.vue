<template>
    <div class="outer">
        <div id="namebar">
            <Nav showBackArrow="true" showText="true" navText="我被回覆的評論" destination="Myhollow" />
        </div>
        <div class="hollow_container">
            <div class="hollowarea" v-for="(item, index) in hollowInfo" @click="toReadDiary(index)">
                <div class="mood" :style="{
                    backgroundImage: 'url('+require('@/assets/Tim/'+item.mood+'.svg')+')'
                }"></div>
                <div class="number">匿名樹友 #{{ item.number }}</div>
                <div class="eventname">{{ item.eventname }}</div>
                <div class="additional">{{ item.additional }}</div>
                <div class="hug"></div>
                <div class="hugnum">{{ item.hug }}</div>
                <div class="comment"></div>
                <div class="commentnum">{{ item.comment }}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Nav from "@/components/Nav.vue";
    export default {
        name: "Mycomment",
        components: {
            Nav,
        },
        data() {
            return {
                hollowInfo: [],
                Comment_number_Info: [],
            };
        },
        methods: {
           toReadDiary(select_index) {
               this.$store.commit("setReadnumber", this.hollowInfo_tag[select_index].number);
                this.$store.commit("setReaddate", this.hollowInfo_tag[select_index].date);
                if(this.$store.state.read_number!='' && this.$store.state.date!='') 
                this.$router.push({
                    name: 'DiaryOthers',
                })
           }
        },
        created() {
            this.$http.post("/api/GetCommentInfo", {
                number: this.$store.state.number,
                diary_date: '',
                operatemode: 'MySend',
            }).then((res) => {
                if(res.body != "get comment fail") {
                    res.body.forEach((element) => {
                        this.Comment_number_Info.push({
                            receive_number: element.receive_number,
                            diary_date: element.diary_date,
                        })
                    });
                    var set = new Set();
                    this.Comment_number_Info = this.Comment_number_Info.filter(item =>!set.has(String(item.diary_date)+String(item.receive_number))?set.add(String(item.diary_date)+String(item.receive_number)):false);
                }                
            }).then(() => {
                this.Comment_number_Info.forEach((element) => {
                    this.$http.post("/api/GetDiaryInfo", {
                        userID: '',
                        operatemode: 'MyComment',
                        number: element.receive_number,
                        diary_date: element.diary_date,
                    }).then((res) => {
                        if(res.body != "fail") {
                            this.hollowInfo.push(res.body);
                        }
                    })
                    
                });
            })
            
        },
    };
</script>
<style scoped>
    .hollowarea {
        position: relative;
        width: 375px;
        height: 97px;
        box-shadow: 0px 1px 0px #20E2D7;
    }
    .mood {
        position: absolute;
        top: 11px;
        left: 26px;
        width: 32px;
        height: 30px;
        background-repeat: no-repeat;
        background-size: 32px 30px;
    }
    .number {
        position: absolute;
        width: 114px;
        height: 18px;
        left: 63px;
        top: 17px;
        font-family: Taipei Sans TC Beta;
        font-size: 13px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #5C5C5C;
    }
    .eventname {
        position: absolute;
        width: 205px;
        height: 21px;
        left: 28px;
        top: 47px;
        font-family: Taipei Sans TC Beta;
        font-size: 16px;
        line-height: 21px;
        display: block;
        color: #5C5C5C;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow:hidden;
    }
    .additional {
        position: absolute;
        width: 242px;
        height: 16px;
        left: 28px;
        top: 70px;
        font-family: Taipei Sans TC Beta;
        font-size: 12px;
        line-height: 16px;
        display: block;
        color: #C7C7C7;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .hug {
        position: absolute;
        width: 23.32px;
        height: 23.32px;
        left: 285px;
        top: 28px;
        background: url('../assets/Tim/hug.svg') no-repeat;
        background-size: contain;
    }
    .hugnum {
        position: absolute;
        width: 36px;
        height: 18px;
        left: 312px;
        top: 31px;
        font-family: SF Compact Display;
        font-size: 13px;
        line-height: 18px;
        color: #5C5C5C;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .comment {
        position: absolute;
        width: 23px;
        height: 20.13px;
        left: 285px;
        top: 62px;
        background: url('../assets/Tim/comment.svg') no-repeat;
        background-size: contain;
    }
    .commentnum {
        position: absolute;
        width: 36px;
        height: 18px;
        left: 312px;
        top: 61px;
        font-family: SF Compact Display;
        font-size: 13px;
        line-height: 18px;
        color: #5C5C5C;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .hollow_container {
        position: relative;
        width: 375px;
        height: auto;
    }
    #namebar {
        position: relative;
        width: 375px;
        height: 50px;
        box-shadow: 2px 2px 15px rgba(118, 156, 145, 0.25);
    }
    .outer {
        width: 375px;
        height: auto;
        overflow: scroll;
    }
</style>