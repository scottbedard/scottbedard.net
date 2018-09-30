import Vue from 'vue';
import { bindAll } from 'spyfu-vue-functional';

export default Vue.extend({
    render(h, context) {
        const bindings = bindAll(context);

        return <button {...bindings}>
            {context.slots().default}
        </button>;
    },
    functional: true,
});
