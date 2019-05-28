<style lang="scss" scoped>
    .post /deep/ {
        @apply mt-0;

        //
        // elements
        //
        blockquote {
            @apply p-8;

            p {
                @apply text-2xl text-grey-darkest;
            }

            ul {
                list-style: none;
                padding: 0;
            }

            li {
                @apply flex items-center justify-end text-grey-dark;

                &:before {
                    content: "";
                    @apply block border border-grey h-px mr-4 w-4;
                }
            }
        }

        h2 {
            @apply font-normal;
        }

        //
        // spacing
        //
        p:not(:first-child),
        pre:not(:first-child),
        ul:not(:first-child) {
            @apply mt-4;
        }

        h2 {
            @apply mt-12;
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
    // additional languages are installed in babel.config.js
    @import '../../../../node_modules/prismjs-material-theme/sass/oceanic';
</style>

<template>
    <v-page padded>
        <v-margin padded>
            <article
                v-if="!loading && post"
                class="max-w-lg mx-auto">
                <header>
                    <h1
                        v-text="post.title"
                        class="font-thin leading-normal text-4xl"
                    />
                    <div class="font-bold leading-normal mt-4 mb-12 text-xs text-grey-darker tracking-wide uppercase">
                        <span v-if="post.published">
                            Published <time :datetime="post.publishedAt">{{ post.publishedAt | date }}</time>
                        </span>
                        <span v-else class="text-orange-light">
                            Not Published
                        </span>
                    </div>
                </header>
                <v-card padded>
                    <div
                        v-html="post.contentHtml"
                        class="post leading-normal"
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

export default {
    created() {
        const slug = get(this.$route, 'params.slug');

        this.loading = true;

        getPost(slug).then((response) => {
            // success
            this.post = response.data;
        }, (err) => {
            // failed
            this.$router.replace({ name: '404' });
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
    watch: {
        loading(loading) {
            if (!loading) {
                this.$nextTick(Prism.highlightAll);
            }
        },
    },
};
</script>
