<style lang="scss" scoped>
    .v-card {
        background-color: rgba(255, 255, 255, 0.95);
    }
</style>

<script>
import { bindAll } from 'spyfu-vue-functional';

export default {
    render(h, context) {
        const bindings = bindAll(context);
        const { padded } = context.props;

        bindings.class.push(
            'v-card',
            padded && 'p-4',
        );

        return <div {...bindings}>
            {context.slots().default}
        </div>;
    },
    functional: true,
    props: {
        padded: {
            default: false,
            type: Boolean,
        },
    },
};
</script>
