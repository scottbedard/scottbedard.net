import Vue from 'vue';
import Title from 'components/title';

//
// Factory
//
let getVm = () => {
    return new Vue({
        template: '<div><v-title></v-title></div>',
        components: { 'v-title': Title },
    }).$mount();
};

//
// Tests
//
describe('title.vue', () => {
    it('Should render correct contents', () => {
        let vm = getVm();
        console.log (vm.$vm.foo());
        // const vm = new Vue({
        //     template: '<div><master></master></div>',
        //     components: { Master },
        // }).$mount();
        // expect(vm.$el.querySelector('h1').textContent).toBe('oc-vuetober-theme');
    });
});

// also see example testing a component with mocks at
// https://github.com/vuejs/vue-loader-example/blob/master/test/unit/a.spec.js#L24-L49
