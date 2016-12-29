import Prism from 'prismjs';
import Vue from 'vue';
import { php } from 'src/app/utilities/syntax_highlighter';

// core languages
// css, html, javascript, markup, mathm, svg, xml

// additional languages
require('prismjs/components/prism-markdown');
require('prismjs/components/prism-php');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-yaml');

Vue.directive('prism', {
    bind(el, binding, vnode) {
        for (let code of el.querySelectorAll('pre > code')) {
            let source = code.innerHTML;
            let language = code.className.split('-')[1];
            let syntax = Prism.languages[language];

            if (syntax !== 'undefined') {
                source = source.replace(/\&lt;/g, '<').replace(/\&gt;/g, '>').replace(/\&amp;/g, '&');
                code.parentElement.className += ' prism';

                let highlightedCode = Prism.highlight(source, syntax);
                if (language === 'php') highlightedCode = php(highlightedCode);

                code.innerHTML = highlightedCode;
            } else {
                console.warn(`Prism language definition not found for "${ language }"`);
            }
        }
    },
});
