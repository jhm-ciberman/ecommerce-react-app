import QuantitySelector from "../item-detail/QuantitySelector";
import AppButtonPrimary from "../AppButtonPrimary";
import AppCard from "../AppCard";
import AppHeader from "../AppHeader";
import {
    ChevronRightIcon,
    TrashIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";

export default function CartPage() {

    const items = [
        {
            id: '1',
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price: 109.95,
            description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
            category: 'Fashion',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: {
                rate: 3.9,
                count: 120
            },
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
            rating: {
                rate: 4.1,
                count: 259
            },
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
            rating: {
                rate: 4.7,
                count: 500
            },
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
            rating: {
                rate: 2.1,
                count: 430
            },
            quantity: 6,
            stock: 10,
        },
    ];

    //const items = [];

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

    return (
        <div className="container mx-auto my-16 lg:max-w-4xl">
            <div className="mb-8 flex items-center justify-between">
                <AppHeader tag="h1">Cart</AppHeader>
                <button
                    className="text-slate-400 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/50"
                    onClick={() => { }}
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
                                    <QuantitySelector value={item.quantity} min={1} max={item.stock} onChange={() => { }} size="sm" />
                                    <button
                                        className="ml-4 text-gray-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50"
                                        role="button"
                                        title="Remove item"
                                        aria-label="Remove item">
                                        <TrashIcon className="h-5 w-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex w-full items-center justify-end md:ml-4 md:mt-0 md:w-auto">
                            <p className="mb-2 text-lg font-thin tracking-widest text-primary-600">
                                {item.price.toFixed(2)} USD
                            </p>
                        </div>
                    </div>
                ))}

                <div className="flex items-center justify-between border-b border-gray-200 p-6">
                    <p className="mb-2 text-lg font-thin tracking-widest text-gray-600">
                        Total
                    </p>
                    <p className="mb-2 text-lg font-thin tracking-widest text-primary-600">
                        109.95 USD
                    </p>
                </div>
            </AppCard>

            <div className="mt-8 flex items-center justify-end">
                <AppButtonPrimary
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
