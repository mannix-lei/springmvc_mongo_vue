import axios from 'axios/index'

export const INIT_USERLIST_REQUEST = 'INIT_USERLIST_REQUEST'
export const INIT_USERLIST_SUCCESS = 'INIT_USERLIST_SUCCESS'
export const INIT_USERLIST_FAILED = 'INIT_USERLIST_FAILED'

export default {
  state: {
    userList: []
  },
  mutations: {
    [INIT_USERLIST_REQUEST] (state) {
      state.userList = {}
    },
    [INIT_USERLIST_SUCCESS] (state, data) {
      state.userList = data
    },
    [INIT_USERLIST_FAILED] (state, error) {
      console.info(error)
    }
  },
  getters: {
    filterUser: state => {
      return state.user.filter(item => item.name)
    }
  },
  actions: {
    initUserList (context) {
      context.commit('INIT_USERLIST_REQUEST')
      axios.get('http://localhost:8088/Main').then((res) => {
        context.commit('INIT_USERLIST_SUCCESS', res.data)
      }).catch((error) => {
        context.commit('INIT_USERLIST_FAILED', error)
      })
    }
  }
}
