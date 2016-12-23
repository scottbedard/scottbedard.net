import Vue from 'vue';

export default {
    submit(data) {
        return Vue.http.post('/api/bedard/cube/solves', data);
    },
};
