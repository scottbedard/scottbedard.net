<style lang="scss" scoped>
.universe {
    height: 600px;
}

.circle-1 {
    border-color: #d0d0d0;
    height: 154px;
    width: 154px;
}

.circle-2 {
    border-color: #dadada;
    height: 350px;
    width: 350px;
}

.circle-3 {
    border-color: #dfdfdf;
    height: 538px;
    width: 538px;
}

.skill {
    transition: z-index;
    transition-delay: 150ms;

    div {
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
    }

    .skill-tooltip {
        opacity: 0;
        transform: translateY(0);
    }

    &:hover {
        transition-delay: 0ms;
        z-index: 10;

        .skill-inner {
            box-shadow: 0 0 24px rgba(0, 0, 0, 0.25);
        }

        .skill-tooltip {
            opacity: 1;
            transform: translateY(-1rem);
        }
    }
}
</style>

<template>
    <div class="flex items-center justify-center relative universe">
        <!-- orbit animation keyframes -->
        <v-dynamic-style :content="[
            firstOrbitKeyframes,
            secondOrbitKeyframes,
            thirdOrbitKeyframes,
        ]" />

        <!-- circles -->
        <div class="absolute border border-dotted circle-1 pin-center rounded-half z-0"></div>
        <div class="absolute border border-dotted circle-2 pin-center rounded-half z-0"></div>
        <div class="absolute border border-dotted circle-3 pin-center rounded-half z-0"></div>

        <!-- first orbit -->
        <div
            v-for="(skill, i) in firstOrbit"
            :key="skill.id"
            :style="{ animation: `orbit-1-${i} 90s linear 0s infinite` }"
            class="skill absolute flex h-20 items-center justify-center w-20 z-0">
            <div
                class="skill-inner bg-white flex h-full items-center justify-center relative rounded-half transition-shadow w-full"
                :style="{ animation: `orbit-1-${i}-inner 90s linear 0s infinite` }">
                <v-skill-tooltip>{{ skill.name }}</v-skill-tooltip>
                <img class="h-auto w-2/3" :alt="skill.name" :src="skill.logo.path" />
            </div>
        </div>

        <!-- second orbit -->
        <div
            v-for="(skill, i) in secondOrbit"
            :key="skill.id"
            :style="{ animation: `orbit-2-${i} 180s linear 0s infinite` }"
            class="skill absolute flex h-14 items-center justify-center w-14 z-0">
            <div
                class="skill-inner bg-white flex h-full items-center justify-center opacity-90 rounded-half transition-shadow w-full"
                :style="{ animation: `orbit-2-${i}-inner 180s linear 0s infinite` }">
                <v-skill-tooltip>{{ skill.name }}</v-skill-tooltip>
                <img class="h-auto w-3/5" :alt="skill.name" :src="skill.logo.path" />
            </div>
        </div>

        <!-- third orbit -->
        <div
            v-for="(skill, i) in thirdOrbit"
            :key="skill.id"
            :style="{ animation: `orbit-3-${i} 240s linear 0s infinite` }"
            class="skill absolute flex h-8 items-center justify-center w-8 z-0">
            <div
                class="skill-inner bg-white flex h-full items-center justify-center opacity-80 rounded-half transition-shadow w-full"
                :style="{ animation: `orbit-3-${i}-inner 240s linear 0s infinite` }">
                <v-skill-tooltip>{{ skill.name }}</v-skill-tooltip>
                <img class="h-auto w-3/5" :alt="skill.name" :src="skill.logo.path" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import dynamicStyleComponent from '@/components/shared/dynamic_style.vue';
import skillTooltipComponent from './tooltip/tooltip.vue';

export default {
    components: {
        'v-dynamic-style': dynamicStyleComponent,
        'v-skill-tooltip': skillTooltipComponent,
    },
    computed: {
        ...mapState('skills', [
            'skills',
        ]),
        activeSkills() {
            return this.skills.filter(skill => skill.retiredAt === null);
        },
        firstOrbit() {
            return this.activeSkills.filter(skill => skill.orbit === 1);
        },
        firstOrbitKeyframes() {
            const offset = 360 / this.firstOrbit.length;

            return this.firstOrbit.map((s, i) => {
                const rotation = i * offset;

                return `
                    @keyframes orbit-1-${i} {
                        from { transform: rotate(${rotation}deg) translateX(68px) }
                        to { transform: rotate(${rotation + 360}deg) translateX(68px) }
                    }
                    @keyframes orbit-1-${i}-inner {
                        from { transform: rotate(-${rotation}deg) }
                        to { transform: rotate(-${rotation + 360}deg) }
                    }
                `;
            });
        },
        secondOrbit() {
            return this.activeSkills.filter(skill => skill.orbit === 2);
        },
        secondOrbitKeyframes() {
            const offset = 360 / this.secondOrbit.length;

            return this.secondOrbit.map((s, i) => {
                const rotation = i * offset;

                return `
                    @keyframes orbit-2-${i} {
                        from { transform: rotate(${rotation}deg) translateX(170px) }
                        to { transform: rotate(${rotation + 360}deg) translateX(170px) }
                    }
                    @keyframes orbit-2-${i}-inner {
                        from { transform: rotate(-${rotation}deg) }
                        to { transform: rotate(-${rotation + 360}deg) }
                    }
                `;
            });
        },
        thirdOrbit() {
            return this.activeSkills.filter(skill => skill.orbit === 3);
        },
        thirdOrbitKeyframes() {
            const offset = 360 / this.thirdOrbit.length;

            return this.thirdOrbit.map((s, i) => {
                const rotation = i * offset;

                return `
                    @keyframes orbit-3-${i} {
                        from { transform: rotate(${rotation}deg) translateX(268px) }
                        to { transform: rotate(${rotation + 360}deg) translateX(268px) }
                    }
                    @keyframes orbit-3-${i}-inner {
                        from { transform: rotate(-${rotation}deg) }
                        to { transform: rotate(-${rotation + 360}deg) }
                    }
                `;
            });
        },
    },
};
</script>
