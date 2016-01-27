import Model from 'classes/model';

//
// Blog post
//
export default class Post extends Model {

    /**
     * @param  {Object|null}    params
     * @param  {Object}         cache
     * @return {void}
     */
    constructor(cache = null) {
        super();

        this.resource = '/owl/rainlabblogapi/posts{/slug}';

        this.cache = cache || {
            id: 'slug',
            key: 'models.blog.post',
            lifespan: 1440,
        };
    }
};
