<template>
    <div class="desktop">
      <div id="namebar">
        <Nav showBackArrow="true" showText="true" navText="我的樹洞" destination="MoodTree"/>
      </div>
      <div class="user_icon"></div>
      <div class="user_num">匿名樹友 {{this.$store.state.number}}</div>
      <div class="hug_area">
          <div class="hug_icon"></div>
          <div class="hug_text">被拍拍的次數</div>
          <div class="hug_info">{{ hugnum }} 次</div>
      </div>
      <div class="comment_area">
          <div class="comment_icon"></div>
          <div class="comment_text">發評論的次數</div>
          <div class="comment_info">{{ commentnum }} 次</div>
      </div>
      <div class="Mypublicdiary_area" @click="toMypublicdiary">
          <div class="Mypublicdiary_icon" :class = "{ Mypublicdiary_red_icon: isNewcomment}"></div>
          <div class="Mypublicdiary_text">我發佈過的日記</div>
          <div class="Mypublicdiary_info">{{ diarynum }}篇</div>
      </div>
      <div class="Mycomment_area" @click="toMycomment">
        <div class="Mycomment_icon" :class = "{ Mycomment_red_icon: isNewreply}"></div>
        <div class="Mycomment_text">我被回覆的評論</div>
        <div class="Mycomment_info">{{ replynum }}篇</div>
      </div>
    </div>
</template>
<script>
    import Nav from "@/components/Nav.vue";
    export default {
        name: "Myhollow",
        components: {
            Nav,
        },
        data() {
            return {
                diarynum: 0,
                hugnum: 0,
                commentnum: 0,
                replynum: 0,
                isNewcomment: false,
                isNewreply: false,
            };
        },
        methods: {
            toMypublicdiary() {
                this.$router.push({name: 'Mypublicdiary'});
            },
            toMycomment() {
                this.$router.push({name: 'Mycomment'});
            }
        },
        created() {

            this.$http.post("/api/GetDiaryInfo", {
                userID: this.$store.state.userName,
                operatemode: 'public',
            }).then((res) => {
                this.diarynum = res.body.length;
                res.body.forEach(element => {
                    this.hugnum = this.hugnum + Number(element.hug);
                    if(element.comment_notRead == 'y') {
                        this.isNewcomment = true;
                    }
                });
            });
            this.$http.post("/api/GetCommentInfo", {
                number: this.$store.state.number,
                diary_date: "none",
                operatemode: 'MySend',
            }).then((res) => {
                if(res.body != "get comment fail") {
                    this.commentnum = this.commentnum + res.body.length;
                }
                else {
                    console.log(res.body);
                }
            })
        },
    };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .desktop {
      position: absolute;
      display: block;
      width: 375px;
      height: 687px;
      overflow: hidden;
    }
    #namebar {
        position: relative;
        width: 375px;
        height: 50px;
        box-shadow: 2px 2px 15px rgba(118, 156, 145, 0.25);
    }
    .user_icon {
        position: absolute;
        width: 46.81px;
        height: 46.81px;
        left: 24px;
        top: 81px;
        background: url('../assets/Tim/carbon_user-avatar-filled.svg') no-repeat;
        background-size: contain;
        background-position: center;
    }
    .user_num {
        position: absolute;
        width: 172.13px;
        height: 27.18px;
        left: calc(50% - 172.13px/2 - 21.57px);
        top: 91.57px;
        font-family: Taipei Sans TC Beta;
        font-size: 20px;
        line-height: 27.18px;
        display: flex;
        align-items: center;
        color: #5C5C5C;
    }
    .hug_area {
        position: absolute;
        width: 152px;
        height: 65px;
        left: 24px;
        top: 159px;
        border: 1px solid #20E2D7;
        box-sizing: border-box;
        border-radius: 9px;
    }
    .comment_area {
        position: absolute;
        width: 152px;
        height: 65px;
        left: 200px;
        top: 159px;
        border: 1px solid #20E2D7;
        box-sizing: border-box;
        border-radius: 9px;
    }
    .hug_icon {
        position: absolute;
        width: 37px;
        height: 37px;
        left: 14px;
        top: 13px;
        background: url('../assets/Tim/hug.svg') no-repeat;
        background-size: contain;
    }
    .hug_text {
        position: absolute;
        width: 95px;
        height: 25px;
        left: 50px;
        top: 9px;
        font-family: Taipei Sans TC Beta;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
        color: #979797;
    }
    .hug_info {
        position: absolute;
        width: 95px;
        height: 25px;
        left: 50px;
        top: 29px;
        font-family: Taipei Sans TC Beta;
        font-weight: bold;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        color: #5C5C5C;
    }
    .comment_icon {
        position: absolute;
        width: 40px;
        height: 35px;
        left: 13px;
        top: 15px;
        background: url('../assets/Tim/comment.svg') no-repeat;
        background-size: contain;
    }
    .comment_text {
        position: absolute;
        width: 95px;
        height: 25px;
        left: 50px;
        top: 9px;
        font-family: Taipei Sans TC Beta;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
        color: #979797;
    }
    .comment_info {
        position: absolute;
        width: 95px;
        height: 25px;
        left: 50px;
        top: 29px;
        font-family: Taipei Sans TC Beta;
        font-weight: bold;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        color: #5C5C5C;
    }
    .Mypublicdiary_area {
        position: absolute;
        width: 327px;
        height: 79px;
        left: 24px;
        top: 251px;
        background: linear-gradient(180deg, #F9FEA5 -214.29%, #96FBC4 -47.3%, #20E2D7 126.79%);
        box-shadow: 2px 2px 10px rgba(204, 204, 204, 0.75);
        border-radius: 20px;
    }
    .Mycomment_area {
        position: absolute;
        width: 327px;
        height: 79px;
        left: 24px;
        top: 349px;
        background: linear-gradient(200.27deg, #F9FEA5 -46.72%, #99F9C5 82.88%, #20E2D7 118.42%);
        box-shadow: 2px 2px 10px rgba(204, 204, 204, 0.75);
        border-radius: 20px;
    }
    .Mypublicdiary_icon {
        position: absolute;
        width: 37px;
        height: 38px;
        left: 33px;
        top: 21px;
        background-image: url('../assets/Tim/add.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }
    .Mypublicdiary_red_icon {
        background-image: url('../assets/Tim/add_red.svg');
    }
    .Mypublicdiary_text {
        position: absolute;
        width: 135px;
        height: 27px;
        left: 85px;
        top: 28px;
        font-family: Taipei Sans TC Beta;
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
    .Mypublicdiary_info {
        position: absolute;
        width: 75px;
        height: 18px;
        left: 240px;
        top: 33px;
        font-family: SF Compact Display;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
    }
    .Mycomment_icon {
        position: absolute;
        width: 30.83px;
        height: 28.33px;
        left: 36.08px;
        top: 30.83px;
        background-image: url('../assets/Tim/comment_white.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }
    .Mycomment_red_icon {
        background-image: url('../assets/Tim/comment_red.svg');
    }
    .Mycomment_text {
        position: absolute;
        width: 135px;
        height: 27px;
        left: 85px;
        top: 28px;
        font-family: Taipei Sans TC Beta;
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
    .Mycomment_info {
        position: absolute;
        width: 75px;
        height: 18px;
        left: 240px;
        top: 33px;
        font-family: SF Compact Display;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
    }
</style>