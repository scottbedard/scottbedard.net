<style lang="scss" scoped>
    .buttons {
        margin-top: 20px;
    }
</style>

<template>
    <v-splash-page>
        <div>
            <div>
                Hi there,<br />
                I'm Scott, and I build cool things at <a href="https://spyfu.com" target="_blank">SpyFu</a>.
            </div>
            <v-button-group class="buttons">
                <v-button
                    v-for="link in navigation"
                    size="large"
                    :route="link.route"
                    :href="link.href"
                    :color="link.color">
                    {{ link.name }}
                </v-button>
            </v-button-group>
        </div>
    </v-splash-page>
</template>

<script>
    import Navigation from 'src/app/navigation';

    export default {
        computed: {
            navigation() {
                return Navigation;
            },
        },
    };
</script>
