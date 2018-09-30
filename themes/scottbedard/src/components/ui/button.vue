<script>
import { bindAll } from 'spyfu-vue-functional';

export default {
    render(h, context) {
        const bindings = bindAll(context);
        const { to } = context.props;

        let Tag = 'button';

        if (typeof to === 'object') {
            Tag = 'router-link';
        }

        return <Tag to={to} {...bindings}>
            {context.slots().default}
        </Tag>;
    },
    functional: true,
    props: {
        to: {
            type: Object,
        },
    },
};
</script>
