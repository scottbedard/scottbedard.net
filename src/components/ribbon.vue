<style lang="sass" scoped>
    canvas {
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: -1;

        &.content {
            opacity: 0.7;
        }
    }
</style>

<template>
    <canvas></canvas>
</template>

<script>
    import Color from 'classes/color';

    export default {

        /**
         * @type {Object}
         */
        props: {
            reset: { default: 120000 },
            clear: { default: true },
        },

        /**
         * Draw our ribbon when the DOM element is attached
         *
         * @return {void}
         */
        attached() {
            // First things first, we need to get our canvas ready to be drawn
            // on. While we're here, lets also create a few other neccessary
            // variables for drawing the ribbon, and how it should appear.
            let canvas = this.$el,
                ctx = canvas.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.draw(canvas, ctx);

            // Redraw the ribbon every couple of minutes
            if (this.reset) {
                setInterval(() => this.draw(canvas, ctx), this.reset);
            }
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Draw the ribbon
             *
             * @return {void}
             */
            draw(canvas, ctx) {

                // Clear the canvas
                if (this.clear) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }

                let opacity         = 0.4,  // The opacity of the ribbon
                    points          = [],   // Container for each ribbon point
                    totalHeight     = 0,    // Sum of our ribbon's Y coordinates
                    deviation       = 135,  // Allowed deviation for the center
                    vertices        = Math.ceil(window.innerWidth / 40),
                    width           = window.innerWidth / vertices,
                    verticalCenter  = window.innerHeight / 2;

                // Create an array of colors that we'll allow the ribbon to blend
                // between. Each base color will have a series of complimentary
                // colors, and then we can just randomize the starting color.
                let colors = {
                    'ff0000': ['0000ff', 'ffff00'],
                    '00dd00': ['009999', '0000ee'],
                    '0000ee': ['00ffff', '00ff00'],
                };

                let base    = Object.keys(colors),
                    first   = base[Math.floor(Math.random() * base.length)],
                    last    = colors[first][Math.floor(Math.random() * colors[first].length)];

                // Give our colors a 50% change of being swapped
                if (Math.random() > 0.5) {
                    [first, last] = [last, first];
                }

                // Calculate our gradient colors
                let gradient = Color.gradient(first, last, vertices + 4);

                // Loop through our vertices and create a point and color for each
                // one. We're looping from 0 to vertices +4 in order to draw our
                // ribbon through the left and right most edges of the window.
                for (let i = 0, end = vertices + 4; i < end; i++) {
                    let previousHeight = i === 0 ? verticalCenter : points[i - 1].y;

                    let point = {
                        x: i * width - (width * 2),
                        y: previousHeight + (Math.random() * deviation) - (deviation / 2),
                    };

                    points.push(point);
                    totalHeight += point.y;
                }

                // By tracking the average height of the ribbon, we can keep things
                // roughly in the center of the screen. We'll use this value with
                // the height of the window to determine an approximate offset.
                let offset = verticalCenter - (totalHeight / points.length);
                points = points.map(point => {
                    point.y += offset;
                    return point;
                });

                // Last step, we just need to play connect the dots with our points
                // to draw our triangles. After that, we can fill each one with a
                // color from our gradients array. Enjoy the colorful goodness!
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
                for (let i = 0, end = points.length; i < end; i++) {
                    let a = points[i], b = points[i + 1], c = points[i + 2];
                    ctx.fillStyle = `rgba(${ gradient[i].r }, ${ gradient[i].g }, ${ gradient[i].b }, ${ opacity })`;

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
            },
        },
    };
</script>
