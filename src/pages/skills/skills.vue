<style lang="scss" scoped>@import 'core';
    .universe {
        margin-top: 40px;

        @include bp(tablet) {
            align-items: center;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            margin-top: 0;
            min-height: 600px;
        }

        .circle-1,
        .circle-2,
        .circle-3 {
            border-radius: 50%;
            border: 1px dotted;
            position: absolute;
            z-index: 0;
            @include bp-prop(display, none, false, block);
        }

        .circle-1 {
            border-color: #d0d0d0;
            height: 140px;
            width: 140px;
        }

        .circle-2 {
            border-color: #dadada;
            height: 340px;
            width: 340px;
        }

        .circle-3 {
            border-color: #dfdfdf;
            height: 500px;
            width: 500px;
        }
    }

    .featured {
        text-align: center;
        @include bp-prop(display, none, false, block);
    }
</style>

<template>
    <v-page>
        <h1>Skills</h1>
        <div class="universe">
            <v-skill
                v-for="skill in skills"
                @feature="onSkillFeatured"
                :skill="skill">
            </v-skill>
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
        </div>

        <!-- Featured -->
        <div class="featured" v-if="featuredSkill">
            <h2>{{ featuredSkill.name }}</h2>
            <p v-linkable v-html="featuredSkill.text"></p>
        </div>
    </v-page>
</template>

<script>
    import Skills from './data';

    export default {
        data() {
            return {
                featuredSkill: null,
            };
        },
        components: {
            'v-skill': require('./skill'),
        },
        computed: {
            skills: () => Skills,
        },
        methods: {
            onSkillFeatured(skill) {
                this.featuredSkill = skill;
            },
        },
    };
</script>
