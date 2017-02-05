import Vue from 'vue';
import { normalizeResponse } from 'src/app/utilities/normalize_response';

export default {
    getLeaderboard(params = {}) {
        return Vue.http.get('/api/bedard/cube/solves', { params }).then(normalizeResponse);
    },
    submit(data) {
        return Vue.http.post('/api/bedard/cube/solves', data);
    },
};
