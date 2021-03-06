import skillsComponent from '@/pages/skills/skills.vue';

//
// fixtures
//
import { skillsFixture } from '../../fixtures/skills';

//
// factory
//
const mount = factory({
    components: {
        'v-skills': skillsComponent,
    },
});

//
// specs
//
describe('skills page', () => {
    beforeEach(() => {
        stubRequests({
            get: {
                '/api/bedard/bedard/skills': skillsFixture,
            },
        });
    });

    it('fetches skills on create', (done) => {
        const vm = mount({
            template: `<v-skills />`,
        });

        expect(vm.$store.state.skills.isLoading).to.be.true;

        setTimeout(() => {
            expect(vm.$store.state.skills.isLoading).to.be.false;
            expect(vm.$store.state.skills.skills).to.deep.equal(skillsFixture());

            done();
        }, 10);
    });
});
