import { useContext } from "react";
import AppCard from "../common/AppCard";
import { CartContext } from "../../context/CartContext";

export default function CheckoutBrief() {
    const cart = useContext(CartContext);

    const items = cart.items;

    function renderRow(item) {
        return (
            <div key={item.id} className="flex flex-col items-start justify-between border-b border-gray-200 p-6 md:flex-row">
                <div className="flex w-full items-start md:w-auto">
                    <img
                        alt={item.title}
                        className="block aspect-square h-auto w-12 object-contain"
                        src={item.image} />
                    <div className="ml-4">
                        <p className="mb-2 line-clamp-3 text-base font-thin tracking-wider text-gray-600">
                            {item.title}
                        </p>
                        <div className="mt-2 flex items-center justify-start">
                            <p className="whitespace-nowrap text-sm font-medium text-gray-600">
                                {item.quantity} x {item.price} USD
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ml-8 mt-4 flex items-center justify-end md:mt-0">
                    <p className="whitespace-nowrap text-sm font-medium text-primary-600">
                        {item.quantity * item.price} USD
                    </p>
                </div>
            </div>
        );
    }

    return (
        <AppCard>
            {items.map((item) => renderRow(item))}

            <div className="flex items-center justify-between p-6">
                <p className="text-base font-medium text-gray-600">
                    Subtotal
                </p>
                <p className="text-base font-medium text-primary-600">
                    {cart.getTotalPrice().toFixed(2)} USD
                </p>
            </div>
        </AppCard>
    );
}
