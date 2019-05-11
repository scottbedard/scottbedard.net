import axios from 'axios';

// fetch blog posts
export function getPosts() {
    return axios.get('/api/bedard/bedard/blog');
}
