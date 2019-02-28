import types from '../mutation-types'

const state = {
  data: ''
}

const actions = {
  getData({ commit }) {
    console.log(1)
    console.log(localStorage.getItem('data'))
    let data = JSON.parse(localStorage.getItem('data'))
    commit(types.GET_DATA, data)
  },
  addData({ commit }, payload) {
    let data = JSON.parse(localStorage.getItem('data'))
    data.push(payload)
    localStorage.setItem('data', JSON.stringify(data))
    commit(types.ADD_DATA, data)
  }
}

const mutations = {
  [types.GET_DATA](state, payload) {
    state.data = payload
  },
  [types.ADD_DATA](state, payload) {
    state.data = payload
  }
}

const getters = {
  getAllData:(state) => {
    return state.data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}