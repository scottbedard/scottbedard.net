import { MutationTree } from 'vuex';
import { BrowserState } from './state';

//
// mutations
//
const mutations: MutationTree<BrowserState> = {
    setHeight(state, height: number) {
        state.height = height;
    },
    setWidth(state, width: number) {
        state.width = width;
    },
};

export default mutations;
