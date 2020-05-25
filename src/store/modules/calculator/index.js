
// state
export const state = ({
    resultNumber : 0,
});


// action
export const actions = {
    // eslint-disable-next-line no-unused-vars
    resultNumberAction({commit, dispatch} , payload) {
        commit(`setResultNumber`, payload);
    },
};


// mutation
export const mutations = {
  setResultNumber(state, payload) {
        state.resultNumber = payload.resultNumber;
  },
};

// getter
export const getters = {
    // eslint-disable-next-line no-unused-vars
    resultNumber(state, getters, rootState) {
        return state.resultNumber;
    },

    rootState(state, getters, rootState) {
        return rootState.rootTest;
    }
};


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
