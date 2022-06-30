import { User } from '@/types';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taggers: [] as string[],
    users: [] as User[],
    gameFinished: false
  },
  getters: {
  },
  mutations: {
    setTaggers(state, taggers) {
      state.taggers = taggers;
    },
    addTagger(state, tagger) {
      state.taggers.push(tagger);
    },
    removeTagger(state, taggerId) {
      state.taggers = state.taggers.filter(tagger => tagger !== taggerId);
    },
    addUser(state, user) {
      state.users.push(user);
    },
    bindTshirt(state, data: { username: string, tshirtId: string }) {
      const user = state.users.find(user => user.username === data.username);
      if (user) {
        user.tshirtId = data.tshirtId;
      }
    },
    tagUser(state, data: { whoDidIt: string, username: string }) {
      const user = state.users.find(user => user.username === data.username);

      if (user) {
        user.life--;
      }
    },
    userDied(state, data: { whoDidIt: string, username: string }) {
      const user = state.users.find(user => user.username === data.username);

      if (user) {
        user.life--;
      }
    },
    dieDied(state, data: { username: string }) {
      const user = state.users.find(user => user.username === data.username);

      if (user) {
        user.life = 0;
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
