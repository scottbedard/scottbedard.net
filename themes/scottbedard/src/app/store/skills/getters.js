//
// getters
//
export default {
    // active skills
    activeSkills(state) {
        return state.skills.filter(skill => skill.retiredAt === null);
    },

    // retired skills
    retiredSkills(state) {
        return state.skills.filter(skill => skill.retiredAt !== null);
    },
};
