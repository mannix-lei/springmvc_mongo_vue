import Vuex from 'vuex'
import Vue from 'vue'
import home from './pageStore/home'
import login from './pageStore/login'

Vue.use(Vuex)
const Index = new Vuex.Store({
  modules: {
    home: home,
    login: login
  }
})

export default Index
