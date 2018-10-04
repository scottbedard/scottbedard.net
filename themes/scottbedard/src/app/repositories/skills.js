import axios from 'axios';

/**
 * Get all skills.
 *
 * @return {Promise}
 */
export function getSkills() {
    return axios.get('/api/bedard/bedard/skills');
}
