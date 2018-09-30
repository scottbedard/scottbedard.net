
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
});
