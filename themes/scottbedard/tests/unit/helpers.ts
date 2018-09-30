import { factory as vueFactory, FactoryOptions } from 'spyfu-vue-factory';
import Vue, { VueConstructor, Component } from 'vue';

// import '@/app/boot';

//
// click something
//
export function click(el: HTMLElement) {
    el.click();
}

//
// factory construct a vue component
//
export function factory(options: FactoryOptions = {}) {
    return vueFactory({
        ...options,
    });
}

//
// a factory with default options
//
export function mount(options: Component = {}, state: object = {}): Vue {
    return factory({
        Vue,
    })(options, state);
}
