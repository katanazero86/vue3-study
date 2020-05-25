import { createStore } from 'vuex';
// 기존 import Vuex from 'vuex';

import calculator from './modules/calculator/index';

export const store = createStore({

    strict : false,
    modules : {
        calculator
    },

    // root state
    state () {
        return {
            rootTest: 'rootState',
            rootName: 'rootNameState',
            mapRootStateValue : 'test mapState',
        }
    }
});



