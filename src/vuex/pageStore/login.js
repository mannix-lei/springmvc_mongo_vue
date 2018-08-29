import axios from 'axios'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export default {
  state: {
    user: {},
    loginInfo: ''
  },
  mutations: {
    [LOGIN_REQUEST] (state) {
      state.user = {}
    },
    [LOGIN_SUCCESS] (state, data) {
      state.loginInfo = data
    },
    [LOGIN_FAILED] (state, error) {
      state.loginInfo = error
    }
  },
  actions: {
    login (context, user) {
      context.commit('LOGIN_REQUEST')
      axios.post('http://localhost:8088/login', user).then((res) => {
        console.info(res.data)
        context.commit('LOGIN_SUCCESS', res.data)
      }).catch((error) => {
        context.commit('LOGIN_FAILED', error)
      })
    }
  }
}
