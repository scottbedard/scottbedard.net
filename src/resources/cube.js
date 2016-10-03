import Vue from 'vue';

export default {
    store(solve) {
        return Vue.http.post('/api/bedard/cube/solves', solve);
    },
};
