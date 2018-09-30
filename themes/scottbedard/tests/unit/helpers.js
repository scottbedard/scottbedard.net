import Vue from 'vue';
import sinon from 'sinon';
import { expect } from 'chai';
import { factory as spyfuVueFactory } from 'spyfu-vue-factory';

import modules from '@/app/store';
import routes from '@/app/routes';

//
// click an element
//
window.click = function click(el) {
    el.click();
};

//
// expect
//
window.expect = expect;

//
// create a vue factory
//
window.factory = function factory(options = {}) {
    return spyfuVueFactory({
        Vue,
        modules,
        routes,
        ...options,
    });
};

//
// default mount function
//
window.mount = factory();

//
// sinon
//
window.sinon = sinon;
