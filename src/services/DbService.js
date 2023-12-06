import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    doc,
    getDoc,
    query,
    where,
    limit,
    collection,
    getDocs,
    documentId,
} from 'firebase/firestore';

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

const firebaseConfig = {
    apiKey: "AIzaSyAaL5AJYvubd_F0JflaR_aWw-x9bYESgXs",
    authDomain: "laretto-react-app.firebaseapp.com",
    projectId: "laretto-react-app",
    storageBucket: "laretto-react-app.appspot.com",
    messagingSenderId: "831803443789",
    appId: "1:831803443789:web:10e48ebfb6340fa6326a04"
};

export default class DbService {

    /** @private */
    static _instance = null;

    /** @returns {DbService} Singleton instance */
    static get instance() {
        return DbService._instance || (DbService._instance = new DbService());
    }

    _app = null;

    _firestore = null;

    constructor() {
        if (DbService._instance) {
            throw new Error('DbService is a singleton');
        }

        DbService._instance = this;

        this._app = initializeApp(firebaseConfig);
        this._firestore = getFirestore(this._app);
    }

    _categorySlugToName = { // key: slug, value: name as required by the API
        "electronics": "electronics",
        "jewelery": "jewelery",
        "mens-clothing": "men's clothing",
        "womens-clothing": "women's clothing",
    };

    /**
     * Ensure that the array has at least `minimum` elements, repeating the array if necessary.
     *
     * @param {object[]} array
     * @param {number} minimum
     * @returns {object[]}
     */
    _take(array, minimum) {
        const result = [];
        while (result.length < minimum) {
            result.push(...array);
        }
        return result.slice(0, minimum);
    }

    /**
     * Ensure that the query snapshot has at least `minimum` elements, repeating the array if necessary.
     *
     * @param {import('firebase/firestore').QuerySnapshot} querySnapshot
     * @param {number} minimum
     * @returns {object[]}
     */
    _takeDocs(querySnapshot, minimum) {
        return this._take(querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        })), minimum);
    }

    /**
     * Get all products from the API.
     *
     * @returns {Promise<Product[]>}
     */
    async getIndexProducts() {
        const max = 24;

        const q = query(
            collection(this._firestore, 'products'),
            limit(max),
        );

        const querySnapshot = await getDocs(q);

        return this._takeDocs(querySnapshot, max);
    }

    /**
     * Get a single product from the API.
     *
     * @param {number} id The product ID
     * @returns {Promise<Product>}
     */
    async getProduct(id) {
        const docRef = doc(this._firestore, 'products', id.toString());
        const docSnapshot = await getDoc(docRef);

        const product = ({
            ...docSnapshot.data(),
            id: docSnapshot.id,
            min: 1,
            max: 10,
        });

        return {
            ...product,
            related: await this._getRelatedProducts(product)
        };
    }

    async _getRelatedProducts(product) {
        const max = 6;

        const q = query(
            collection(this._firestore, 'products'),
            where('category', '==', product.category),
            where(documentId(), '!=', product.id),
            limit(max)
        );

        const querySnapshot = await getDocs(q);

        return this._takeDocs(querySnapshot, max);
    }

    /**
     * Gets the given category from the API with all the items in it.
     *
     * @param {string} slug The category slug
     * @returns {Promise<{ name: string, items: Product[]}>}
     */
    async getCategory(slug) {
        const name = this._categorySlugToName[slug];

        const max = 24;

        const querySnapshot = await getDocs(
            query(
                collection(this._firestore, 'products'),
                where('category', '==', name),
                limit(max) // In a real world scenario, we would use pagination
            )
        );

        return {
            name: name,
            items: this._takeDocs(querySnapshot, max),
        };
    }
}
