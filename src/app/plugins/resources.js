import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

//
// Append an X-CSRF-TOKEN to every post back to the server
//
let token = document.querySelector('meta[name=token]').getAttribute('content');
Vue.http.headers.common['X-CSRF-TOKEN'] = token;

Vue.use({
    install() {
        Vue.prototype.$resources = this.resources;
    },
    resources(resources) {
        const promises = [];
        Object.keys(resources).forEach(key => {
            const promise = resources[key];
            promise.then(({ data, body }) => {
                // @todo: figure out why data is a string on the dev server
                this[key] = typeof data === 'object' ? data : JSON.parse(body);
            });
            promises.push(promise);
        });
        return Promise.all(promises);
    },
});
