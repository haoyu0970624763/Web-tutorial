import Vue from 'vue'
import Router from 'vue-router'
import profile from '@/views/profile.vue'
import homepage from '@/views/homepage.vue'
import reservation from '@/views/reservation.vue'

Vue.use(Router)

export default new Router({
  // 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀
  mode: 'history',
  routes: [
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/homepage',
      component: homepage
    },
    {
      path:'/reservation',
      component:reservation
    }
  ]
})
