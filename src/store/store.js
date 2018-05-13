import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import article from './article';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    article: {
      ...article,
      namespaced: true,
    },
  },
});
