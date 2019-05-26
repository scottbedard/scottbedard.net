//
// before each
//
export function beforeEach(route, redirect, next) {
    next();
}

//
// after each
//
export function afterEach(route) {
    window.ga('set', 'page', route.path);
    window.ga('send', 'pageview');
}
