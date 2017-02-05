import Vue from 'vue';

//
// Window events
//
import WindowState from 'src/state/window';

WindowState.sync();
window.onscroll = () => WindowState.updateScrollTop();
window.onresize = () => WindowState.updateDimensions();

//
// Global components
//
import components from 'src/components';
Object.keys(components).forEach(name => Vue.component(name, components[name]));

//
// Directives
//
require('./directives/linkable');
require('./directives/prism');

//
// Plugins
//
require('./plugins/resources');
require('./plugins/router');
