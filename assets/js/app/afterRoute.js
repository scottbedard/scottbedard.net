let Header = require('models/header');

//
// After route hook
//
module.exports = function({ from, to }) {
    if (typeof to.title !== 'undefined') {
        document.title = to.title;
        Header.setTitle(to.title);
    }
};
