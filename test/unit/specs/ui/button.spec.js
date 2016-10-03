import Vue from 'vue';
import VueRouter from 'vue-router';
import ButtonComponent from 'src/components/ui/button';
import { routes } from 'src/app/routes';

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

    it('renders router-link components when a route prop is passed in', () => {
        const router = new VueRouter({
            base: __dirname,
            mode: 'history',
            routes,
        });

        const vm = new Vue({
            router,
            el: document.createElement('div'),
            components: { 'v-button': ButtonComponent },
            render: h => <div><v-button route="/">></v-button></div>,
        });

        expect(vm.$el.querySelectorAll('a').length).to.equal(1);
    });
});
