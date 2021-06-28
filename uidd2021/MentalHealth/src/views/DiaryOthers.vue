<template>
    <div class="container">
        <div class="nav-container">
            <Nav showBackArrow="true" showText="true" navText="查看他人日記" destination="MoodTree"/>
        </div>
        <!--發文者資訊-->
        <div class="author">
            <div class="mood-icon" :style="{
                backgroundImage: 'url('+require('@/assets/Tim/'+DiaryInfo.mood+'.svg')+')'
            }" v-if="DiaryInfo != ''"></div>
            <div class="author-info">
                <div class="name">匿名樹友 #{{ DiaryInfo.number }}</div>
                <div class="time">{{ DiaryInfo.date }} {{ DiaryInfo.time }}</div>
            </div>
            <div class="type">#{{ DiaryInfo.category }}</div>
        </div>

        <!--發文內容-->
        <div class="content">
            <div class="title">{{ DiaryInfo.eventname}}</div>
            <div class="outline">{{ DiaryInfo.additional }}</div>
            <!--日記內容-->
            <div class="diary">
                <div class="diary-title">心情日記內容</div>
                <div class="diary-content">
                    <div class="box">
                        <div class="box-icon"><img src="@/assets/her/think.svg"></div>
                        <span class="box-title">事情的經過/想法</span>
                    </div>
                    <div class="box-content">{{ DiaryInfo.course }}</div>
                    <div class="box">
                        <div class="box-icon"><img src="@/assets/her/ques.svg"></div>
                        <span class="box-title">結果/處理方式</span>
                    </div>
                    <div class="box-content">{{ DiaryInfo.diaryresult }}</div>
                </div>
            </div>
                <div class="hug-box" >
                    <button @click="hug"><div class="unhug" :class="{ hugged: ishugged }"></div></button>
                <span class="n_hug">{{ DiaryInfo.hug }}</span>
                <div class="reply"><img src="@/assets/her/msg.svg"></div>
                <span class="n_reply">{{ DiaryInfo.comment }}</span>
            </div>
        </div>
        
        <!--回覆區-->
        <div class="re">
            <div class="replies" v-for="(reply, i) in replies">
                <div class="left-wrapper">
                    <div class="box">
                        <div class="re-icon"><img src="@/assets/her/re-icon.svg"></div>
                        <div class="info-container">
                            <div class="commenter-id">匿名樹友 #{{reply.send_number}}</div>
                            <div class="time">{{ reply.send_date.split('-').join('/') }} {{ reply.send_time }}</div>
                        </div>
                    </div>
                    <div class="re-text">{{ reply.content }}</div>
                </div>
                <div class="comment-hug">
                    <button class="hug-icon" @click="reply_hug(i)"><div class="unhug" :class="{ hugged: ishuggedreply[i]}"></div></button>
                    <span>{{reply.hug}}</span>
                </div>
            </div>
        </div>
        <!--送出-->
            <form>
                <div class="re-block">
                    <input class="" placeholder="請輸入評論" v-model="comment_send">
                    <div class="send" @click="sendComment">送出</div>
                </div>
            </form>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
.container {
    display: flex;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    background: #ffffff;
    .nav-conatiner{
        align-items: center;
    }
    .author {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 375px;
        height: 87px;
        left: 0px;
        border-bottom: 1px solid #c7c7c7;
        .mood-icon{
            position: absolute;
            width: 50px;
            height: 50px;
            left: 30px;
            background-repeat: no-repeat;
            background-size: contain;
        }
        .author-info{
            position: absolute;
            width: 145px;
            height: 50px;
            left: 90px;
        }
        .type{
            text-align: center;
            line-height: 34px;
            position: absolute;
            width: 78px;
            height: 34px;
            left: 275px;
            background: #20E2D7;
            border-radius: 33px;
            color: #FFFFFF;
        }
    }
    .content{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 375px;
        height: 519px;
        top: 137px;
        left: 0px;
        margin-top: 25px;
        .title{
            width: 375px;
            padding-left: 25px;
            text-align: left;
            font-weight: bold;
            font-size: 20px;
            color: #5C5C5C;
        }
        .outline{
            width: 375px;
            padding-left:25px;
            padding-right: 25px;
            padding-bottom: 25px;
            text-align: left;
            font-size: 15px;
            color: #5c5c5c;
        }
        .diary{
            width: 326px;
            height: 320px;
            box-shadow: 0px 0px 7px 7px rgba(0,0,0,0.06);
            border-radius: 20px;
            .diary-content{
                padding-left: 20px;
                padding-right: 20px;
            }
            .box-content{
                margin-bottom: 20px;
                background: linear-gradient(136.56deg, #FFFFFF -16.84%, #FFFFFF 102.5%);
                box-shadow: inset -3px -4px 8px rgba(255, 255, 255, 0.2), inset 3px 4px 10px rgba(54, 116, 101, 0.1);
                border-radius: 10px;
                border: 1px;
                color: #5c5c5c;
            }
            .diary-title{
                margin-bottom: 20px;
                width: 326px;
                height: 34px;
                text-align: center;
                font-size: 20px;
                line-height: 34px;
                color: #5c5c5c;
            }
            .box{
                margin-bottom: 10px;
                display: flex;
                .box-icon{
                    width: 20px;
                    height: 20px;
                    img {
                        max-width: 20px;
                        max-height: 20px;
                    }
                }
            }
        }
    }
    .unhug{
        width: 19px;
        height: 23px;
        background-image: url(../assets/her/hug.svg);
    }
    .hugged{
        width: 19px;
        height: 23px;
        background-image: url(../assets/her/hugged.svg);
    }
    .hug-box{
        margin-top: 25px;
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        button{
        padding: 0;
        border: 0;
            
        }
        span{
            font-size: 15px;
            color: #5c5c5c;
            padding-left: 5px;
            padding-right: 5px;
            width: 30px;
        }
    }
    .re{
        border-top: 1px solid #a3fecc;
        position: absolute;
        padding-bottom: 120px;
        top: 656px;
        width: 375px;
        display: flex;
        flex-direction: column;
        .replies{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #a3fecc;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left: 25px;
            .left-wrapper{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                .box{
                    display: flex;
                    align-items: center;
                    .info-container{
                        margin-left: 5px;
                    }
                    .commenter-id{
                        font-size:13px;
                        color: #5c5c5c;
                    }
                    .time{
                        font-size: 11px;
                        color: #c7c7c7;
                    }
                }
                .re-text{
                    padding-top: 5px;
                    font-size: 15px;
                    color: #5c5c5c;
                }
            }
            .comment-hug{
                margin-right: 50px;
                display: flex;
                .hug-icon{
                    margin-right: 6px;
                    border: 0;
                    padding: 0;
                }
                span{
                    font-size: 15px;
                    width: 30px;
                }
            }
        }
    }
    .re-block{
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0px;
        align-items: center;
        width: 375px;
        height: 56px;
        background: linear-gradient(180deg, #f9fea5 -214.29%, #96fbc4 -47.3%, #20e2d7 126.79%);
        input{
            margin-left: 23px;
            width: 272px;
            height: 40px;
            border: 2px solid #20e2d7;
            box-sizing: border-box;
            border-radius: 19px;
        }
        input:focus {
            outline: none;
        }
        ::placeholder {
            color: #C7C7C7;
        }
        ::-webkit-input-placeholder {
            color: #C7C7C7;
        }
        :-ms-input-placeholder {
            color: #C7C7C7;
        }
        ::-moz-placeholder {
            color: #C7C7C7;
            opacity: 1;
        } 
        .send {
            background-color: Transparent;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            overflow: hidden;
            outline: none;
            color: #ffffff;
            margin-left: 18px;
        }
    }
}

</style>
<script>
import Nav from '@/components/Nav.vue'

export default {
    name: "DiaryOthers",
    data() {
        return{
            DiaryInfo: '',
            ishugged: false,
            ishuggedreply: [],
            replies: '',
            comment_send: '',
        };
    },
    created() {
        //should send some user_id and diary_id in here.
        this.$http.post("api/getDiaryInfo", {
            uerID: '',
            operatemode: 'MyComment',
            number: this.$store.state.read_number,
            diary_date: this.$store.state.read_date,
        }).then((res)=>{
            this.DiaryInfo = res.body;
        });
        this.$http.post("/api/GetCommentInfo", {
            number: this.$store.state.read_number,
            diary_date: this.$store.state.read_date,
            operatemode: 'MyReceive',
        }).then((res) => {
            if(res.body != "get comment fail") {
                res.body.reverse().forEach((element) => {
                    this.$http.post("/api/GetHugCommentInfo", {
                        send_number: this.$store.state.number,
                        receive_number: element.send_number,
                        diary_number: this.$store.state.read_number,
                        diary_date: this.$store.state.read_date,
                        comment_date: element.send_date,
                        comment_time: element.send_time,
                    }).then((res) => {
                        this.ishuggedreply.push(res.body);
                    })
                })
                this.replies=res.body;
            }
            else {
                console.log(res.body);
            }
        });
        this.$http.post("/api/GetHugDiaryInfo", {
            send_number: this.$store.state.number,
            receive_number: this.$store.state.read_number,
            receive_date: this.$store.state.read_date,
        }).then((res) => {
            this.ishugged = res.body;
        })
    },
    methods: {
        hug() {
            if(!this.ishugged) {
                this.$http.post("/api/SendHugDiary", {
                    send_number: this.$store.state.number,
                    receive_number: this.$store.state.read_number,
                    receive_date: this.$store.state.read_date,
                }).then((res) => {
                    console.log(res.body);
                })
                this.DiaryInfo.hug = String(Number(this.DiaryInfo.hug) + 1);
            }
            else {
                this.$http.post("/api/CancelHugDiary", {
                    send_number: this.$store.state.number,
                    receive_number: this.$store.state.read_number,
                    receive_date: this.$store.state.read_date,
                }).then((res) => {
                    console.log(res.body);
                })
                this.DiaryInfo.hug = String(Number(this.DiaryInfo.hug) - 1);
            }
            this.ishugged = !this.ishugged;
        },
        reply_hug(select_index) {
            if(!this.ishuggedreply[select_index]) {
                this.$http.post("/api/SendHugComment", {
                    send_number: this.$store.state.number,
                    receive_number: this.replies[select_index].send_number,
                    diary_number: this.$store.state.read_number,
                    diary_date: this.$store.state.read_date,
                    comment_date: this.replies[select_index].send_date,
                    comment_time: this.replies[select_index].send_time,
                }).then((res) => {
                    console.log(res.body);
                })
                this.replies[select_index].hug = String(Number(this.replies[select_index].hug) + 1);
            }
            else {
                this.$http.post("/api/CancelHugComment", {
                    send_number: this.$store.state.number,
                    receive_number: this.replies[select_index].send_number,
                    diary_number: this.$store.state.read_number,
                    diary_date: this.$store.state.read_date,
                    comment_date: this.replies[select_index].send_date,
                    comment_time: this.replies[select_index].send_time,
                }).then((res) => {
                    console.log(res.body);
                })
                this.replies[select_index].hug = String(Number(this.replies[select_index].hug) - 1);
            }
            this.ishuggedreply[select_index] = !this.ishuggedreply[select_index];
        },
        sendComment() {
            var comment_reg = {
                send_number: this.$store.state.number,
                receive_number: this.$store.state.read_number,
                diary_date: this.$store.state.read_date,
                send_date: this.getTodayDate(),
                send_time: this.getTime(),
                content: this.comment_send,
                hug: 0,
                reply: 0,
            };
            this.$http
            .post("/api/Comment_Write", comment_reg)
            .then((res) => {
                console.log(res.body);
                this.replies.splice(0, 0, comment_reg);
                this.ishuggedreply.splice(0, 0, false);
                this.DiaryInfo.comment = String(Number(this.DiaryInfo.comment) + 1);
            });
        },
        getTodayDate() {
            var fullDate = new Date();
            var yyyy = fullDate.getFullYear();
            var MM = (fullDate.getMonth() + 1) >= 10 ? (fullDate.getMonth() + 1) : ("0" + (fullDate.getMonth() + 1));
            var dd = fullDate.getDate() < 10 ? ("0"+fullDate.getDate()) : fullDate.getDate();
            var today = yyyy + "-" + MM + "-" + dd;
            return today;
        },
        getTime() {
            var fullTime = new Date();
            var hh = fullTime.getHours() < 10 ? ("0"+fullTime.getHours()) : fullTime.getHours();
            var mm = fullTime.getMinutes() < 10 ? ("0"+fullTime.getMinutes()) : fullTime.getMinutes();
            var now = hh + ":" + mm;
            return now;
        }
  },
    components:{
        Nav,
        
    },
}
</script>
