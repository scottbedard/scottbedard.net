import { getSkills } from '@/app/repositories/skills';

//
// actions
//
export default {
    // get skills
    getSkills({ commit, state }) {
        if (state.skills.length > 0) {
            return Promise.resolve();
        }

        commit('setIsLoading', true);

        const request = getSkills();

        request.then((response) => {
            // success
            commit('setSkills', response.data);
        }).finally(() => {
            // complete
            commit('setIsLoading', false);
        });

        return request;
    },
};
