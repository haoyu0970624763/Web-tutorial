import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userName: '',
    PressScore: '',
    analysisResult: '',
    mentalId: 'k',
    mentalInfo: '',
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

  },
  plugins: [createPersistedState()]
})
