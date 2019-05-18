import axios from 'axios';

// get all skills
export function getSkills() {
    return axios.get('/api/bedard/bedard/skills');
}
