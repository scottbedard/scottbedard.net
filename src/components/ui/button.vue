<style lang="scss" scoped>@import 'core';
    $opacity: 0.9;

    a,
    button {
        border: 0;
        border-radius: 3px;
        cursor: pointer;
        color: #fff;
        display: inline-block;
        outline: none;
        @include transition('background-color');

        //
        // Colors
        //
        @each $color, $value in $colors {
            &.color-#{ $color } {
                background-color: rgba($value, $opacity);
                border-bottom: 2px solid darken($value, 5%);

                &:hover {
                    background-color: darken(rgba($value, $opacity), 10%);
                    border-color: darken(rgba($value, $opacity), 15%);
                }

                &:active {
                    background-color: darken(rgba($value, $opacity), 15%);
                    border-color: darken(rgba($value, $opacity), 20%);
                }
            }
        }

        &.color-white {
            background-color: $white;
            color: $font-color;
            border-color: $light-grey;

            &:hover {
                background-color: darken($white, 10%);
                border-color: darken($light-grey, 10%);
            }
        }

        //
        // Sizes
        //
        &.size-m {
            font-size: 20px;
            line-height: 20px;
            padding: 18px 32px;
        }
    }
</style>

<script>
    export default {
        render(h) {
            if (this.href !== null) {
                return this.renderAnchor(h);
            }

            if (this.route !== null) {
                return this.renderRouteAnchor(h);
            }

            return this.renderButton(h);
        },
        computed: {
            buttonClasses() {
                let classes = [
                    this.colorClass,
                    this.sizeClass,
                    'v-button',
                ];

                return classes.join(' ');
            },
            colorClass() {
                return `color-${ this.color }`;
            },
            sizeClass() {
                return `size-${ this.size.slice(0, 1).toLowerCase() }`;
            },
        },
        methods: {
            emit(event) {
                return () => this.$emit(event);
            },
            renderAnchor(h) {
                return <a href={ this.href } class={ this.buttonClasses } on-click={ this.emit('click') }>
                    { this.$slots.default }
                </a>;
            },
            renderButton(h) {
                return <button class={ this.buttonClasses } on-click={ this.emit('click') }>
                    { this.$slots.default }
                </button>;
            },
            renderRouteAnchor(h) {
                return <router-link to={ this.route } class={ this.buttonClasses }>
                    { this.$slots.default }
                </router-link>;
            },
        },
        props: {
            color: { default: 'white' },
            route: { default: null },
            href: { default: null },
            size: { type: String, default: 'medium' },
        },
    };
</script>
