import { createContext, useState } from "react";

export const CartContext = createContext();


export function CartContextProvider({ children }) {
    const [items, setItems] = useState([]);

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
