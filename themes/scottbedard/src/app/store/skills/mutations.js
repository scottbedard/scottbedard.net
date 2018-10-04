import { simpleSetters } from 'spyfu-vuex-helpers';

//
// mutations
//
export default {
    ...simpleSetters({
        setIsLoading: 'isLoading',
        setSkills: 'skills',
    }),
};
