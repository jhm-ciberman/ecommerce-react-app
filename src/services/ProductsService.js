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

export default class ProductsService {

    static _instance = null;

    /** @returns {ProductsService} Singleton instance */
    get instance() {
        return ProductsService._instance || (ProductsService._instance = new ProductsService());
    }

    _endpoint = 'https://fakestoreapi.com/products';

    _categorySlugToName = new Map(); // key: slug, value: name

    _get(url) {
        // In a real world scenario, we would use Axios, because it has better built in error handling than fetch
        return fetch(`${this._endpoint}/${url}`).then(response => response.json());
    }

    _toSlug(name) {
        return name.toLowerCase().replace('\'', '-').replace(' ', '-');
    }

    /**
     * Get all products from the API.
     *
     * @returns {Promise<Product[]>}
     */
    getProducts() {
        return this._get('products');
    }

    /**
     * Get a single product from the API.
     *
     * @param {number} id The product ID
     * @returns {Promise<Product>}
     */
    getProduct(id) {
        return this._get(`products/${id}`);
    }

    /**
     * Get all categories from the API.
     *
     * @returns {Promise<Category[]>}
     */
    async getCategories() {
        const categoriesNames = await this._get('/products/categories');

        const categories = categoriesNames.map(categoryName => ({
            name: categoryName,
            slug: this._toSlug(categoryName)
        }));

        categories.forEach(category =>
            this._categorySlugToName.set(category.slug, category.name)
        );

        return categories;
    }

    /**
     * Get all products from a category.
     *
     * @param {string} slug The category slug
     * @returns {Promise<Product[]>}
     */
    getCategory(slug) {
        const name = this._categorySlugToName[slug];
        return this._get(`/products/category/${name}`);
    }
}
