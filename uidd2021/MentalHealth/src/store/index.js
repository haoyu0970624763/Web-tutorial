import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userName: '',
    PressScore: '',
    analysisResult: '',
    mentalId: '',
    mentalInfo: '',
    month:'',
    day:'',
    time:'',
    mental:'',
  },

  mutations: {
    // 设置用户信息
    setUserInfo(state, name) {
      state.userName = name
    },
    setPressScore(state, PressScore) {
      state.PressScore = PressScore
    },
    setAnalysisResult(state, analysisResult) {
      state.analysisResult = analysisResult
    },
    setMentalId(state, mentalId) {
      state.mentalId = mentalId
    },
    setMentalInfo(state, mentalInfo) {
      state.mentalInfo = mentalInfo
    },
    setBookMonth(state,month){
      state.month = month
    },
    setBookDay(state,day){
      state.day = day
    
    },
    setBookTime(state,time){
      state.time = time
    },
    setBookMental(state,mental){
      state.mental = mental
    }

  },
  plugins: [createPersistedState()]
})
