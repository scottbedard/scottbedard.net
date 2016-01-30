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

        if (cache) {
            this.cache = cache;
        }
    }
};
