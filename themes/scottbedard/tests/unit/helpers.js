import Vue from 'vue';
import sinon from 'sinon';
import { expect } from 'chai';
import { factory as spyfuVueFactory } from 'spyfu-vue-factory';

import modules from '@/app/store';

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
