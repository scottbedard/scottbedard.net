import Vue from 'vue';

export default {
    getSubjects() {
        return Vue.http.get('/api/bedard/contact/subjects');
    },
    sendMessage(data) {
        return Vue.http.post('/api/bedard/contact/messages', data);
    },
};
