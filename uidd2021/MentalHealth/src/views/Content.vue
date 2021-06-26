<template>
    <div>
        <Nav showBackArrow=true showText=true navText="讀讀文章"></Nav>
        
        <div id="layout_Content">
            <div v-if="content==0">
                <div class="title" v-text="main[0].title"></div>
                <div class="author" v-text="main[0].author"></div>
                <div class="pic_box"><img style="height:19.96vh" src="@/assets/anson/0610/c0p0.png"></img></div>
                <div class="font" v-text="main[0].paragraph[0]"></div>
                <br>
                <div class="font" v-text="main[0].paragraph[1]"></div>
                <br>
                <div class="font" v-text="main[0].paragraph[2]"></div>
                <br>
                <div class="font_bold" v-text="main[0].paragraph[3]"></div>
                <div class="font" v-text="main[0].paragraph[4]"></div>
                <br>
                <div class="font" v-text="main[0].paragraph[5]"></div>
                <br>
                <div class="font" v-text="main[0].paragraph[6]"></div>
                <br>
                <div class="font" v-text="main[0].paragraph[7]"></div>
            </div>
            <div v-else-if="content==1">
                <div class="title" v-text="main[1].title"></div>
                <div class="author" v-text="main[1].author"></div>
                <div class="pic_box"><img style="height:19.96vh" src="@/assets/anson/0610/c1p0.png"></img></div>
                <div class="font" v-text="main[1].paragraph[0]"></div>
                <br>
                <div class="font" v-text="main[1].paragraph[1]"></div>
                <br>
                <div class="font" v-text="main[1].paragraph[2]"></div>
                <br>
                <div class="font" v-text="main[1].paragraph[3]"></div>
                <br>
                <div class="font" v-text="main[1].paragraph[4]"></div>
                <br>
                <div class="font" v-text="main[1].paragraph[5]"></div>
                <div class="pic_box"><img style="height:19.96vh" src="@/assets/anson/0610/c1p1.png"></img></div>
                <div class="font" v-text="main[1].paragraph[6]"></div>
                <br>
                <div class="font" v-text="main[1].paragraph[7]"></div>
                <div class="font" v-text="main[1].paragraph[8]"></div>
                <div class="font" v-text="main[1].paragraph[9]"></div>
                <div class="font" v-text="main[1].paragraph[10]"></div>
                <div class="font" v-text="main[1].paragraph[11]"></div>
                <br>
            </div>
            <div v-else-if="content==2">
                <div class="title" v-text="main[2].title"></div>
                <div class="author" v-text="main[2].author"></div>
                <div class="font" v-text="main[2].paragraph[0]"></div>
                <br>
                <div class="font" v-text="main[2].paragraph[1]"></div>
                <br>
                <div class="font" v-text="main[2].paragraph[2]"></div>
                <br>
                <div class="font" v-text="main[2].paragraph[3]"></div>
                <div class="pic_box"><img style="height:19.96vh" src="@/assets/anson/0610/c2p0.png"></img></div>
                <div class="font" v-text="main[2].paragraph[4]"></div>
                <div class="font" v-text="main[2].paragraph[5]"></div>
                <div class="font" v-text="main[2].paragraph[6]"></div>
                <div class="font" v-text="main[2].paragraph[7]"></div>
                <div class="font" v-text="main[2].paragraph[8]"></div>
                <br>
                <div class="font" v-text="main[2].paragraph[9]"></div>
                <div class="font" v-text="main[2].paragraph[10]"></div>
                <div class="font" v-text="main[2].paragraph[11]"></div>
                <br>
                <div class="font" v-text="main[2].paragraph[12]"></div>
                <div class="font" v-text="main[2].paragraph[13]"></div>
                <div class="pic_box"><img style="height:19.96vh" src="@/assets/anson/0610/c2p1.png"></img></div>
                <div class="font" v-text="main[2].paragraph[14]"></div>
                <div class="font" v-text="main[2].paragraph[15]"></div>
                <br>
                <div class="font" v-text="main[2].paragraph[16]"></div>
                <br>
                <div class="font" v-text="main[2].paragraph[17]"></div>
            </div>
            <div v-else-if="content==3">
                <div class="title" v-text="main[3].title"></div>
                <div class="author" v-text="main[3].author"></div>
                <div class="pic_box"><img style="height:19.96vh" src="@/assets/anson/0610/c3p0.png"></img></div>
                <div class="font" v-text="main[3].paragraph[0]"></div>
                <br>
                <div class="font" v-text="main[3].paragraph[1]"></div>
                <br>
                <div class="font" v-text="main[3].paragraph[2]"></div>
                <br>
                <div class="font" v-text="main[3].paragraph[3]"></div>
                <br>
                <div class="font" v-text="main[3].paragraph[4]"></div>
                <br>
                <div class="font" v-text="main[3].paragraph[5]"></div>
                <br>
                <div class="font" v-text="main[3].paragraph[6]"></div>
            </div>
            <div v-else-if="content==4">
                <div class="title" v-text="main[4].title"></div>
                <div class="author" v-text="main[4].author"></div>
                <div class="pic_box"><img style="height:19.96vh" src="@/assets/anson/0610/c4p0.png"></img></div>
                <div class="font" v-text="main[4].paragraph[0]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[1]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[2]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[3]"></div>
                <br>
                <div class="font_bold" v-text="main[4].paragraph[4]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[5]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[6]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[7]"></div>
                <br>
                <div class="font_bold" v-text="main[4].paragraph[8]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[9]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[10]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[11]"></div>
                <br>
                <div class="font" v-text="main[4].paragraph[12]"></div>
            </div>
            <br>
        </div>

        <Footer showResouce=true />
    </div>
</template>

<style scoped rel="stylesheet" type="text/css">
#layout_Content{
    width: 100vw;
    padding: 2.96vh;
    text-align: left;
}
.title{
    font: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: bold;
    font-size: 2.47vh;
    line-height: 4.19vh;
    color: #5C5C5C;
}
.author{
    font: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 1.85vh;
    line-height: 2.47vh;
    color: #C7C7C7;
}
.font{
    font: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 1.85vh;
    line-height: 3.21vh;
    color: #5C5C5C;
}
.font_bold{
    font: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: 900;
    font-size: 1.85vh;
    line-height: 3.21vh;
    color: #5C5C5C;
}
.pic_box{
    display: flex;
    justify-content: center;
    padding: 2.1vh 0 2.1vh 0;
}
</style>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Content',
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            content: 0,
            main: [
                {
                    title: '什麼是心理諮商？',
                    author: '心輔組 ',
                    paragraph: [
                        '心理諮商就像一趟成長的旅程，在安全、自由與接納的空間裡，與心理師一起瞭解所遇到的困境，一起討論、釐清，並試著去處理自己的議題，為所面臨的問題找到可能的因應之道。'
                        ,'我們在人生的各個階段，無論是在學業、感情、生活、人際、情緒、未來方向等等，都有可能會遇到挫折與疑惑，適時的找到方法或外在資源來協助自己，能讓我們更快度過低潮，重新掌握內在的潛能、看到那個其實很有力量的自己。'
                        ,'心理諮商也許不能將我們所遭遇的問題直接去除，但能讓我們擁有更多能量與策略去面對挑戰及有所成長，用更好的自己去迎接未來。'
                        ,'除了各別心理諮商外，還有「團體心理諮商」'
                        ,'團體心理諮商是藉由領導者的帶領，讓參加團體的成員彼此互相交換與分享想法、感覺來瞭解自我與瞭解他人。'
                        ,'團體通常每週進行一次，共進行六至十週，視不同主題安排而定，目的都是幫助成員更深入探索自己的內心世界。'
                        ,'團體諮商與各別諮商不同之處在於可以同時與許多人互動，從中也能培養聆聽、同理、表達等人際互動技巧，且透過大家的分享獲得普同感，讓自己在成長的路上不孤單。'
                        ,'心輔組每學期也都會舉辦許多不同主題的團體，歡迎大家視自己的需求參加！'
                    ]
                },
                {
                    title: '良好的睡眠，從白天開始',
                    author: '心輔組 張文耀心理師',
                    paragraph: [
                        '睡眠不是從躺上床的那一刻開始嗎？如果你真的這麼想，那你就是把睡眠這件事看得太容易、太單純了。對於沒有睡眠困擾的人來說，有沒有這種看法可能沒什麼差別，但對於正飽嚐失眠之苦的人來說，這樣的看法不但無助於改變現況，更會讓良好的睡眠猶如水中月一般，看得到卻碰觸不著。'
                        ,'哲人尼采說過：「睡眠這件事並不渺小，為了它你需要維持整天的清醒」，可見夜裡的睡眠與白天的所作所為有極大的關係。他還說「你必須在白天找到十個真理，否則將在夜裡探索真理」。換句話說，要跨到睡眠狀態的容易程度，有很大部分取決於你醒著的時間。你要能對一整天的努力感到滿意，才能成功地結束這一天，到夜深人靜的時候，你才有辦法讓心靈安歇下來，以便能進入睡眠。'
                        ,'白天的哪些事會跟睡眠息息相關呢？第一個就是清醒的時間長度。睡眠就跟吃飯喝水等等生理功能一樣，缺乏了就要補充，缺乏越久，就越渴望獲得滿足，亦即，醒得越久就越想睡。所以白天多從事活動，避免小睡時間過長，都可以讓我們在睡覺前的睡眠驅力達到高峰，等到躺床的那一刻，才會由衷地湧現「睡覺真好」的感覺。'
                        ,'第二件事是擔憂。雖然這跟天生的個性有關，但也可以透過後天的練習進行調整。有的人在白天擔憂一堆事，整天都持續在情緒高亢的狀態，但了晚上繼續擔憂。擔憂會激發清醒系統，即使身體再累，睡眠驅力再強，擔憂的心總是會影響你的睡眠。因此，平時應盡量把事情處理好，但了晚上才不會又記掛這些事。即使事情沒處理完，也可以先用筆寫下來，再把你設想的解決方案也列下來，明天醒來繼續處理，這些事就可以暫時放下了。'
                        ,'第三是你對睡眠的一些不正確的觀念，這些不正確的觀念就可能在你睡不好的時候影響你，讓你嚐到持續失眠的滋味。那我們還會有哪些錯誤觀念呢？以下整理一些常見的睡眠迷思。這些觀念之所以稱為迷思，是因為它看起來好像是正確的，但是實際上並非如此。例如：每天一定要睡8小時才「正常」嗎？不一定！每個人需要的睡眠長度不同。睡到自然醒最好？這要看自然醒是怎麼醒，睡太久反而干擾生理時鐘的規律。睡不著時，躺著休息也好？雖然很多人會勸睡不好的人這麼做，但躺越久會越睡不著，即使睡著也只是淺眠！睡不好一定會影響隔天的工作狀況嗎？雖然隔天精神會受影響，但不見得會影響工作表現，過度擔心睡不好反而影響更大！假日補眠是減少睡眠債的好方法嗎？適度補眠（晚1小時起床）可減少睡眠債，但過度補眠卻會干擾生理時鐘與作息！因為睡不好，所以應該盡量減少活動的參與來補眠嗎？不可，活動太少會降低睡眠驅力，不利於晚上的睡眠。'
                        ,'此外，即使我們都不希望睡眠問題越拖越久，但是我們在白天所做的一些補償失眠的努力，可能會讓失眠持續下去。有哪些常見的錯誤補償方式呢？在經歷了一夜或數夜的睡眠不足，很自然的，我們會想賴床、增加白天小睡的時間，或是飲用含咖啡因的飲料提神。這些方式雖然可以暫時提振精神，但是卻也破壞了睡眠驅力、刺激著清醒系統持續運作，這些影響如果持續到晚上，就會影響晚上的睡眠，造成隔天再一次的睡眠問題。'
                        ,'因此，為了晚上能好好睡一覺，增加一夜好眠的機會，我們應該要體認睡眠的重要性，不該任意改變作息時間，平時的生活也應遵循健康的生活方式，規律運動、注意健康的飲食，凡此都可以讓生理時鐘規律化。睡覺時也應保持良好的睡眠習慣，除了睡覺和性行為以外，不要在床上做其他事，夜裡睡不著應離開床，等到想睡時再躺床（刺激控制法）。此外，創造最佳的睡眠環境，降低噪音、光線的影響，對睡眠也有幫助。最後則是要留意破壞睡眠的因素，例如咖啡因、菸酒、睡前水喝太多或太少、過飽或過飢等。'
                        ,'參考書目：'
                        ,'1.李宛蓉譯，民96。哈佛醫生的優質睡眠全書。商周出版。'
                        ,'2.周舒翎、楊建銘譯，民99。不再失眠。書泉出版。'
                        ,'3.周舒翎著，民101。為什麼就是睡不著。大塊文化出版。'
                        ,'4.楊建銘著，民99。失眠可以自療。時報出版。'
                    ]
                },
                {
                    title: '自我覺察是改變的入口',
                    author: '心輔組 張愷晏心理師',
                    paragraph: [
                        '成為心理師之前，因為想要成為一個有效能的心理師，所以對自我覺察非常有興趣；成為心理師後，常常聽到個案關於其生活中人事物的抱怨，同時感受到其強烈情緒，更想把自我覺察的概念和活動放在工作中。'
                        ,'人的身體是一個接受體，對外界所有訊息有所感知，生活中外在訊息何其多，如果我們沒有刻意練習靜下來往內覺察，很難有所改變。'
                        ,'常常有人問：「自我覺察要覺察什麼？」自我覺察是一個人可以從主觀、客觀的角度觀察自己在想法、情緒、行為的變化；一個人知道、了解、反省、思考自己在情緒、行為、想法、人我關係及個人特質等方面的狀況、變化、影響及發生的原因。'
                        ,'自我覺察並非漫無線索與無目標地進行覺察，覺察的線索包含生理感官、肢體動作、情緒感覺與想法念頭等四個來源，方法可區分：體驗和思考兩種。筆者將自己至今體驗過或常常放入生活中練習的方法陳述如下，供讀者嘗試看看：'
                        ,'一、 心理位移法寫日記'
                        ,'1. 以「我」為主詞寫日記。'
                        ,'2. 同一篇日記，主詞改成「你」。'
                        ,'3. 同一篇日記，再將主詞改成「他」。'
                        ,'這個方法可以幫助從主觀和客觀不同角度看自己。'
                        ,'二、 畫畫'
                        ,'1. 流動性高的媒材，例如：水彩、粉彩、水墨。這類媒材很能貼近自己的情緒和感受，挑選顏色、意境、顏料濃淡厚薄都可以從情緒和感受出發。'
                        ,'2. 近年常見的禪繞畫，運用很細的黑筆或白筆，在白紙或黑紙上依照圖樣規則畫出規律的線條，組合成一幅畫作。這個畫法很適合用來覺察想法和呼吸。'
                        ,'三、 禁語散步'
                        ,'一般的散步，但是不跟人交談，和自己的身體連結，傾聽身體的狀態，可以覺察壓力是否停留在身體的某處。'
                        ,'四、 靜坐'
                        ,'是一個覺察呼吸、情緒和思緒的方式，只要找一張椅子，脊椎打直，雙腳平放在地板上，眼睛閉上或專注在鼻尖，可以從10分鐘開始練習，慢慢增加時間。'
                        ,'除了上述的方法，有些人喜歡跑步、游泳、爬山、旅行、烹飪、打掃、手作……等，只要能在從事活動時將注意力回到自己的內在狀態進行自我覺察，也都會是很好的方式。'
                        ,'缺乏自我覺察，我們的生活與關係將被挑戰所支配、可能不相信我們具有面對外界挑戰的能力、可能抑制跟他人的聯結、可能將自己的能力像朦霧般籠罩、可能造成感覺上的失聯。倘若能提升自我覺察的能力，比較能知道自己內在發生了什麼，上演了什麼劇碼，也才能替自己選擇是否要繼續演出一樣的戲碼，才可能開始改變。'
                    ]
                },
                {
                    title: '轉個彎，看見更不一樣的風景',
                    author: '心輔組 鄭淑惠講師',
                    paragraph: [
                        '一夥劫匪在搶劫銀行時說了一句至理名言：“通通不許動，錢是國家的，命是自己的！”大家都一聲不吭全躺倒。這是一則笑話，不過倒說的妙，觀點喬對了小命就有機會保住，想活命就看你遇到事情時能否讓自己觀念轉化，能否讓自己好過，能否改變原有固定的思維方式。'
                        ,'一回我為些事情心煩意躁，在家看甚麼做甚麼都不對，乾脆出去走路，沿著街道看見正忙著炊煮的麵攤老闆、被外傭推著輪椅的中風長輩、正在搬運瓦斯桶的揮汗工人，走著看著，或許注意力被轉移，或許走路運動讓體能有些抒發，或許眼前的種種畫面帶來些感觸？開始問自己我還可以如何應對這些難題？有沒有其他方法？這些難題給我的學習是甚麼？腦子不再那麼固執開始有些不同的想法蹦出來，當我走進家門時我感覺經驗這些難事，我可以有些收穫的。'
                        ,'現代正向心理學運動之父Martin slegan 研究發現教導十歲的孩童樂觀思考和行動的能力，可以減低他們在青春期之後得到憂鬱症的機率一半以上；正向心理學又稱為正面思考，強調當人遇到挑戰或挫折時，能有正向情緒、正向特質，會產生解決問題的企圖心，不斷練習改變思路，強化正向力量，讓自己建立積極進取的人生態度。這也就是原本在哈佛大學最熱門的通識課是 “經濟學導論”，但自從Dr.Tal Ben-Shahar在哈佛開了一門以正向心理學為基礎的幸福課，來談如何創造自己的幸福後，這個通識王牌就拱手讓給了這門幸福課。'
                        ,'我們願意給自己機會嗎？願意有些不同發生嗎？願意用正向角度看待事情嗎？'
                        ,'記得聖經有段話說：「因為他心怎樣思量，他為人就是怎樣。」（箴言23章7節）當心境悲觀負面時，好像再美的風景怎麼看都不美，相對你會發覺，心情開闊時，隨時嘴角都在微笑。四月時辦場由法鼓山果東方丈和尚與賴清德市長的幸福講談，對方丈和尚提到的「正面解讀，逆向思考」很有體悟，若能把人生每個階段看待成契機，當事情來時就面對，遇到問題不是挑戰其實是學習，沒有遇到就沒有學習新功課的機會，如同基督信仰對我的教導相信任何經歷都有其功課要學習；能把困境轉化成生命的營養劑時，你會很感謝那些給你難題的人，因為他正提供教材讓你學東西，也要很欣賞自己，若不是自己願意去經歷，你怎會有學習的機會呢！'
                        ,'要有好心情不是難登天的事，但是好心情要練習，要幸福必須要經營，自己才是情緒的主人，別把情緒主權交在別人手上，選擇轉個彎，就會看見不同的風景，讓自己轉個念，為自己帶來正面的能量。'
                        ,'你願意給自己機會嗎? '
                    ]
                },
                {
                    title: '選擇幸福，讓抱怨不只是抱怨',
                    author: '心輔組 林書郁實習心理師',
                    paragraph: [
                        '「有沒有搞錯阿？」'
                        ,'「好煩阿…好累人…」'
                        ,'「我真是受夠了！」'
                        ,'以上這些話語是否讓你感到熟悉？幾乎每一天都會有些讓我們忍不住小小發個牢騷的事情發生，別人讓我們感到不愉快、天氣太熱、下雨好麻煩…這一切看起來是如此的正常與合理。但最近閱讀了《練習不抱怨》一書，提醒我去思考：抱怨了…然後呢？'
                        ,'為什麼要抱怨？'
                        ,'生活中大概很少有人是完全不抱怨的吧？大家都這麼做，它一定有一些好處。正因為大家都抱怨，所以抱怨時，我們不必擔心自己與眾不同，藉由抱怨同一件事，能夠建立與他人的連結。向別人述說自己的不滿，有時能引起他人的注意，並試著讓自己的觀點得到別人的認同，若以開玩笑的語氣來包裝抱怨，或許還能搞笑、展現幽默感。? '
                        ,'有些時候，抱怨是一種表現反抗的方式，將自己對他人或環境的不滿宣洩出來。有時候，透過抱怨其他人、事、物，告訴自己「事情就是…」無力改變，讓自己向困境屈服，不用再努力掙扎、痛苦。'
                        ,'看起來，抱怨真的能帶來一些好處，至少當針對一件事或一個人發完牢騷後，有時心情真好，好像吐了一口怨氣。但是抱怨完了…然後呢？'
                        ,'讓抱怨不只是抱怨'
                        ,'當我們抱怨的時候，通常是在表達自己的某些需求。當抱怨某些人事物讓自己很累時，或許是表達對於休息的需求；抱怨朋友讓自己失望時，或許是表達對於被關心、被愛的需求；抱怨事情總是一團亂時，或許正表達對秩序、對控制感的需求…等。每個人都有自己的需求，得不到滿足的時候，容易引起負向的情緒反應，把這些情緒說出來有時是很好的宣洩。若只是抱怨，需求可能無法因此得到滿足，根本的問題無法被解決，而落入抱怨的循環中，甚至將負向情緒帶給他人，影響人際相處。'
                        ,'書中告訴我們，要減少抱怨，最重要的是願意選擇幸福。在心中出現抱怨的念頭時，或許能試著去思考自己所想要的是什麼，找到讓自己不愉快的原因，然後試著主動做一些事滿足這些需求。疲憊的時候，安排時間讓自己好好休息；需要協助與關心時，主動對他人表達自己的需要；事情亂七八糟，就在自己能掌控的範圍內去安排、執行。找到方法滿足自己的需求之後，抱怨就會逐漸減少。'
                        ,'面對某些處境，要去改變那些情況並不容易，反而是去改變心態，學習將負面思考放下，接受實際狀況與自己的不完美，試著用正向的心態活在當下。像是網路斷掉，對現在的許多人來說都是很不方便的。除了生氣外，想一想能夠做些什麼，或許是打電話請人修復，然後在修復之前，做一些平常想做但沒有做的事，像是閱讀一本書，把握時間打掃房間等。讓這個意外變成難得脫離網路，做其他事情的美好時光。'
                        ,'當下次要開口抱怨的時候，不妨多想一想，怎麼做會讓自己更接近想要的生活，勇敢選擇讓自己幸福，讓抱怨不再只是停留在抱怨，將幸福、快樂的目標重新擺到生活的中心，並一步一步的邁向它。'
                    ]
                }
            ]
        }
    },
    methods: {
    },
    mounted() {
        this.content = this.$store.state.ContentNum;
    }
}
</script>
