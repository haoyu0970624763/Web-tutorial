<template>
    <div class="desktop">
        <div id="namebar">
            <Nav showBackArrow="true" showText="true" navText="我發佈過的日記" destination="reload" v-if="isRead"/>
            <Nav showBackArrow="true" showText="true" navText="我發佈過的日記" destination="Myhollow" v-else/>
        </div>
        <div v-if="mode == -1">
            <div class="darken" v-show="!isNaN(delete_index)"></div>
            <div class="mask" v-show="showmenu.indexOf(true) > -1" @click="closemenu(showmenu.indexOf(true))"></div>
            <div class="mask" v-show="!isNaN(delete_index)" @click="delete_cancel"></div>
            <div class="diaryarea" v-for="(item, index) in diaryInfo" @click="setmode(index)">
                <div class="mood" :style="{
                    backgroundImage: 'url('+require('@/assets/Tim/'+item.mood+isRed[index]+'.svg')+')'
                }"></div>
                <div class="category">{{ item.category }}</div>
                <div class="datetime">{{ item.date.split('-').join('/') }} {{ item.time }}</div>
                <div class="eventname">{{ item.eventname }}</div>
                <div class="additional">{{ item.additional }}</div>
                <div class="hug"></div>
                <div class="hugnum">{{ item.hug }}</div>
                <div class="comment"></div>
                <div class="commentnum">{{ item.comment }}</div>
                <div class="menu" @click.stop="clickmenu(index)"></div>
                <div class="showmenu" v-show="showmenu[index]">
                    <div @click.stop="clickdelete(index)">
                        <div class="deleteicon"></div>
                        <div class="delete">刪除</div>
                    </div>
                    <div @click.stop="clickedit(index)">
                        <div class="editicon"></div>
                        <div class="edit">編輯</div>
                    </div>
                </div>
            </div>
            <div class="delete_confirm" v-show="!isNaN(delete_index)">
                <div class="del_text">是否確認要刪除此發佈？</div>
                <div class="cancel" @click="delete_cancel"><span>取消</span></div>
                <div class="confirm" @click="delete_yes"><span>確認</span></div>
            </div>
        </div>
        <div v-else-if="mode >= 0">
            <div class="select_info">
                <div class="mood_info" :style="{
                    backgroundImage: 'url('+require('@/assets/Tim/'+diaryInfo[mode].mood+'.svg')+')'
                }"></div>
                <div class="num_info">匿名樹友 #{{ diaryInfo[mode].number }}</div>
                <div class="date_time_info">{{ diaryInfo[mode].date.split('-').join('/') }} {{ diaryInfo[mode].time }}</div>
                <div class="category_info"><span># {{ diaryInfo[mode].category }}</span></div>
            </div>
            <div class="split_line"></div>
            <div class="eventname_info">{{ diaryInfo[mode].eventname }}</div>
            <div class="additional_info">{{ diaryInfo[mode].additional }}</div>
            <div class="course_result_area">
                <div class="course_result_title">心情日記內容</div>
                <div class="course_icon"></div><div class="course_title">事情的經過/想法</div>
                <div class="area_back">
                    <div class="course_area">
                        <div class="course_info">{{ diaryInfo[mode].course }}</div>
                    </div>
                </div>
                <div class="result_icon"></div><div class="result_title">結果/處理方式</div>
                <div class="area_back">
                    <div class="result_area">
                        <div class="result_info">{{ diaryInfo[mode].diaryresult }}</div>
                    </div>
                </div>
                <div class="blank_space"></div>
            </div>
            <div class="hug_icon" :class="{ hug_color: isHug }" @click="click_hug"></div><div class="hug_info">{{ diaryInfo[mode].hug }}</div>
            <div class="comment_icon"></div><div class="comment_info">{{ diaryInfo[mode].comment }}</div>
            <div class="comment_content" v-for="(item,index) in commentInfo">
                <div class="comment_user_icon"></div>
                <div class="comment_number_info">匿名樹友 #{{ item.send_number }}</div>
                <div class="comment_date_time_info">{{ item.send_date.split('-').join('/') }}  {{ item.send_time }}</div>
                <div class="comment_content_info">{{ item.content }}</div>
                <div class="comment_hug_icon" :class="{comment_hug_icon_color: isHugComment[index]}" @click="click_hug_comment(index)"></div>
                <div class="comment_hug_info">{{ item.hug }}</div>
                <div class="comment_comment_num">
                    <div class="c_c_num_info">{{ item.reply }}則回覆</div><div class="c_c_arrow"></div>
                </div>
            </div>
            <div class="blank_space_second"></div>
            <div class="send_comment">
                <div class="comment_area">
                    <input type="text" v-model="comment_send" placeholder="請輸入評論" id="commenttext">
                </div>
                <div class="send_btn" @click="sendComment">送出</div>
            </div>
        </div>
    </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
    name: "Mypublicdiary",
    components: {
        Nav,
    },
    data() {
        return {
            isHug: false,
            isRead: false,
            diaryInfo: '',
            commentInfo: [],
            showmenu: [],
            isRed: [],
            delete_index: NaN,
            mode: -1,
            comment_send: '',
            isHugComment: [],
        };
    },
    methods: {
        clickmenu(select_index) {
            this.$set(this.showmenu, select_index, !this.showmenu[select_index]);
        },
        closemenu(select_index) {
            this.$set(this.showmenu, select_index, false);
        },
        clickdelete(select_index) {
            this.delete_index = select_index;
            this.closemenu(select_index);
        },
        clickedit(select_index) {
            console.log("index ",select_index," edit");
            this.closemenu(select_index);
        },
        delete_yes() {
            this.$http
            .post("/api/textorder", {
                order: "UPDATE diary SET ispublic='n' where user_id=\'" + this.$store.state.userName + "\' AND date=\'"+this.diaryInfo[this.delete_index].date+"\'",
            })
            .then((res) => {
                console.log(res.body);
            });
            this.showmenu.splice(this.delete_index, 1);
            this.diaryInfo.splice(this.delete_index, 1);
            this.isRed.splice(this.delete_index, 1);
            this.delete_index = NaN;
        },
        delete_cancel() {
            this.delete_index = NaN;
        },
        setmode(select_index) {
            this.mode = select_index;
            this.isRead = true;
            if(Number(this.diaryInfo[select_index].comment) > 0) {
                this.$http.post("/api/GetCommentInfo", {
                    number: this.diaryInfo[select_index].number,
                    diary_date: this.diaryInfo[select_index].date,
                    operatemode: 'MyReceive',
                }).then((res) => {
                    if(res.body != "get comment fail") {
                        res.body.reverse().forEach((element) => {
                            this.$http.post("/api/GetHugCommentInfo", {
                                send_number: this.$store.state.number,
                                receive_number: element.send_number,
                                diary_number: this.diaryInfo[this.mode].number,
                                diary_date: this.diaryInfo[this.mode].date,
                                comment_date: element.send_date,
                                comment_time: element.send_time,
                            }).then((res) => {
                                this.isHugComment.push(res.body);
                            })
                        })
                        this.commentInfo = res.body;
                    }
                    else {
                        console.log(res.body);
                    }
                })
                this.$http.post("/api/GetHugDiaryInfo", {
                    send_number: this.$store.state.number,
                    receive_number: this.diaryInfo[select_index].number,
                    receive_date: this.diaryInfo[select_index].date,
                }).then((res) => {
                    this.isHug = res.body;
                })
                if(this.isRed[select_index] == '_red') {
                    this.$http
                    .post("/api/textorder", {
                        order: "UPDATE diary SET comment_notRead='n' where user_id=\'" + this.$store.state.userName + "\' AND date=\'"+this.diaryInfo[select_index].date+"\'",
                    }).then((res) => {
                        console.log(res.body);
                    })
                }
            }
        },
        sendComment() {
            var comment_reg = {
                send_number: this.$store.state.number,
                receive_number: this.diaryInfo[this.mode].number,
                diary_date: this.diaryInfo[this.mode].date,
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
                this.commentInfo.splice(0, 0, comment_reg);
                this.isHugComment.splice(0, 0, false);
                this.diaryInfo[this.mode].comment = String(Number(this.diaryInfo[this.mode].comment) + 1);
            });
        },
        click_hug() {
            if(!this.isHug) {
                this.$http.post("/api/SendHugDiary", {
                    send_number: this.$store.state.number,
                    receive_number: this.diaryInfo[this.mode].number,
                    receive_date: this.diaryInfo[this.mode].date,
                }).then((res) => {
                    console.log(res.body);
                })
                this.diaryInfo[this.mode].hug = String(Number(this.diaryInfo[this.mode].hug) + 1);
            }
            else {
                this.$http.post("/api/CancelHugDiary", {
                    send_number: this.$store.state.number,
                    receive_number: this.diaryInfo[this.mode].number,
                    receive_date: this.diaryInfo[this.mode].date,
                }).then((res) => {
                    console.log(res.body);
                })
                this.diaryInfo[this.mode].hug = String(Number(this.diaryInfo[this.mode].hug) - 1);
            }
            this.isHug = !this.isHug;
        },
        click_hug_comment(comment_index) {
            if(!this.isHugComment[comment_index]) {
                this.$http.post("/api/SendHugComment", {
                    send_number: this.$store.state.number,
                    receive_number: this.commentInfo[comment_index].send_number,
                    diary_number: this.diaryInfo[this.mode].number,
                    diary_date: this.diaryInfo[this.mode].date,
                    comment_date: this.commentInfo[comment_index].send_date,
                    comment_time: this.commentInfo[comment_index].send_time,
                }).then((res) => {
                    console.log(res.body);
                })
                this.commentInfo[comment_index].hug = String(Number(this.commentInfo[comment_index].hug) + 1);
            }
            else {
                this.$http.post("/api/CancelHugComment", {
                    send_number: this.$store.state.number,
                    receive_number: this.commentInfo[comment_index].send_number,
                    diary_number: this.diaryInfo[this.mode].number,
                    diary_date: this.diaryInfo[this.mode].date,
                    comment_date: this.commentInfo[comment_index].send_date,
                    comment_time: this.commentInfo[comment_index].send_time,
                }).then((res) => {
                    console.log(res.body);
                })
                this.commentInfo[comment_index].hug = String(Number(this.commentInfo[comment_index].hug) - 1);
            }
            this.isHugComment[comment_index] = !this.isHugComment[comment_index];
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
    created() {
        this.$http.post("/api/GetDiaryInfo", {
            userID: this.$store.state.userName,
            operatemode: 'public',
        }).then((res) => {
            res.body.reverse().forEach((element) => {
                this.showmenu.push(false);
                if(element.comment_notRead == 'y') {
                    this.isRed.push('_red');
                }
                else {
                    this.isRed.push('');
                }
            });
            this.diaryInfo = res.body;
        })
    }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.mask {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}
.desktop {
    position: absolute;
    display: block;
    width: 375px;
    height: 687px;
    -webkit-overflow-scrolling : touch;
    overflow: scroll;
}
.darken {
    position: absolute;
    display: block;
    width: 375px;
    height: 687px;
    overflow: hidden;
    background: rgba(27, 27, 27, 0.5);
    background-blend-mode: darken;
    z-index: 1;
}
#namebar {
    position: relative;
    width: 375px;
    height: 50px;
    box-shadow: 2px 2px 15px rgba(118, 156, 145, 0.25);
}
.diaryarea {
    position: relative;
    width: 375px;
    height: 105px;
    box-shadow: 0px 1px 0px #20E2D7, 0px -1px 0px #20E2D7;
}
.mood {
    position: absolute;
    top: 14px;
    left: 22px;
    width: 32px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: 32px 30px;
}
.category {
    position: absolute;
    width: 28px;
    height: 18px;
    left: 59px;
    top: 20px;
    font-family: Taipei Sans TC Beta;
    font-size: 13px;
    line-height: 18px;
    color: #5C5C5C;
}
.datetime {
    position: absolute;
    width: 131px;
    height: 20px;
    left: 92px;
    top: 18px;
    font-family: SF Compact Display;
    font-size: 13px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #C7C7C7;
}
.eventname {
    position: absolute;
    width: 205px;
    height: 21px;
    left: 24px;
    top: 50px;
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
    left: 24px;
    top: 73px;
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
    left: 280px;
    top: 31px;
    background: url('../assets/Tim/hug.svg') no-repeat;
    background-size: contain;
}
.hugnum {
    position: absolute;
    width: 36px;
    height: 18px;
    left: 307px;
    top: 34px;
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
    left: 280px;
    top: 65px;
    background: url('../assets/Tim/comment.svg') no-repeat;
    background-size: contain;
}
.commentnum {
    position: absolute;
    width: 36px;
    height: 18px;
    left: 307px;
    top: 64px;
    font-family: SF Compact Display;
    font-size: 13px;
    line-height: 18px;
    color: #5C5C5C;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.menu {
    background: url('../assets/Tim/menu.svg') no-repeat;
    background-size: contain;
    position: absolute;
    width: 16px;
    height: 16px;
    left: 340px;
    top: 17px;
}
.showmenu {
    position: absolute;
    width: 110px;
    height: 87px;
    left: 265px;
    top: 38px;
    background: #FFFFFF;
    box-shadow: 10px 10px 45px rgba(204, 204, 204, 0.75);
    border-radius: 10px;
    z-index: 3;
}
.deleteicon {
    background: url('../assets/Tim/trash.svg') no-repeat;
    background-size: contain;
    position: absolute;
    width: 21px;
    height: 21px;
    left: 23px;
    top: 14px;
}
.delete {
    position: absolute;
    width: 36px;
    height: 21px;
    left: 50px;
    top: 14px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #5C5C5C;
}
.editicon {
    background: url('../assets/Tim/pen.svg') no-repeat;
    background-size: contain;
    position: absolute;
    width: 17px;
    height: 17px;
    left: 25px;
    top: 55px;
}
.edit {
    position: absolute;
    width: 36px;
    height: 21px;
    left: 50px;
    top: 52px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #5C5C5C;
}
.delete_confirm {
    position: absolute;
    width: 241px;
    height: 132px;
    left: 67px;
    top: 250px;
    background: #FFFFFF;
    border-radius: 20px;
    z-index: 3;
}
.del_text {
    position: absolute;
    width: 165px;
    height: 20px;
    left: 43px;
    top: 24px;
    font-family: Taipei Sans TC Beta;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #4F4F4F;
}
.cancel {
    position: absolute;
    width: 90px;
    height: 43px;
    left: 26px;
    top: 64px;
    background: #20E2D7;
    box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
    border-radius: 33px;
}
.cancel span {
    position: absolute;
    width: 32px;
    height: 21px;
    left: 29px;
    top: 11px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
.confirm {
    position: absolute;
    width: 90px;
    height: 43px;
    left: 126px;
    top: 64px;
    background: #FFFFFF;
    border: 1px solid #20E2D7;
    box-sizing: border-box;
    box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.25);
    border-radius: 33px;
}
.confirm span {
    position: absolute;
    width: 32px;
    height: 21px;
    left: 27px;
    top: 10px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #8E8E8E;
}
.select_info {
    position: relative;
    width: 375px;
    height: 87px;
    background: #FFFFFF;
}
.mood_info {
    position: absolute;
    top: 21.62px;
    left: 30.5px;
    width: 46.88px;
    height: 46.88px;
    background-repeat: no-repeat;
    background-size: 46.88px 46.88px;
}
.num_info {
    position: absolute;
    width: 141.3px;
    height: 22.31px;
    left: 90.46px;
    top: 25px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #5C5C5C;
}
.date_time_info {
    position: absolute;
    width: 132px;
    height: 20px;
    left: 90px;
    top: 48.76px;
    font-family: SF Compact Display;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #C7C7C7;
}
.category_info {
    position: absolute;
    width: 78px;
    height: 34px;
    left: 275px;
    top: 29px;
    background: #20E2D7;
    border-radius: 33px;
}
.category_info span {
    position: absolute;
    width: 48px;
    height: 20px;
    left: 15px;
    top: 7px;
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
}
.split_line {
    position: relative;
    width: 375px;
    height: 0px;
    border: 1px solid #C7C7C7;
}
.eventname_info {
    position: relative;
    width: 324.84px;
    left: 25.08px;
    top: 25px;
    font-family: Taipei Sans TC Beta;
    font-weight: bold;
    font-size: 20px;
    /*line-height: 34px;*/
    display: flex;
    align-items: center;
    color: #5C5C5C;
}
.additional_info {
    position: relative;
    width: 324px;
    left: 25px;
    top: 33.77px;
    font-family: Taipei Sans TC Beta;
    font-size: 15px;
    /*line-height: 20px;*/
    display: flex;
    align-items: center;
    color: #5C5C5C;
}
.course_result_area {
    position: relative;
    width: 326px;
    top: 49.8px;
    left: 25px;
    background: #FFFFFF;
    box-shadow: 0px 0px 7px 6px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
}
.course_result_title {
    position: relative;
    width: 120px;
    height: 63px;
    left: 103px;
    padding-top: 15px;
    padding-bottom: 14px;
    font-family: Taipei Sans TC Beta;
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 34px;
    color: #5C5C5C;
}
.course_icon {
    position: relative;
    width: 24px;
    height: 24px;
    left: 23px;
    background: url('../assets/Tim/think.svg') no-repeat;
    background-size: 24px 24px;
    display: inline-block;
}
.course_title {
    position: relative;
    width: 123px;
    height: 22px;
    left: 32px;
    padding-bottom: 2px;
    top: -6px;
    font-family: Taipei Sans TC Beta;
    font-size: 15px;
    line-height: 20px;
    display: inline-block;
    color: #5C5C5C;
}
.area_back {
    position: relative;
    width: 285px;
    left: 20px;
    padding: 1px 1px 1px 1px;
    background: linear-gradient(127.69deg, #C3DAD2 -23.43%, rgba(227, 227, 227, 0.22) 105.04%);
    border-radius: 10px;
}
.course_area {
    position: relative;
    width: 283px;
    background: linear-gradient(136.56deg, #FFFFFF -16.84%, #FFFFFF 102.5%);
    box-shadow: inset -3px -4px 8px rgba(255, 255, 255, 0.2), inset 3px 4px 10px rgba(54, 116, 101, 0.1);
    border-radius: 10px;
}
.course_info {
    position: relative;
    width: 250px;
    left: 18px;
    padding-top: 11px;
    padding-bottom: 19px;
    font-family: Taipei Sans TC Beta;
    font-size: 13px;
    line-height: 18px;
    color: #5C5C5C;
}
.result_icon {
    position: relative;
    width: 18px;
    height: 18px;
    left: 25px;
    background: url('../assets/Tim/diaryresult.svg') no-repeat;
    background-size: 18px 18px;
    display: inline-block;
}
.result_title {
    position: relative;
    width: 124px;
    height: 47px;
    top: -4px;
    left: 35px;
    padding-top: 17px;
    padding-bottom: 10px;
    font-family: Taipei Sans TC Beta;
    font-size: 15px;
    line-height: 20px;
    display: inline-block;
    color: #5C5C5C;
}
.result_area {
    position: relative;
    width: 283px;
    background: linear-gradient(136.56deg, #FFFFFF -16.84%, #FFFFFF 102.5%);
    box-shadow: inset -3px -4px 8px rgba(255, 255, 255, 0.2), inset 3px 4px 10px rgba(54, 116, 101, 0.1);
    border-radius: 10px;
}
.result_info {
    position: relative;
    width: 250px;
    left: 18px;
    padding-top: 11px;
    padding-bottom: 13px;
    font-family: Taipei Sans TC Beta;
    font-size: 13px;
    line-height: 18px;
    color: #5C5C5C;
}
.blank_space {
    position: relative;
    width: 326px;
    height: 37px;
    background: #FFFFFF;
    border-radius: 10px;
}
.hug_icon {
    position: relative;
    width: 23.74px;
    height: 29.11px;
    left: 126px;
    top: 71px;
    background: url('../assets/Tim/hug_nocolor.svg') no-repeat;
    background-size: 23.74px 29.11px;
    display: inline-block;
}
.hug_color {
    background: url('../assets/Tim/hug.svg') no-repeat;
    background-size: 23.74px 29.11px;
}
.hug_info {
    position: relative;
    display: inline-block;
    width: 43.46px;
    height: 21.73px;
    left: 131.39px;
    top: 63px;
    font-family: SF Compact Display;
    font-size: 15.6955px;
    line-height: 22px;
    color: #5C5C5C;
}
.comment_icon {
    position: relative;
    width: 27.99px;
    height: 24.49px;
    top: 71px;
    left: 132.55px;
    background: url('../assets/Tim/comment.svg') no-repeat;
    background-size: 27.99px 24.49px;
    background-position: left bottom;
    display: inline-block;
}
.comment_info {
    position: relative;
    display: inline-block;
    width: 43.46px;
    height: 21.73px;
    left: 139px;
    top: 63px;
    font-family: SF Compact Display;
    font-size: 15.6955px;
    line-height: 22px;
    color: #5C5C5C;
}
.comment_content {
    position: relative;
    width: 375px;
    height: 111px;
    left: 0px;
    top: 94px;
    background: #FFFFFF;
    box-shadow: 0px 1px 0px #20E2D7, 0px -1px 0px #20E2D7;
}
.comment_user_icon {
    position: absolute;
    width: 36px;
    height: 36px;
    left: 25px;
    top: 11.7px;
    background: url('../assets/Tim/carbon_user-avatar-filled.svg') no-repeat;
    background-size: contain;
}
.comment_number_info {
    position: absolute;
    width: 114px;
    height: 18px;
    left: 65px;
    top: 16px;
    font-family: Taipei Sans TC Beta;
    font-size: 13px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #5C5C5C;
}
.comment_date_time_info {
    position: absolute;
    width: 132px;
    height: 20px;
    left: 65px;
    top: 31px;
    font-family: SF Compact Display;
    font-size: 11px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #C7C7C7;
}
.comment_content_info {
    position: absolute;
    width: 255px;
    height: 20px;
    left: 28px;
    top: 56px;
    font-family: Taipei Sans TC Beta;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #5C5C5C;
    overflow: auto;
}
.comment_hug_icon {
    position: absolute;
    width: 19px;
    height: 23px;
    left: 287px;
    top: 34px;
    background: url('../assets/Tim/hug_nocolor.svg') no-repeat;
    background-size: contain;
}
.comment_hug_icon_color {
    background: url('../assets/Tim/hug.svg') no-repeat;
    background-size: contain;
}
.comment_hug_info {
    position: absolute;
    width: 36px;
    height: 18px;
    left: 312px;
    top: 37px;
    font-family: SF Compact Display;
    font-size: 13px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #5C5C5C;
}
.comment_comment_num {
    position: absolute;
    width: 375px;
    height: 29px;
    left: 0px;
    bottom: 0px;
    background: #FFFFFF;
}
.c_c_num_info {
    position: relative;
    height: 16px;
    left: 28px;
    font-family: Taipei Sans TC Beta;
    font-size: 12px;
    line-height: 16px;
    display: inline-block;
    color: #C7C7C7;
}
.c_c_arrow {
    display: inline-block;
    position: relative;
    width: 17px;
    height: 17px;
    left: 28px;
    top: 5px;
    background: url('../assets/Tim/keyboard_arrow_left.svg');
    background-size: contain;
}
.blank_space_second {
    position: relative;
    width: 375px;
    height: 96px;
    top: 94px;
}
.send_comment {
    position: fixed;
    width: 375px;
    height: 56px;
    left: 0px;
    bottom: 0px;
    background: linear-gradient(180deg, #F9FEA5 -214.29%, #96FBC4 -47.3%, #20E2D7 126.79%);
}
.comment_area {
    position: absolute;
    width: 272px;
    height: 40px;
    left: calc(50% - 272px/2 - 28.5px);
    top: calc(50% - 40px/2);
    background: #FFFFFF;
    border: 2px solid #20E2D7;
    box-sizing: border-box;
    border-radius: 19px;
}
#commenttext {
    position: absolute;
    width: 230px;
    height: 23px;
    left: 21px;
    top: calc(50% - 23px/2 - 0.5px);
    font-family: Taipei Sans TC Beta;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #070707;
    border: 0;
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
.send_btn {
    position: absolute;
    width: 41px;
    height: 23px;
    left: calc(50% - 41px/2 + 146px);
    top: calc(50% - 23px/2 - 0.5px);
    font-family: Taipei Sans TC Beta;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
</style>