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

import profile from '@/views/profile.vue'
import reservation from '@/views/reservation.vue'
import Picktime from '@/views/Picktime.vue'
import Reservationsuccess from '@/views/Reservationsuccess.vue'
import Feeling from '@/views/Feeling.vue'
import Temp from '@/views/Temp.vue'
import DiaryMain from '@/views/DiaryMain.vue'
import DiaryWrite from '@/views/DiaryWrite.vue'
import Otherresource from '@/views/Otherresource.vue'

Vue.use(Router)

export default new Router({
  // 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/login'
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
      name:'home'
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
      path: '/profile',
      name: 'profile',
      component: profile
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
      path: '/Reservationsuccess',
      name: 'Reservationsuccess',
      component: Reservationsuccess
    },
    {
      path: '/temp',
      component: Temp
    },
    {
      path: '/feeling',
      component: Feeling
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
      path: '/Otherresource',
      name: 'Otherresource',
      component: Otherresource
    },
    
  
    
  ]
})
