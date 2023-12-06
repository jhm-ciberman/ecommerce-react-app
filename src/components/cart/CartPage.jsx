import QuantitySelector from "../item-detail/QuantitySelector";
import AppButtonPrimary from "../common/AppButtonPrimary";
import AppCard from "../common/AppCard";
import AppHeader from "../common/AppHeader";
import {
    ChevronRightIcon,
    TrashIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartPage() {
    const cart = useContext(CartContext);

    const items = cart.items;

    if (items.length === 0) {
        return (
            <div className="container mx-auto my-16 flex items-center justify-center text-gray-500">
                <AppCard className="mr-4 flex flex-col items-center justify-center p-10">
                    <ShoppingBagIcon className="h-14 w-14" />
                    <p className="mt-8 w-2/3 text-center text-xl font-bold">
                        Your cart is empty
                    </p>
                    <p className="mt-4 text-center text-lg">
                        Add some items to your cart to see them here.
                    </p>
                    <AppButtonPrimary to="/" className="mt-8">
                        Go shopping
                        <ChevronRightIcon className="ml-2 inline-block h-6 w-6 text-white" />
                    </AppButtonPrimary>
                </AppCard>
            </div>
        );
    }

    function handleRemoveItem(item) {
        if (window.confirm(`Are you sure you want to remove ${item.title} from your cart?`) === false) {
            return;
        }

        cart.removeItem(item.id);
    }

    function handleQuantityChange(item, quantity) {
        cart.updateItemQuantity(item.id, quantity);
    }

    function handleClearCart() {
        if (window.confirm('Are you sure you want to remove all items from your cart?') === false) {
            return;
        }

        cart.clear();
    }

    return (
        <div className="container mx-auto my-16 lg:max-w-4xl">
            <div className="mb-8 flex items-center justify-between">
                <AppHeader as="h1">Cart</AppHeader>
                <button
                    className="text-slate-400 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/50"
                    onClick={() => handleClearCart()}
                >
                    Clear cart
                </button>
            </div>
            <AppCard>
                { items.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-between border-b border-gray-200 p-6 md:flex-row">
                        <div className="flex w-full items-center md:w-auto">
                            <img
                                alt={item.title}
                                className="block aspect-square h-auto w-24 object-contain"
                                src={item.image} />
                            <div className="ml-4">
                                <p className="mb-2 line-clamp-3 text-base font-thin tracking-wider text-gray-600">
                                    {item.title}
                                </p>
                                <div className="mt-4 flex items-center justify-start">
                                    <QuantitySelector
                                        value={item.quantity}
                                        min={1}
                                        max={item.stock}
                                        onChange={(quantity) => handleQuantityChange(item, quantity)}
                                        size="sm" />
                                    <button
                                        className="ml-4 text-gray-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50"
                                        role="button"
                                        title="Remove item"
                                        aria-label="Remove item"
                                        onClick={() => handleRemoveItem(item)}
                                    >
                                        <TrashIcon className="h-5 w-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex w-full items-center justify-end md:ml-4 md:mt-0 md:w-auto">
                            <p className="mb-2 text-lg font-thin tracking-widest text-primary-600">
                                { (item.price * item.quantity).toFixed(2) } USD
                            </p>
                        </div>
                    </div>
                ))}

                <div className="flex items-center justify-between border-b border-gray-200 p-6">
                    <p className="mb-2 text-lg font-thin tracking-widest text-gray-600">
                        Total
                    </p>
                    <p className="mb-2 text-lg font-thin tracking-widest text-primary-600">
                        { cart.getTotalPrice().toFixed(2) } USD
                    </p>
                </div>
            </AppCard>

            <div className="mt-8 flex items-center justify-end">
                <AppButtonPrimary
                    to="/checkout"
                    className="flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 text-base font-thin uppercase tracking-wider text-white
                    hover:bg-primary-700 focus:ring-2 focus:ring-primary-600/50"
                    onClick={() => { }}
                >
                    Checkout
                    <ChevronRightIcon className="ml-2 inline-block h-6 w-6 text-white" />
                </AppButtonPrimary>

            </div>
        </div>
    );
}
