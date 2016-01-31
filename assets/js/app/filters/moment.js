import Vue from 'vue';
import Moment from 'moment';

//
// Moment.js filter - http://momentjs.com/docs/#/displaying
//
Vue.filter('moment', (value, format) => Moment(value).format(format));
