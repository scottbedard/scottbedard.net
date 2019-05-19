import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('date', (value, format = 'ddd MMM D YYYY') => dayjs(value).format(format));
