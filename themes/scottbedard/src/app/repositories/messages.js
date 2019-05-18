import axios from 'axios';

// create a message
export function postMessage(payload) {
    return axios.post('/api/bedard/bedard/messages', payload);
}
