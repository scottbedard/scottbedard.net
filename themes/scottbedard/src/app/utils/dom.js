/**
 * Determine if an event path passes through an element.
 *
 * @param  {Object}     e       event being inspected
 * @param  {Object}     target  element to check for
 * @return {boolean}
 */
export function isForeignClick(e, target) {
    let isForeign = true;

    walkEventPath(e, (el) => {
        if (isForeign && el === target) {
            isForeign = false;
        }
    });

    return isForeign;
}

/**
 * A cross-browser helper to itterate over event paths.
 *
 * @param {Event}       e   the event being processed
 * @param {Function}    fn  function to apply to each piece of the event path
 */
export function walkEventPath (e, fn) {
    // internet explorer doesn't natively support click event
    // paths, so we'll need to fake it by manually walking
    // up the DOM tree until we find the document body.
    if (typeof e.path === 'undefined') {
        const path = [];
        let node = e.target;

        while (node !== document.body) {
            path.push(node);
            node = node.parentNode;
        }

        e.path = path;
    }

    e.path.forEach(fn);
}