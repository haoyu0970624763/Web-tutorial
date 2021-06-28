<template>
    <div class="outer">
        <div class="tagbar">
            <div class="innertagbar">
                <div class="tag" @click="tag_choose('學業')" :class="{ tag_active: tag_focus=='學業' }">學業</div>
                <div class="tag" @click="tag_choose('工作')" :class="{ tag_active: tag_focus=='工作' }">工作</div>
                <div class="tag" @click="tag_choose('人際')" :class="{ tag_active: tag_focus=='人際' }">人際</div>
                <div class="tag" @click="tag_choose('感情')" :class="{ tag_active: tag_focus=='感情' }">感情</div>
                <div class="tag" @click="tag_choose('家庭')" :class="{ tag_active: tag_focus=='家庭' }">家庭</div>
                <div class="tag" @click="tag_choose('其他')" :class="{ tag_active: tag_focus=='其他' }">其他</div>
            </div>
        </div>
        <div class="searchbar">
            <div class="search_box">
                <input type="text" v-model="search_key" placeholder="請輸入關鍵字" id="search_input" />
                <div class="search_icon" @click="search"></div>
            </div>
            <div class="user_icon" :class="{ user_icon_red: isNew }" @click="toMyhollow"></div>
        </div>
        <div class="hollow_container">
            <div class="hollowarea" v-for="(item, index) in hollowInfo_tag" @click="toReadDiary(index)">
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
    export default {
        name: "Worldhollow",
        data() {
            return {
                search_key: '',
                tag_focus: '學業',
                hollowInfo: '',
                hollowInfo_tag: '',
                isNew: false,
            };
        },
        methods: {
            tag_choose(tag_pick) {
                this.tag_focus = tag_pick;
                this.hollowInfo_tag = this.hollowInfo.filter((item, index) => {
                    if (item.category == tag_pick) {
                        return true
                    }
                })
            },
            search() {
                this.hollowInfo_tag = this.hollowInfo_tag.filter((item,index) => {
                    if(item.eventname.indexOf(this.search_key) >= 0 || item.additional.indexOf(this.search_key) >= 0) {
                        return true;
                    }
                })
            },
            toMyhollow() {
                this.$router.push ({
                    name: 'Myhollow',
                })
            },
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
            this.$http.post("/api/GetDiaryInfo", {
                userID: '',
                operatemode: 'All_public',
            }).then((res) => {
                this.hollowInfo = res.body.reverse();
            }).then(() => {
                if(this.hollowInfo.filter((item,index) => {
                    if(item.user_id == this.$store.state.userName && item.comment_notRead == 'y') {
                        return true;
                    }    
                }).length > 0) {
                    this.isNew = true;
                }
                this.tag_choose('學業');
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
        height: 388px;
        overflow: scroll;
    }
    .user_icon {
        position: absolute;
        width: 35px;
        height: 35px;
        left: 316px;
        top: 16px;
        background: url('../assets/Tim/carbon_user-avatar-filled.svg') no-repeat;
        background-size: contain;
    }
    .user_icon_red {
        background: url('../assets/Tim/carbon_user-avatar-filled_red.svg') no-repeat;
    }
    #search_input {
        position: absolute;
        width: 168px;
        height: 23px;
        left: 21px;
        top: 7px;
        font-family: Taipei Sans TC Beta;
        font-size: 16px;
        line-height: 21px;
        color: #5C5C5C;
        border: 0;
    }
    input:focus {
        outline: none;
    }
    ::placeholder {
        color: rgba(186, 186, 186, 0.66);
    }
    ::-webkit-input-placeholder {
        color: rgba(186, 186, 186, 0.66);
    }
    :-ms-input-placeholder {
        color: rgba(186, 186, 186, 0.66);
    }
    ::-moz-placeholder {
        color: rgba(186, 186, 186, 0.66);
        opacity: 1;
    }
    .search_icon {
        position: absolute;
        width: 24px;
        height: 24px;
        right: 10px;
        top: 6px;
        background: url('../assets/Tim/search.svg') no-repeat;
        background-size: contain;
    }
    .search_box {
        position: absolute;
        width: 277px;
        height: 40px;
        left: 24px;
        top: 14px;
        background: #FFFFFF;
        border: 2px solid #20E2D7;
        box-sizing: border-box;
        border-radius: 19px;
    }
    .searchbar {
        position: relative;
        width: 375px;
        height: 69px;
        box-shadow: 0px 1px 0px #20E2D7;
    }
    .tag {
        display: inline-block;
        width: 67px;
        height: 34px;
        margin-left: 9px;
        margin-top: 9px;
        background: #FFFFFF;
        border-radius: 33px;
        font-family: Taipei Sans TC Beta;
        font-size: 16px;
        line-height: 34px;
        text-align: center;
        color: #5C5C5C;
    }
    .tag_active {
        background: #20E2D7;
        color: #FFFFFF;
    }
    .innertagbar {
        display: table;
        word-spacing: -1em;
        position: absolute;
        left: 0px;
        width: 495px;
        height: 51px;
        padding-left: 15px;
    }
    .tagbar {
        position: relative;
        width: 375px;
        height: 51px;
        overflow: scroll;
        border-bottom: 1px solid rgba(199, 199, 199, 1);
    }
    .tagbar::-webkit-scrollbar {
        display: none;
    }
    .outer {
        width: 375px;
        height: auto;
    }
</style>