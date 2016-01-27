import Vue from 'vue';

//
// Cache settings
//
let vuetoberCache = document.getElementsByTagName('meta')['vuetober-cache'],
    reset = vuetoberCache ? vuetoberCache.getAttribute('content') * 1000 : 0;

//
// Base model
//
export default class Model {

    /**
     * Constructor
     *
     * @return {void}
     */
    constructor() {
        this.isCacheable = typeof(Storage) === 'undefined' || typeof this.cache === 'undefined';
    }

    /**
     * Fetch data from storage
     *
     * @param  {Object}     params
     * @return {Promise}
     */
    fetchFromStorage(params) {
        return new Promise((resolve, reject) => {
            if (this.isCacheable) {
                let data = JSON.parse(window.localStorage.getItem(this.getStorageKey(params)));

                if (!!data &&
                    data.cached_at > reset &&
                    Date.now() - data.cached_at <= this.cache.lifespan * 60000) {
                    resolve(data);
                }
            }

            reject();
        });
    }

    /**
     * Fetch data from the server
     *
     * @param  {Object}     params
     * @return {Promise}
     */
    fetchFromServer(params) {
        return Vue.resource(this.resource).get(params)
            .then(response => {
                this.saveToStorage(params, response.data);
                return response;
            });
    }

    /**
     * Get data from local storage or the server
     *
     * @param  {Array}  params
     * @return {Promise}
     */
    get(params = []) {
        return this.fetchFromStorage(params)
            .catch(failed => this.fetchFromServer(params));
    }

    /**
     * Returns the local storage key
     *
     * @param  {Object}     params
     * @return {String}
     */
    getStorageKey(params) {
        return typeof this.cache.id !== 'undefined' && typeof params[this.cache.id] !== 'undefined'
            ? this.cache.key + '::' + params[this.cache.id]
            : this.cache.key;
    }

    /**
     * Save data to local storage
     *
     * @param  {Object}     params
     * @param  {Object}     data
     * @return {void}
     */
    saveToStorage(params, data) {
        let key = this.getStorageKey(params);

        if (!! key && this.isCacheable) {
            let cached_at = Date.now();
            window.localStorage.setItem(key, JSON.stringify({ data, cached_at }));
        }
    }
};
