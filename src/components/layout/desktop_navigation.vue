<style lang="scss" scoped>@import 'core';
    nav {
        font-size: 0.7em;
        @include bp-prop(display, none, false, block);
    }

    a {
        padding: 0 12px;
        &:first-child { padding-left: 0 }
        &:last-child { padding-right: 0 }
    }
</style>

<script>
    import Navigation from 'src/app/navigation';

    export default {
        render(h) {
            return <nav>{ Navigation.map(link => {
                return link.href
                    ? <a href={ link.href } target="_blank">{ link.name }</a>
                    : <router-link to={ link.route }>{ link.name }</router-link>;
            }) }</nav>;
        },
    };
</script>
