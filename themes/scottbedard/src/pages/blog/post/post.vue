<style lang="scss" scoped>
    .post /deep/ {
        @apply mt-0;

        > :not(:first-child) {
            @apply mt-6;
        }

        h2 {
            @apply font-normal;
        }

        pre {
            @apply bg-grey-darkest font-mono leading-normal p-4 rounded text-sm;

            .token {
                &.class-name { color: #ffcb6b }
                &.comment { @apply text-grey-dark }
            }
        }
    }
</style>

<style lang="scss">
    @import '../../../../node_modules/prismjs-material-theme/sass/oceanic';
</style>

<template>
    <v-page padded>
        <v-margin padded>
            <article
                v-if="!loading && post"
                class="max-w-lg mx-auto">
                <h1
                    v-text="post.title"
                    class="font-normal text-4xl"
                />
                <h2
                    v-if="!post.published"
                    v-text="'This is not published, only admins can see this'"
                    class="font-bold leading-normal mt-4 text-orange-light text-xs uppercase"
                />
                <p
                    v-if="post.excerpt"
                    v-text="post.excerpt"
                    class="leading-normal mt-4 text-grey-darkest"
                />
                <div class="border-b-2 border-grey-light mb-4 pb-4"></div>
                <div class="font-bold leading-normal mb-12 text-xs text-grey-dark tracking-wide uppercase">
                    Published <time :datetime="post.publishedAt">{{ post.publishedAt | date }}</time>
                </div>
                <v-card padded>
                    <div
                        v-html="post.contentHtml"
                        class="post leading-normal mt-8"
                    />
                </v-card>
            </article>
        </v-margin>
    </v-page>
</template>

<script>
import { getPost } from '@/app/repositories/blog';
import { get } from 'lodash-es';
import Prism from 'prismjs';

function getLanguage(codeEl) {
    if (codeEl.classList.contains('language-js')) {
        return 'javascript';
    }

    return '';
}

export default {
    created() {
        const slug = get(this.$route, 'params.slug');

        this.loading = true;

        getPost(slug).then((response) => {
            // success
            this.post = response.data;
        }).finally(() => {
            // complete
            this.loading = false;
        });
    },
    data() {
        return {
            loading: false,
            post: null,
        };
    },
    methods: {
        highlightCode() {
            Prism.highlightAll();
        },
    },
    watch: {
        loading(loading) {
            if (!loading) {
                this.$nextTick(this.highlightCode);
            }
        },
    },
};
</script>
