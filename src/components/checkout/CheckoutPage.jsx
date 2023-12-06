import { useContext } from "react";
import AppHeader from "../common/AppHeader";
import { CartContext } from "../../context/CartContext";
import { Navigate, useNavigate } from "react-router";
import CheckoutBrief from "./CheckoutBrief";
import CheckoutForm from "./CheckoutForm";
import DbService from "../../services/DbService";
import { useState } from "react";

export default function CheckoutPage() {
    const cart = useContext(CartContext);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const items = cart.items;

    if (items.length === 0) {
        return (
            <Navigate to="/cart" />
        );
    }

    async function handleSubmit(form) {
        setIsSubmitting(true);

        try {
            // TODO: IN a real world app we would want to decrement the stock of each item
            // in a firebase cloud function. Here we will just store the order in the database
            // without decrementing the stock.
            await DbService.instance.storeOrder({
                user: {
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    phone: form.phone,
                },
                items: items.map(item => ({
                    id: item.id,
                    quantity: item.quantity,
                    price: item.price,
                    title: item.title,
                    image: item.image,
                })),
            });

            navigate('/order-confirmation');

            cart.clear();

        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="container mx-auto my-16">
            <AppHeader as="h1" className="mb-6">Checkout</AppHeader>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
                <div className="lg:col-span-2">
                    {/* In a real world app we weould like to show different pages for each
                    step of the checkout process. For example, we could have a page for
                    shipping details, another for payment details, and a final one for
                    order confirmation. This is just a demo, so we will only have one page. */}
                    <CheckoutForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
                </div>
                <div className="lg:col-span-1">
                    <CheckoutBrief />
                </div>
            </div>
        </div>
    );
}
