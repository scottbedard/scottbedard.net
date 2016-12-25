<style lang="scss" scoped>@import 'core';
    .description {
        font-size: 18px;
        font-weight: 300;
        line-height: 36px;
        margin-bottom: 30px;
    }

    .experiment {
        border-top: 1px solid #ccc;
        padding: 30px 0;
        display: flex;

        .image {
            align-items: center;
            display: flex;

            img {
                height: auto;
                min-width: 80px;
                width: 100%;
                @include bp-prop(max-width, 100px, 125px, 150px);
                @include transition(max-width);

            }
        }

        .details {
            @include bp-prop(margin-left, 10px, 20px, 40px, 60px);
            @include transition(margin-left);
        }
    }
</style>

<template>
    <v-page class="v-experiments">
        <h1>Code experiments</h1>
        <p class="description">Every now and then I use this site as a sandbox to mess around with random ideas. Here are just a few of them, I hope you find them interesting.</p>
        <div class="experiments">
            <router-link v-for="{ image, title, path, description } in experiments" class="experiment" :to="path">
                <div class="image">
                    <img :src="image" alt="title">
                </div>
                <div class="details">
                    <h2>{{ title }}</h2>
                    <p>{{ description }}</p>
                </div>
            </router-link>
        </div>
    </v-page>
</template>

<script>
    export default {
        data() {
            return {
                experiments: [
                    {
                        description: 'An odd experiment to see how far we can push the 3D transform abilities of CSS.',
                        title: 'CSS Cube',
                        path: '/cube',
                        image: require('./cube/cube.png'),
                    },
                    {
                        description: 'Getting my feet with with the canvas element.',
                        title: 'Canvas ribbon',
                        path: '/canvas-ribbon',
                        image: require('./canvas_ribbon/ribbon.png'),
                    },
                ],
            };
        },
    };
</script>
