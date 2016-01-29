let Header = require('models/header');

//
// After route hook
//
module.exports = function({ from, to, next, abort, redirect }) {
    Header.hideNavigation();
    next();
};
