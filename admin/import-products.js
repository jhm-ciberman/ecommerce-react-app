/* eslint-env node */

import fetch from 'node-fetch';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error.message);
        throw error;
    }
}

async function uploadToFirebase(db, products) {
    const batch = db.batch();

    products.forEach((product) => {
        db.collection('products').add(product);
    });

    try {
        await batch.commit();
        console.log('Products uploaded to Firebase successfully!');
    } catch (error) {
        console.error('Error uploading to Firebase:', error.message);
    }
}

async function main() {
    const app = initializeApp({
        credential: cert('./service-account-key.json'),
        databaseURL: 'https://laretto-react-app.firebaseio.com',
    });

    const db = getFirestore(app);

    const products = await fetchProducts();

    await uploadToFirebase(db, products);
}

main();
