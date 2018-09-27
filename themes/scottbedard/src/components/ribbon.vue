<template>
    <div 
        class="fixed h-full pin-l pin-t pointer-events-none transition-opacity w-full"
        :class="{
            'opacity-0': isRedrawing,
        }">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { blend } from '@/app/utils/color';
import { debounce } from 'lodash-es';
import { mapState } from 'vuex';

interface Coordinate {
    x: number;
    y: number;
}

interface RibbonVue extends Vue {
    draw: () => void;
    isRedrawing: boolean;
    redraw: () => void;
}

// create an array of colors that we'll allow the ribbon to blend
// between. Each base color will have a series of complimentary
// colors, and then we can just randomize the starting color.
const red = 'ff1100';
const pink = 'f48fb1';
const purple = '9c27b0';
const indigo = '3f51b5';
const blue = '2196f3';
const cyan = '00bcd4';
const green = '009307';
const lightGreen = '8bc34a';
const yellow = 'ffeb3b';
const orange = 'ef6c00';

const colors: { [key: string]: string[] } = {
    [red]: [yellow, purple],
    [yellow]: [red, pink, green, orange],
    [green]: [cyan, blue, yellow],
    [purple]: [yellow, cyan, blue, red],
    [blue]: [red, pink, lightGreen, purple, green],
};

const baseColors = Object.keys(colors);

// set up some other constants we'll need to draw the ribbon.
// eventually, these could be converted to props to make it
// a bit more unteractive, but until then this is fine.
const opacity = 0.4;
const deviation = 135;

export default Vue.extend({
    data() {
        return {
            isRedrawing: false,
        };
    },
    mounted() {
        this.draw();

        const redrawInterval = setInterval(this.redraw, 60000);

        this.$on('hook:destroyed', () => clearInterval(redrawInterval));
    },
    computed: {
        ...mapState('browser', [
            'height',
            'width',
        ]),
    },
    methods: {
        draw(): void {
            // first things first, we need to get our canvas ready to be drawn
            // on. While we're here, lets also create a few other neccessary
            // variables for drawing the ribbon, and how it should appear.
            const canvas = this.$refs.canvas as HTMLCanvasElement;
            canvas.height = this.height;
            canvas.width = this.width;

            const ctx = canvas.getContext('2d');

            if (ctx !== null) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';

                // set up some other constants we'll need to draw the ribbon
                const verticalCenter = this.height / 2;
                const vertices = Math.ceil(this.width / 40);

                // determine the colors our ribbon will use, and give them a 50%
                // chance of being revsersed to keep the ribbon a bit more interesting.
                const firstColor: string = baseColors[Math.floor(Math.random() * baseColors.length)];
                const secondColor: string = colors[firstColor][Math.floor(Math.random() * colors[firstColor].length)];

                const gradient: any = Math.random() > 0.5
                    ? blend(firstColor, secondColor, vertices + 4)
                    : blend(secondColor, firstColor, vertices + 4);

                // Loop through our vertices and create a point and color for each
                // one. we're looping from 0 to vertices +4 in order to draw our
                // ribbon through the left and right most edges of the window.
                let points: Coordinate[] = [];
                let totalHeight = 0;
                const width = this.width / vertices;

                for (let i = 0, end = vertices + 4; i < end; i++) {
                    const previousHeight = i === 0 ? verticalCenter : points[i - 1].y;

                    const point = {
                        x: i * width - (width * 2),
                        y: previousHeight + (Math.random() * deviation) - (deviation / 2),
                    };

                    points.push(point);

                    totalHeight += point.y;
                }

                // by tracking the average height of the ribbon, we can keep things
                // roughly in the center of the screen. we'll use this value with
                // the height of the window to determine an approximate offset.
                const offset = verticalCenter - (totalHeight / points.length);

                points = points.map((point) => {
                    point.y += offset;

                    return point;
                });

                // last step, we just need to play connect the dots with our points
                // to draw our triangles. after that, we can fill each one with a
                // color from our gradients array. enjoy the colorful goodness!
                for (let i = 0, end = points.length; i < end; i++) {
                    const a = points[i];
                    const b = points[i + 1];
                    const c = points[i + 2];

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
                }
            }
        },
        redraw: debounce(function(this: RibbonVue) {
            this.isRedrawing = true;

            setTimeout(() => {
                this.draw();

                this.$nextTick(() => {
                    this.isRedrawing = false;
                });
            }, 150, { leading: true });
        }, 150),
    },
    watch: {
        width: 'redraw',
    },
});
</script>
