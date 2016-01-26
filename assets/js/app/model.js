import Vue from 'vue';

//
// Cache settings
//
let isCacheable = typeof(Storage) !== 'undefined',
    vuetoberCache = document.getElementsByTagName('meta')['vuetober-cache'],
    reset = vuetoberCache ? vuetoberCache.getAttribute('content') * 1000 : 0;

//
// Base model
//
export default class Model {

    /**
     * Constructor
     *
     * @param  {Object} params
     * @return {void}
     */
    constructor(params) {
        this.params = params;
        this.key = this.getStorageKey()
    }

    /**
     * Get the target model
     *
     * @return {Promise}
     */
    get() {
        let cached = this.getFromStorage();
        if (cached) {
            return new Promise(resolve => resolve(cached));
        }

        return Vue.resource(this.resource).get(this.params)
            .then(response => {
                this.saveToStorage(response.data);
                return response;
            });
    }

    /**
     * Attempt to retrieve the model from local storage
     *
     * @return {Object|null}
     */
    getFromStorage() {
        if (isCacheable && typeof this.cache === 'function') {
            let cache = this.cache(),
                model = JSON.parse(window.localStorage.getItem(this.key));

            if (!model) {
                return;
            }

            if (model.cached_at > reset || (Date.now() - model.cached_at) <= (cache.lifespan * 60000)) {
                return model;
            }
        }
    }

    /**
     * Get the local storage key
     *
     * @return {String|null}
     */
    getStorageKey() {
        if (typeof this.cache !== 'function') {
            return;
        }

        let cacheData = this.cache();
        return typeof cacheData.id !== 'undefined'
            ? cacheData.key + '::' + cacheData.id
            : cacheData.key;
    }

    /**
     * Save a model to local storage
     *
     * @param  {Object} data
     * @return {void}
     */
    saveToStorage(data) {
        if (this.key) {
            window.localStorage.setItem(this.key, JSON.stringify({
                data,
                cached_at: Date.now(),
            }));
        }
    }
}
