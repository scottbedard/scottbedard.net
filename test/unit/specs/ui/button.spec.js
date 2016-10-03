import Vue from 'vue';
import ButtonComponent from 'src/components/ui/button';

describe('button.vue', () => {
    it('attaches a color class to the button', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            components: { 'v-button': ButtonComponent },
            render: h => <v-button color="red"></v-button>,
        });

        expect(Object.values(vm.$el.classList).indexOf('color-red')).not.to.equal(-1);
    });

    it('attaches an anchor when an href prop is passed in', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            components: { 'v-button': ButtonComponent },
            render: h => <div><v-button href="http://scottbedard.net">></v-button></div>,
        });

        expect(vm.$el.querySelectorAll('a[href="http://scottbedard.net"]').length).to.equal(1);
    });
});
