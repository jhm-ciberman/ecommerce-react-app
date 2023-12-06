import { useContext, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import NetworkErrorCard from "../common/NetworkErrorCard";
import QuantitySelector from "./QuantitySelector";
import { CartContext } from "../../context/CartContext";
import AppButtonPrimary from "../common/AppButtonPrimary";

export default function ItemDetail({ item, loading, error, canAddToCart, onAddedToCart }) {

    const [quantity, setQuantity] = useState(1);


    const cart = useContext(CartContext);

    function handleQuantityChange(newValue) {
        setQuantity(newValue);
    }

    function handleAddToCart() {
        if (canAddToCart) return;

        cart.addItem(item, quantity);
        onAddedToCart();
    }

    if (error) {
        return <NetworkErrorCard error={error} />;
    }

    if (loading) {
        return (
            <div className="container mx-auto flex h-[400px] items-center justify-center">
                <LoadingSpinner className="h-14 w-14" />
            </div>
        );
    }

    if (!item) {
        return <></>;
    }

    function renderQuantitySelector() {
        return (
            <>
                <div className="flex items-center justify-between">
                    <p className="ml-4 text-base font-thin tracking-wider text-gray-600">
                        Quantity
                    </p>
                    <QuantitySelector min={1} max={item.stock} value={quantity} onChange={handleQuantityChange} />
                </div>
                <div className="mt-4">
                    <AppButtonPrimary onClick={handleAddToCart} className="w-full">
                        Add to cart
                    </AppButtonPrimary>
                </div>
            </>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 overflow-hidden rounded-xl bg-white shadow-md lg:grid-cols-2 xl:grid-cols-3">
            <div className="col-span-1 p-10 xl:col-span-2">
                <img
                    alt={item.title}
                    className="mx-auto block aspect-square h-auto max-h-[500px] w-full max-w-[500px] object-contain"
                    src={item.image} />
            </div>
            <div className="bg-orange-50 p-10">
                <p className="mb-2 text-base font-thin capitalize tracking-wider text-gray-600">
                    {item.category}
                </p>
                <h1 className="mb-2 font-display text-3xl font-thin tracking-wider text-gray-700/90">
                    {item.title}
                </h1>
                <p className="mb-2 mt-8 text-3xl font-thin tracking-widest text-primary-600">
                    {item.price.toFixed(2)} USD
                </p>
                <p className="mb-2 mt-4 text-base font-thin tracking-wider text-gray-600">
                    {item.description}
                </p>

                <div className="mt-8 rounded-2xl border-4 border-orange-600/20 bg-white p-4">
                    { renderQuantitySelector() }
                </div>
            </div>
        </div>
    );
}
