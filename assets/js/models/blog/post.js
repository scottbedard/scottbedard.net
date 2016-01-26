import Vue from 'vue';
import Model from 'app/model';

//
// Blog post
//
export default class Post extends Model {

    /**
     * @param  {Object} params
     * @return {void}
     */
    constructor(params) {
        super(params);
        this.resource = '/owl/rainlabblogapi/posts{/slug}';
    }

    /**
     * Cache settings
     *
     * @return {Object}
     */
    cache() {
        return {
            lifespan: 1440,
            id: this.params.slug,
            key: 'models.blog.post',
        };
    }
};
