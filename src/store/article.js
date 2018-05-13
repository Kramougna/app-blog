import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const state = {
  allArticles: '',
};

const getters = {
  all: state => state.allArticles,
};

const actions = {
  getAll({ commit }) {
    const url = `${BASE_URL}/articles`;

    axios.get(url).then((response) => {
      commit('setArticles', response.data);
    });
  },
};

const mutations = {
  setArticles(state, articles) {
    state.allArticles = articles;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
