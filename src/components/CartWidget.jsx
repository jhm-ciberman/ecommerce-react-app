import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function CartWidget({ badgeCount = 0}) {

    return (
        <a href="/" className="relative p-4 transition duration-300 hover:text-primary-600">
            <ShoppingBagIcon className="inline w-6" />
            <div className="absolute right-1 top-2 rounded-full bg-primary-600 px-1 text-xs text-primary-100">
                { badgeCount }
            </div>
        </a>
    );
}
