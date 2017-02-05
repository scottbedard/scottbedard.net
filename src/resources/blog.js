import Vue from 'vue';
import { normalizeResponse } from 'src/app/utilities/normalize_response';

export default {
    getPost(slug, params = {}) {
        return Vue.http.get(`/api/rainlab/blog/posts/${slug}`, { params }).then(normalizeResponse);
    },
    getPosts(params) {
        return Vue.http.get('/api/rainlab/blog/posts', { params }).then(normalizeResponse);
    },
};
