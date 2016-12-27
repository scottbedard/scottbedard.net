<style lang="scss" scoped>@import 'core';
    $orbit-speed: 60s;

    .v-skill {
        &:not(:last-child) { margin-bottom: 20px }

        img {
            height: auto;
            width: 50px;
        }

        .level {
            align-items: center;
            display: flex;
        }

        .details {
            padding-left: 20px;
            @include bp-prop(display, block, false, none);

            .name { font-weight: 400 }
        }

        @include bp(tablet) {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;

            .level {
                background-color: #fff;
                border-radius: 50%;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                justify-content: center;
                position: absolute;
                @include transition(box-shadow);

                &:hover {
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
                }

                img {
                    height: auto;
                    position: absolute;
                }
            }

            @for $i from 1 through 3 {
                &:nth-child(#{ $i }) {
                    animation: orbit-#{ $i } #{ $orbit-speed } linear 0s infinite;
                    &:hover { animation-play-state: paused; .level { animation-play-state: paused }}
                    .level {
                        animation: level-#{ $i } #{ $orbit-speed } linear 0s infinite reverse;
                        height: 80px;
                        width: 80px;
                    }
                    img { width: 50px }
                }
                @keyframes level-#{ $i } {
                    from { transform: rotate(#{ 0deg - ($i * 120) }) }
                    to { transform: rotate(#{ 360deg - ($i * 120) }) }
                }
                @keyframes orbit-#{ $i } {
                    from { transform: rotate(#{ 0deg + ($i * 120) }) translateX(70px) }
                    to { transform: rotate(#{ 360deg + ($i * 120) }) translateX(70px) }
                }
            }

            @for $i from 4 through 8 {
                &:nth-child(#{ $i }) {
                    animation: orbit-#{ $i } #{ $orbit-speed + 60 } linear 0s infinite;
                    &:hover {
                        animation-play-state: paused;
                        .level { animation-play-state: paused }
                    }
                    .level {
                        animation: level-#{ $i } #{ $orbit-speed + 60 } linear 0s infinite reverse;
                        height: 60px;
                        width: 60px;
                    }
                    img { width: 40px }
                }
                @keyframes level-#{ $i } {
                    from { transform: rotate(#{ 0deg - ($i * 72) }) }
                    to { transform: rotate(#{ 360deg - ($i * 72) }) }
                }
                @keyframes orbit-#{ $i } {
                    from { transform: rotate(#{ 0deg + ($i * 72) }) translateX(170px) }
                    to { transform: rotate(#{ 360deg + ($i * 72) }) translateX(170px) }
                }
            }

            @for $i from 9 through 16 {
                &:nth-child(#{ $i }) {
                    animation: orbit-#{ $i } #{ $orbit-speed + 120 } linear 0s infinite;
                    &:hover {
                        animation-play-state: paused;
                        .level { animation-play-state: paused }
                    }
                    .level {
                        animation: level-#{ $i } #{ $orbit-speed + 120 } linear 0s infinite reverse;
                        height: 45px;
                        width: 45px;
                    }
                    img { width: 25px }
                }
                @keyframes level-#{ $i } {
                    from { transform: rotate(#{ 0deg - ($i * 45) }) }
                    to { transform: rotate(#{ 360deg - ($i * 45) }) }
                }
                @keyframes orbit-#{ $i } {
                    from { transform: rotate(#{ 0deg + ($i * 45) }) translateX(250px) }
                    to { transform: rotate(#{ 360deg + ($i * 45) }) translateX(250px) }
                }
            }
        }
    }
</style>

<template>
    <div class="v-skill">
        <div class="level" @mouseenter="onAnchorClicked" @click="onAnchorClicked">
            <img :src="skill.img">
            <div class="details">
                <div class="name">{{ skill.name }}</div>
                <div class="text" v-html="getMobileText(skill.text)"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            getMobileText(text) {
                let escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                let expression = new RegExp(escapeRegex('<br />'), 'g');

                return text.replace(expression, '');
            },
            onAnchorClicked() {
                this.$emit('feature', this.skill);
            },
        },
        props: [
            'skill',
        ],
    };
</script>
