<template>
    <v-page padded>
        <v-margin padded>
            <v-background-text>
                <div class="max-w-lg mx-auto">

                    <!-- older posts -->
                    <article
                        v-for="(post, index) in posts"
                        :class="{
                            'mt-20': index > 0,
                        }"
                        :key="post.slug">
                        <router-link
                            class="heading"
                            :title="post.title"
                            :to="{ name: 'blog-post', params: { slug: post.slug }}">
                            <h2
                                v-text="post.title"
                                class="font-thin mb-4 text-4xl"
                            />
                            <div class="flex flex-wrap justify-between leading-normal">
                                <div class="font-bold mb-4 text-grey-darker text-xs tracking-wide uppercase">
                                    {{ index === 0 ? 'Latest Post &bull;' : '' }}
                                    <time :datetime="post.publishedAt">{{ post.publishedAt | date }}</time>
                                </div>
                                <div
                                    v-if="!post.published"
                                    v-text="'Not Published'"
                                    class="font-bold mb-4 text-orange-light text-xs tracking-wide uppercase"
                                />
                            </div>
                            <v-card padded>
                                <p
                                    v-if="post.excerpt"
                                    v-text="post.excerpt"
                                    class="leading-normal text-grey-darkest"
                                />
                            </v-card>
                        </router-link>
                    </article>
                </div>
            </v-background-text>
        </v-margin>
    </v-page>
</template>

<script>
import { getPosts } from '@/app/repositories/blog';

export default {
    created() {
        // fetch the list of posts
        this.loading = true;

        getPosts().then((response) => {
            // success
            this.posts = response.data;
        }).finally(() => {
            // complete
            this.loading = false;
        });
    },
    data() {
        return {
            loading: false,
            posts: [],
        };
    },
};
</script>
