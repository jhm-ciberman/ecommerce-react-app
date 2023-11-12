/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {Object} rating
 * @property {number} rating.rate
 * @property {number} rating.count
 */

/**
 * @typedef {Object} Category
 * @property {string} name
 * @property {string} slug
 */

export class FetchError extends Error {
    constructor(message, response) {
        super(message);
        this.response = response;
    }

    get status() {
        return this.response;
    }
}

export default class ProductsService {

    /** @private */
    static _instance = null;

    /** @returns {ProductsService} Singleton instance */
    static get instance() {
        return ProductsService._instance || (ProductsService._instance = new ProductsService());
    }

    _endpoint = 'https://fakestoreapi.com';

    _simulateDelay = true; // We could use the throttle from Chrome DevTools, but this is more fun.

    _simulateErrorChance = 0.1; // 10% chance of failure. This is only for demonstration purposes.

    _categorySlugToName = { // key: slug, value: name as required by the API
        "electronics": "electronics",
        "jewelery": "jewelery",
        "mens-clothing": "men's clothing",
        "womens-clothing": "women's clothing",
    };

    _delay() {
        if (!this._simulateDelay) {
            return Promise.resolve();
        }

        return new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 600));
    }

    _fakeError() {
        if (Math.random() < this._simulateErrorChance) {
            throw new Error('Simulated network error');
        }
    }

    /**
     * Fetch data from the API.
     *
     * @param {string} url
     * @returns {Promise<any>}
     */
    _get(url) {
        // In a real world scenario, we would use Axios, because it has better built in error handling than fetch
        // Just look at this ugly mess:
        return this._delay()
            .then(() => this._fakeError())
            .then(() => fetch(`${this._endpoint}${url}`))
            .then(response => {
                return response.ok ? response : Promise.reject(
                    new FetchError(response.statusText, response)
                );
            })
            .then(response => response.json());
    }

    /**
     * Ensure that the array has at least `minimum` elements, repeating the array if necessary.
     *
     * @param {Product[]} array
     * @param {number} minimum
     * @returns {Product[]}
     */
    _take(array, minimum) {
        const result = [];
        while (result.length < minimum) {
            result.push(...array);
        }
        return result.slice(0, minimum);
    }

    /**
     * Get all products from the API.
     *
     * @returns {Promise<Product[]>}
     */
    getIndexProducts() {
        return this._get('/products')
            .then((products) => this._take(products, 24));
    }

    /**
     * Get a single product from the API.
     *
     * @param {number} id The product ID
     * @returns {Promise<Product>}
     */
    getProduct(id) {
        return this._get(`/products/${id}`)
            .then(async (product) => {
                return {
                    ...product,
                    related: await this._getRelatedProducts(product)
                };
            }
        );
    }

    _getRelatedProducts(product) {
        return this._get(`/products/category/${product.category}`)
            .then((products) => {
                // Filter out the current product from the related products
                return products.filter((p) => p.id !== product.id);
            })
            .then((products) => this._take(products, 6));
    }

    /**
     * Gets the given category from the API with all the items in it.
     *
     * @param {string} slug The category slug
     * @returns {Promise<{ name: string, Product[]}>}
     */
    getCategory(slug) {
        const name = this._categorySlugToName[slug];
        return this._get(`/products/category/${name}`)
            .then((items) => ({
                // In a real world scenario, we would fetch in the same request the category name, banner image, navigation breadcrumbs
                // and pagination metadata(nextPage, previousPage, etc.) and return them here in this object.
                name: name,
                items: this._take(items, 24),
            }));
    }
}
