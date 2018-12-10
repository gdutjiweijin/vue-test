import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';
import * as actions from './action';
import * as getters from './getters';
import state from './state';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
