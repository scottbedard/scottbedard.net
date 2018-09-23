import Vuex from 'vuex';
import browser from './browser';

//
// root state interface
//
export interface RootState {

}

//
// store
//
export default new Vuex.Store({
    modules: {
        browser,
    },
    // strict: !isProduction,
});
