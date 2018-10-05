<style lang="scss" scoped>
.universe {
    height: 600px;
}

.circle-1 {
    border-color: #d0d0d0;
    height: 156px;
    width: 156px;
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

.skill {
    div {
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
    }
}

// @for $i from 1 through 3 {
//     &:nth-child(#{ $i }) {
//         animation: orbit-#{ $i } #{ $orbit-speed } linear 0s infinite;
//         &:hover { animation-play-state: paused; .level { animation-play-state: paused }}
//         .level {
//             animation: level-#{ $i } #{ $orbit-speed } linear 0s infinite reverse;
//             height: 90px;
//             width: 90px;
//         }
//         img { width: 60px }
//     }
//     @keyframes level-#{ $i } {
//         from { transform: rotate(#{ 0deg - ($i * 120) }) }
//         to { transform: rotate(#{ 360deg - ($i * 120) }) }
//     }
//     @keyframes orbit-#{ $i } {
//         from { transform: rotate(#{ 0deg + ($i * 120) }) translateX(70px) }
//         to { transform: rotate(#{ 360deg + ($i * 120) }) translateX(70px) }
//     }
// }
</style>

<template>
    <div class="flex items-center justify-center relative universe">
        <!-- orbit animation keyframes -->
        <v-dynamic-style :content="firstOrbitKeyframes" />

        <!-- circles -->
        <div class="absolute border border-dotted circle-1 pin-center rounded-half z-0"></div>
        <div class="absolute border border-dotted circle-2 pin-center rounded-half z-0"></div>
        <div class="absolute border border-dotted circle-3 pin-center rounded-half z-0"></div>

        <!-- first orbit -->
        <div
            v-for="(skill, i) in firstOrbit"
            :key="skill.id"
            :style="{
                animation: `first-orbit-${i} 60s linear 0s infinite`,
            }"
            class="skill absolute flex h-20 items-center justify-center w-20">
            <div 
                class="bg-grey-lightest flex h-full items-center justify-center rounded-half w-full"
                :style="{
                    animation: `first-orbit-${i}-inner 60s linear 0s infinite`
                }">
                <img
                    class="h-auto w-12"
                    :alt="skill.name"
                    :src="skill.logo.path"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import dynamicStyleComponent from '@/components/shared/dynamic_style.vue';

export default {
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
            const degreeOffset = 360 / this.firstOrbit.length;

            return this.firstOrbit.map((s, i) => {
                const rotation = i * degreeOffset;

                return `
                    @keyframes first-orbit-${i} {
                        from { transform: rotate(${rotation}deg) translateX(64px) }
                        to { transform: rotate(${rotation + 360}deg) translateX(64px) }
                    }
                    @keyframes first-orbit-${i}-inner {
                        from { transform: rotate(-${rotation}deg) }
                        to { transform: rotate(-${rotation + 360}deg) }
                    }
                `;
            });
        },
    },
    components: {
        'v-dynamic-style': dynamicStyleComponent,
    },
};
</script>
