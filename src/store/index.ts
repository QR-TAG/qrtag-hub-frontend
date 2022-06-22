import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guns: [] as string[]
  },
  getters: {
  },
  mutations: {
    setGuns(state, guns) {
      state.guns = guns;
    },
    addGun(state, gun) {
      state.guns.push(gun);
    }
  },
  actions: {
  },
  modules: {
  }
})
