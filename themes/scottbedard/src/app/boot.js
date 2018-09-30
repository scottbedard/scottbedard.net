import Vue from 'vue';

//
// plugins
//
import './plugins/router';
import './plugins/vuex';

//
// register global components
//
import globalComponents from '@/components/global';

Object.keys(globalComponents).forEach((name) => {
    Vue.component(name, globalComponents[name]);
});
