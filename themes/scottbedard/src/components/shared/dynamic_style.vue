<script>
/* eslint-disable vue/require-render-return */
import { flattenDeep } from 'lodash-es';

export default {
    beforeDestroy() {
        // remove our style tag from the document head
        setTimeout(() => {
            document.head.removeChild(this.styleNode);
        }, this.leaveDelay);
    },
    data() {
        // create a style tag with a dynamic text node
        const styleNode = document.createElement('style');
        const textNode = document.createTextNode('');
        styleNode.type = 'text/css';
        styleNode.setAttribute('data-dynamic-style', '');
        styleNode.appendChild(textNode);

        return {
            styleNode,
            textNode,
        };
    },
    mounted() {
        // attach our style tag to the document head
        document.head.appendChild(this.styleNode);
    },
    render() {
        this.textNode.nodeValue = flattenDeep([this.content]).join('\n');
    },
    props: {
        content: {
            required: true,
            type: [Array, String],
        },
        leaveDelay: {
            default: 0,
            type: Number,
        },
    },
};
</script>
