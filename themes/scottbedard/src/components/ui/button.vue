<script>
import { bindAll } from 'spyfu-vue-functional';

export default {
    render(h, context) {
        const bindings = bindAll(context);

        return <button {...bindings}>
            {context.slots().default}
        </button>;
    },
    functional: true,
};
</script>
