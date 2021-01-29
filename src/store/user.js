const state = {
  user: null
};

const getters = {
  user: state => state.user
};

const actions = {
  signIn ({commit}, user) {
    commit('signIn', user);
  },
  signOut({commit}) {
    commit('signOut');
  }
};

const mutations = {
  signIn: (state, user) => {
    state.user = user;
  },
  signOut: state => state.user = null
};

export default {
  state,
  getters,
  actions,
  mutations
};