<script>
import { bindAll } from 'spyfu-vue-functional';

export default {
    render(h, context) {
        const bindings = bindAll(context);
        const { color, href, to } = context.props;

        //
        // colors
        //
        if (color) {
            // standard colors
            bindings.class.push('text-grey-lightest', 'hover:text-white');

            if (color === 'blue') bindings.class.push('bg-blue');
            else if (color === 'green') bindings.class.push('bg-green');
            else if (color === 'indigo') bindings.class.push('bg-indigo');
            else if (color === 'orange') bindings.class.push('bg-orange');
            else if (color === 'pink') bindings.class.push('bg-pink');
            else if (color === 'purple') bindings.class.push('bg-purple');
            else if (color === 'red') bindings.class.push('bg-red');
            else if (color === 'teal') bindings.class.push('bg-teal');
        } else {
            // no color (grey)
            bindings.class.push('bg-grey', 'text-grey-darker', 'hover:text-grey-darkest');
        }

        //
        // button types
        //
        let Tag = 'button';

        if (typeof to === 'object') {
            Tag = 'router-link';
        } else if (typeof href === 'string') {
            Tag = 'a';
        }

        return <Tag
            class={[
                'cursor-pointer',
                'inline-flex',
                'no-underline',
                'opacity-80',
                'px-8',
                'py-4',
                'rounded',
                'text-lg',
                'transition-font',
                'transition-opacity',
                'tz-0', // <- force hardware acceleration to smooth out transitions
                'focus:outline-none',
                'hover:opacity-90',
            ]}
            href={href}
            to={to}
            {...bindings}>
            {context.slots().default}
        </Tag>;
    },
    functional: true,
    props: {
        color: {
            type: String,
        },
        href: {
            type: String,
        },
        to: {
            type: Object,
        },
    },
};
</script>
