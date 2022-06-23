import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface User {
  gunId: string;
  tshirtId: string | null;
  username: string;
  life: number;
}

export default new Vuex.Store({
  state: {
    guns: [] as string[],
    users: [] as User[],
    gameFinished: false
  },
  getters: {
  },
  mutations: {
    setGuns(state, guns) {
      state.guns = guns;
    },
    addGun(state, gun) {
      state.guns.push(gun);
    },
    addUser(state, user) {
      state.users.push(user);
    },
    addTshirt(state, data: { gunId: string, tshirtId: string }) {
      const user = state.users.find(user => user.gunId === data.gunId);
      if (user) {
        user.tshirtId = data.tshirtId;
      }
    },
    shootPirla(state, data: { shooterGunId: string, tshirtId: string }) {
      const user = state.users.find(user => user.gunId === data.shooterGunId);
      if (user) {
        user.life--;
      }
    },
    setGameFinished(state, value: boolean) {
      state.gameFinished = value;
    }
  },
  actions: {
  },
  modules: {
  }
});
