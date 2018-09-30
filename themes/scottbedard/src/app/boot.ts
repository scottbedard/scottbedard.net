// this is global boot file is used by both the application and testing environment
// to setup our Vue instance. here we'll install plugins, filters, register global
// components, etc... be cautions when adding to this, as they'll be added everywhere.
import Vue from 'vue';

//
// plugins
//
import './plugins/router';
import './plugins/vuex';

//
// global components
//
import globalComponents from '@/components/global';

Object.keys(globalComponents).forEach((name) => Vue.component(name, globalComponents[name]));
