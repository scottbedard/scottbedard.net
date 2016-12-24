<style lang="scss" scoped>@import 'core';
    a {
        color: $red;
        &:hover { color: darken($red, 10%) }
    }

    p {
        line-height: 24px;
    }

    .legend {
        display: flex;
        flex-wrap: wrap;
    }

    .control {
        $turn-width: 25px;
        $key-spacing: 15px;
        display: flex;
        flex: 1;
        width: 100%;
        flex-basis: auto;
        margin-top: 5px;

        &:first-child {
            justify-content: center;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
            padding-bottom: 5px;
            .turn { width: $turn-width * 2 }
        }

        .left,
        .right {
            display: flex;
            width: 50%;
            flex-basis: auto;
        }

        .left {
            justify-content: flex-end;
        }

        .key {
            &:first-child { padding-right: $key-spacing }
            &:last-child { padding-left: $key-spacing;}
        }

        .turn {
            font-weight: bold;
            text-align: center;
            width: $turn-width;
        }
    }
</style>

<template>
    <div>
        <h1>Keyboard Controls</h1>
        <p>To those not familiar with cube notation, <a href="https://www.speedsolving.com/wiki/index.php/3x3x3_notation" target="_blank">this might be a good place to start</a>. The controls for this project are modeled after the way a real cube is turned. This means turns you would typically make with your right hand are on the right side of a qwerty keyboard, and vice versa.</p>

        <div class="legend">
            <div class="control">
                <div class="key">Key</div>
                <div class="turn">Turn</div>
                <div class="key">Key</div>
            </div>
            <div v-for="{ leftKey, leftTurn, rightTurn, rightKey } in keyboardControls" class="control">
                <div class="left">
                    <div v-if="leftKey" class="key">{{ leftKey }}</div>
                    <div v-if="leftTurn" class="turn">{{ leftTurn }}</div>
                </div>
                <div class="right">
                    <div v-if="rightTurn" class="turn">{{ rightTurn }}</div>
                    <div v-if="rightKey" class="key">{{ rightKey }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                keyboardControls: [
                    { leftTurn: 'U\'', leftKey: 'F', rightTurn: 'U', rightKey: 'J' },
                    { leftTurn: 'L', leftKey: 'D' },
                    { leftTurn: 'L\'', leftKey: 'E' },
                    { leftTurn: 'F\'', leftKey: 'G', rightTurn: 'F', rightKey: 'H' },
                    { rightTurn: 'R', rightKey: 'I' },
                    { rightTurn: 'R\'', rightKey: 'K' },
                    { leftTurn: 'B', leftKey: 'W', rightTurn: 'B\'', rightKey: 'O' },
                    { leftTurn: 'D', leftKey: 'S', rightTurn: 'D\'', rightKey: 'L' },
                    { leftTurn: 'X', leftKey: 'B, N, M', rightTurn: 'X\'', rightKey: 'R, T, Y,  or U' },
                    { leftTurn: 'Y\'', leftKey: 'A', rightTurn: 'Y', rightKey: ';' },
                    { leftTurn: 'Z\'', leftKey: 'Q', rightTurn: 'Z', rightKey: 'P' },
                ],
            };
        },
    };
</script>
