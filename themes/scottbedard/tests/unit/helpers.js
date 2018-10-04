import Vue from 'vue';
import axios from 'axios';
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

//
// stub xhr requests
//
window.stubRequests = function (requests = {}) {
    Object.keys(requests).forEach((method) => {
        if (axios[method]) {
            Object.entries(requests[method] || {}).forEach(([endpoint, fixture]) => {
                if (fixture === true) {
                    // stub a success response
                    axios[method].withArgs(endpoint).resolves();
                } else if (fixture === false) {
                    // stub a failure response
                    axios[method].withArgs(endpoint).rejects();
                } else if (typeof fixture === 'object') {
                    // api for stubbing failed responses
                    if (fixture.status === 200) {
                        axios[method].withArgs(endpoint).resolves({
                            data: fixture.response(),
                        });
                    } else {
                        axios[method].withArgs(endpoint).rejects({
                            response: {
                                status: fixture.status,
                                data: fixture.response(),
                            },
                        });
                    }
                } else {
                    // stub a fixed response
                    axios[method].withArgs(endpoint).resolves({
                        data: fixture(),
                    });
                }
            });
        }
    });
};
