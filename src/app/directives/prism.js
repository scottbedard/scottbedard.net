import Prism from 'prismjs';
import Vue from 'vue';

// core languages
// css, html, javascript, markup, mathm, svg, xml

// additional languages
require('prismjs/components/prism-markdown');
require('prismjs/components/prism-php');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-yaml');

Vue.directive('prism', {
    bind(el, binding, vnode) {
        for (let code of el.querySelectorAll('code')) {
            let source = code.innerHTML;
            let language = code.className.split('-')[1];
            let syntax = Prism.languages[language];

            if (syntax !== 'undefined') {
                code.innerHTML = Prism.highlight(source, syntax);
            } else {
                console.warn(`Prism language definition not found for "${ language }"`);
            }
        }
    },
});
