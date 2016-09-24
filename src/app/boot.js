//
// Window events
//
import WindowState from 'src/state/window';

WindowState.sync();
window.onscroll = () => WindowState.updateScrollTop();
window.onresize = () => WindowState.updateDimensions();

//
// Directives
//
require('./directives/linkable');

//
// Plugins
//
require('./plugins/resources');
require('./plugins/router');
