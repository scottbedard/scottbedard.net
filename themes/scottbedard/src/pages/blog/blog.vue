<template>
    <v-page padded>
        <v-margin padded>
            <div class="max-w-lg mx-auto">
                <!-- latest post -->
                <div class="font-bold leading-normal mb-4 text-xs text-grey-dark tracking-wide uppercase">
                    Latest Post
                    <template v-if="latestPost && latestPost.published">
                        &bull; <time :datetime="latestPost.publishedAt">{{ latestPost.publishedAt | date }}</time>
                    </template>
                </div>
                <article
                    v-if="latestPost"
                    class="mx-auto"
                    :class="{
                        'border-b-2 border-grey-light mb-20 pb-20': olderPosts.length > 0,   
                    }">
                    <router-link
                        :title="latestPost.title"
                        :to="{ name: 'blog-post', params: { slug: latestPost.slug }}">
                        <h1
                            v-text="latestPost.title"
                            class="font-normal text-4xl"
                        />
                        <p
                            v-if="!latestPost.published"
                            v-text="'This is not published, only admins can see this'"
                            class="font-bold leading-normal mt-2 text-orange-light text-xs uppercase"
                        />
                        <p
                            v-if="latestPost.excerpt"
                            v-text="latestPost.excerpt"
                            class="leading-normal mt-4 text-grey-darkest"
                        />
                    </router-link>
                </article>

                <!-- older posts -->
                <div
                    v-text="'Older Posts'"
                    class="font-bold leading-normal mb-4 text-xs text-grey-dark tracking-wide uppercase"
                />

                <article
                    v-for="(post, index) in olderPosts"
                    :class="{
                        'mt-20': index > 0,
                    }"
                    :key="post.slug">
                    <router-link
                        :title="post.title"
                        :to="{ name: 'blog-post', params: { slug: post.slug }}">
                        <h2
                            v-text="post.title"
                            class="font-normal text-4xl"
                        />
                        <p
                            v-if="!post.published"
                            v-text="'This is not published, only admins can see this'"
                            class="font-bold leading-normal mt-2 text-orange-light text-xs uppercase"
                        />
                        <p
                            v-if="post.excerpt"
                            v-text="post.excerpt"
                            class="leading-normal mt-4 text-grey-darkest"
                        />
                    </router-link>
                </article>
            </div>
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
    computed: {
        latestPost() {
            return this.posts.slice(0, 1).pop();
        },
        olderPosts() {
            return this.posts.slice(1);
        },
    },
};
</script>