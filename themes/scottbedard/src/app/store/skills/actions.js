import { getSkills } from '@/app/repositories/skills';

//
// actions
//
export default {
    // get skills
    getSkills({ commit }) {
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
