import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {

    const cart = useContext(CartContext);

    const badgeCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);

    function renderBadge() {
        return (
            <div className="absolute right-1 top-2 rounded-full bg-primary-600 px-1 text-xs text-primary-100">
                {badgeCount > 99 ? '99+' : badgeCount}
            </div>
        );
    }

    return (
        <Link to="/cart" className="relative p-4 transition duration-300 hover:text-primary-600">
            <ShoppingBagIcon className="inline w-6" />
            { badgeCount > 0 && renderBadge() }
        </Link>
    );
}
