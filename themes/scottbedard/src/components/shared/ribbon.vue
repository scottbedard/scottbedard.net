<template>
    <div
        class="fixed h-full pin-l pin-t pointer-events-none transition-opacity w-full"
        style="z-index:-1"
        :class="opacityClass">
        <canvas
            class="absolute pin"
            ref="canvas"
        ></canvas>
    </div>
</template>

<script>
/* eslint-disable max-len */
import { blend } from '@/app/utils/color';
import { createArray } from '@/app/utils/array';
import { componentTimeout } from 'spyfu-vue-utils';

// create an array of colors that we'll allow the ribbon to blend
// between. Each base color will have a series of complimentary
// colors, and then we can just randomize the starting color.
const blue = '2196f3';
const cyan = '00bcd4';
const green = '009307';
const indigo = '3f51b5';
const lightGreen = '8bc34a';
const orange = 'ef6c00';
const pink = 'f48fb1';
const purple = '9c27b0';
const red = 'ff1100';
const yellow = 'ffeb3b';

const colors = {
    [red]: [yellow, purple],
    [yellow]: [red, pink, green, orange],
    [green]: [cyan, blue, yellow],
    [purple]: [indigo, cyan, blue, red],
    [blue]: [indigo, lightGreen, purple, green],
};

const baseColors = Object.keys(colors);

// set up some other constants we'll need to draw the ribbon.
// eventually, these could be converted to props to make it
// a bit more unteractive, but until then this is fine.
const opacity = 0.3;
const deviation = 135;

export default {
    created() {
        this.$root.$on('redraw-canvas-ribbon', this.redraw);
    },
    data() {
        return {
            debouncedRedraw: null,
            isRedrawing: false,
        };
    },
    mounted() {
        this.draw();

        const redrawInterval = setInterval(this.redraw, 60000);

        this.$on('hook:destroyed', () => clearInterval(redrawInterval));
    },
    computed: {
        height() {
            return this.$root.height;
        },
        opacityClass() {
            return this.isRedrawing ? 'opacity-0' : 'opacity-100';
        },
        width() {
            return this.$root.width;
        },
    },
    methods: {
        draw() {
            // first things first, we need to get our canvas ready to be drawn
            // on. While we're here, lets also create a few other neccessary
            // variables for drawing the ribbon, and how it should appear.
            const { canvas } = this.$refs;
            canvas.width = this.width;
            canvas.height = this.height;

            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';

            // set up some other constants we'll need to draw the ribbon
            const verticalCenter = this.height / 2;
            const vertices = Math.ceil(this.width / 40);

            // determine the colors our ribbon will use, and give them a 50%
            // chance of being revsersed to keep the ribbon a bit more interesting.
            const firstColor = baseColors[Math.floor(Math.random() * baseColors.length)];
            const secondColor = colors[firstColor][Math.floor(Math.random() * colors[firstColor].length)];

            const gradient = Math.random() > 0.5
                ? blend(firstColor, secondColor, vertices + 4)
                : blend(secondColor, firstColor, vertices + 4);

            // Loop through our vertices and create a point and color for each
            // one. we're looping from 0 to vertices +4 in order to draw our
            // ribbon through the left and right most edges of the window.
            let totalHeight = 0;
            let previousHeight = verticalCenter;

            const width = this.width / vertices;

            const points = createArray(vertices + 4).map((n, i) => {
                const x = (i * width) - (width * 2);
                const y = (previousHeight + (Math.random() * deviation)) - (deviation / 2);

                previousHeight = y;

                // by tracking the average height of the ribbon, we can keep things
                // roughly in the center of the screen. we'll use this value with
                // the height of the window to determine an approximate offset.
                totalHeight += y;

                return { x, y };
            });

            const offset = verticalCenter - (totalHeight / points.length);

            // last step, we just need to play connect the dots with our points
            // to draw our triangles. after that, we can fill each one with a
            // color from our gradients array. enjoy the colorful goodness!
            points
                .map(({ x, y }) => ({ x, y: y + offset }))
                .forEach((point, i, arr) => {
                    const a = arr[i];
                    const b = arr[i + 1];
                    const c = arr[i + 2];

                    ctx.fillStyle = `rgba(${gradient[i].join(',')}, ${opacity})`;

                    if (b && c) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.lineTo(c.x, c.y);
                        ctx.closePath();
                        ctx.fill();
                        ctx.stroke();
                    }
                });
        },
        redraw() {
            const redraw = () => {
                this.draw();
                this.isRedrawing = false;
            };

            this.isRedrawing = true;
            this.debounceRedraw = redraw;

            componentTimeout(this, () => {
                if (this.debounceRedraw === redraw) {
                    redraw();
                }
            }, 150);
        },
    },
    watch: {
        $route(to, from) {
            if (from.name !== null) {
                this.redraw();
            }
        },
        width: 'redraw',
    },
};
</script>
