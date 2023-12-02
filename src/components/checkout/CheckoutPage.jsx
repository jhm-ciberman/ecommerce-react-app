import { useContext } from "react";
import AppHeader from "../common/AppHeader";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router";
import CheckoutBrief from "./CheckoutBrief";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutPage() {
    const cart = useContext(CartContext);

    const items = cart.items;

    if (items.length === 0) {
        return (
            <Navigate to="/cart" />
        );
    }

    return (
        <div className="container mx-auto my-16">
            <AppHeader as="h1" className="mb-6">Checkout</AppHeader>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
                <div className="lg:col-span-2">
                    <CheckoutForm />
                </div>
                <div className="lg:col-span-1">
                    <CheckoutBrief />
                </div>
            </div>
        </div>
    );
}
