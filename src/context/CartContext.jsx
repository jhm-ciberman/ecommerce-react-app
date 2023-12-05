import { createContext, useState } from "react";

export const CartContext = createContext();

const initialItems = [
    {
        id: '1',
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'Fashion',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        quantity: 1,
        stock: 10,
    },
    {
        id: '2',
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: 'Fashion',
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        quantity: 2,
        stock: 3,
    },
    {
        id: '3',
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. ',
        category: 'Fashion',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        quantity: 4,
        stock: 8,
    },
    {
        id: '4',
        title: 'Mens Casual Slim Fit',
        price: 15.99,
        description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: 'Fashion',
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        quantity: 6,
        stock: 10,
    },
];

export function CartContextProvider({ children }) {
    const [items, setItems] = useState(initialItems);

    function validateQuantity(item, quantity) {
        if (quantity < 1) {
            throw new Error('Quantity must be greater than 0');
        }

        if (quantity > item.stock) {
            throw new Error(`Quantity must be less than ${item.stock}`);
        }
    }

    function addItem(item, quantity) {
        const index = items.findIndex((i) => i.id === item.id);
        if (index > -1) {
            const item = items[index];
            const newItems = [...items];
            const newQuantity = item.quantity + quantity;
            validateQuantity(item, newQuantity);
            newItems[index] = { ...item, quantity: newQuantity };
            setItems(newItems);
        } else {
            validateQuantity(item, quantity);
            const newItem = { ...item, quantity };
            setItems([...items, newItem]);
        }
    }

    function updateItemQuantity(itemId, quantity) {
        const index = items.findIndex((i) => i.id === itemId);
        if (index <= -1) return;

        validateQuantity(items[index], quantity);
        const oldItem = items[index];
        const newItems = [...items];
        newItems[index] = { ...oldItem, quantity };
        setItems(newItems);
    }

    function removeItem(itemId) {
        setItems(items.filter((i) => i.id !== itemId));
    }

    function clear() {
        setItems([]);
    }

    function hasItem(itemId) {
        return items.some((i) => i.id === itemId);
    }

    function getTotalPrice() {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    const provided = {
        items,
        addItem,
        removeItem,
        clear,
        updateItemQuantity,
        hasItem,
        getTotalPrice,
    };

    return (
        <CartContext.Provider value={provided}>
            {children}
        </CartContext.Provider>
    );
}
