<script>
import { bindAll } from 'spyfu-vue-functional';

export default {
    render(h, context) {
        const bindings = bindAll(context);

        return <div {...bindings}>
            {context.slots().default}
        </div>;
    },
    functional: true,
};
</script>
