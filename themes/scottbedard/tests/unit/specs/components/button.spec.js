
//
// specs
//
describe('<v-button>', () => {
    it('emits a "click" event when clicked', () => {
        const onClick = sinon.stub();

        const vm = mount({
            methods: {
                onClick,
            },
            template: `<v-button @click="onClick" />`,
        });

        click(vm.$el);

        expect(onClick).to.have.been.called;
    });

    it('renders default slot content', () => {
        const vm = mount({
            template: `<v-button>Hello world</v-button>`,
        });

        expect(vm.$el.textContent).to.equal('Hello world');
    });

    it('accepts a "to" prop for rendering as a <router-link>', () => {
        const vm = mount({
            template: `<v-button :to="{ name: 'home' }" />`,
        });

        expect(vm.$el.tagName).to.equal('A');

        const push = sinon.stub(vm.$router, 'push');

        click(vm.$el);

        expect(push).to.have.been.calledWithMatch({ name: 'home' });
    });
});
