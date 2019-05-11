import axios from 'axios';

// fetch a single post by slug
export function getPost(slug) {
    return axios.get(`/api/bedard/bedard/blog/${slug}`);
}

// fetch all blog posts
export function getPosts() {
    return axios.get('/api/bedard/bedard/blog');
}
