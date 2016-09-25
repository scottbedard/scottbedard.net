<style lang="scss" scoped>
    .buttons {
        margin-top: 20px;
    }
</style>

<template>
    <div class="page splash">
        <div>
            <div>
                Hi there,<br />
                I'm Scott, and I build cool things at <a href="https://spyfu.com">SpyFu</a>.
            </div>
            <v-button-group class="buttons">
                <v-button route="/blog" color="green">Thoughts</v-button>
                <v-button route="/experiments" color="blue">Experiments</v-button>
                <v-button route="/skills" color="indigo">Skills</v-button>
                <v-button href="https://github.com/scottbedard" target="_blank" color="red">GitHub</v-button>
                <v-button route="/contact" color="teal">Contact</v-button>
            </v-button-group
        </div>
    </div>
</template>
