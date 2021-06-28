import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Homepage.vue'
import Press from '@/views/PressStartPage.vue'
import Press2 from '@/views/Press.vue'
import PressResult from '@/views/PressResult.vue'
import reserve from '@/views/reserve.vue'
import start from '@/views/start.vue'
import analysis from '@/views/analysis.vue'
import Matchresult from '@/views/Matchresult.vue'
import reservation from '@/views/reservation.vue'
import Picktime from '@/views/Picktime.vue'
import Contactinformation from '@/views/Contactinformation.vue'
import Relax from '@/views/Relax.vue'
import Medical from '@/views/Medical.vue'
import Support from '@/views/Support.vue'
import Article from '@/views/Article.vue'
import Content from '@/views/Content.vue'
import State from '@/views/State.vue'

import MoodTree from '@/views/MoodTreeMain.vue'
import Tree_exchange from '@/views/Tree_exchange.vue'
import TreeHistory from '@/views/TreeHistory.vue'
import MoodQA from '@/views/MoodQA.vue'

import profile from '@/views/profile.vue'
import Reservationsuccess from '@/views/Reservationsuccess.vue'
import DiaryMain from '@/views/DiaryMain.vue'
import DiaryWrite from '@/views/DiaryWrite.vue'
import Otherresource from '@/views/Otherresource.vue'
import Mypublicdiary from '@/views/Mypublicdiary.vue'
import Myhollow from '@/views/Myhollow.vue'
import Mycomment from '@/views/Mycomment.vue'
import DiaryOthers from '@/views/DiaryOthers.vue'

Vue.use(Router)

export default new Router({
  // 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/press',
      name: 'Press',
      component: Press
    },
    {
      path: '/Press2',
      name: 'Press2',
      component: Press2
    },
    {
      path: '/Press/Result',
      name: 'PressResult',
      component: PressResult
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: reserve
    },
    {
      path: '/start',
      component: start
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: analysis
    },
    {
      path: '/Matchresult',
      name: 'Matchresult',
      component: Matchresult
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: reservation
    },
    {
      path: '/Picktime',
      name: 'Picktime',
      component: Picktime
    },
    {
      path: '/Contactinformation',
      name: 'Contactinformation',
      component: Contactinformation
    },
    {
      path: '/Others/Relax',
      name: 'Relax',
      component: Relax
    },
    {
      path: '/Others/Medical',
      name: 'Medical',
      component: Medical
    },
    {
      path: '/Others/Support',
      name: 'Support',
      component: Support
    },
    {
      path: '/Others/Article',
      name: 'Article',
      component: Article
    },
    {
      path: '/Others/Article/Content',
      name: 'Content',
      component: Content
    },
    {
      path: '/State',
      name: 'State',
      component: State
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/Reservationsuccess',
      name: 'Reservationsuccess',
      component: Reservationsuccess
    },
    {
      path: '/diary',
      component: DiaryMain
    },
    {
      path: '/diary/write',
      component: DiaryWrite
    },
    {
      path: '/mood',
      name: 'MoodTree',
      component: MoodTree
    },

    {
      path: '/Otherresource',
      name: 'Otherresource',
      component: Otherresource
    },
    {
      path: '/Mypublicdiary',
      name: 'Mypublicdiary',
      component: Mypublicdiary
    },
    {
      path: '/Myhollow',
      name: 'Myhollow',
      component: Myhollow
    },
    {
      path: '/tree_exchange',
      name: 'Tree_exchange',
      component: Tree_exchange
    },
    {
      path: '/diary/write',
      name:'DiaryWrite',
      component: DiaryWrite
    },
    {
      path: '/tree_history',
      name:'TreeHistory',
      component: TreeHistory
    },
    {
      path: '/mood_QA',
      name:'MoodQA',
      component: MoodQA
    },
    {
      path: '/Mycomment',
      name: 'Mycomment',
      component: Mycomment
    },
    {
      path: '/DiaryOthers',
      name: 'DiaryOthers',
      component: DiaryOthers
    },

  ]
})
