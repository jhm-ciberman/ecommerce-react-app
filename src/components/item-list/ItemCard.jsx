import { Link } from "react-router-dom";

export default function ItemCard({ item }) {

    const price = item.price % 1 === 0 ? item.price : item.price.toFixed(2);

    return (
        <Link to={`/item/${item.id}`} className="block">
            <div className="
                flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition
                hover:border-primary-600/40 hover:shadow-lg hover:shadow-primary-600/20">
                <div className="relative w-full p-4">
                    <img
                        alt={item.title}
                        className="block aspect-square h-auto w-full object-contain"
                        src={item.image} />
                </div>
                <div className="w-full grow p-4">
                    <p className="mb-2 text-lg font-thin tracking-widest text-primary-600">
                        {price} USD
                    </p>
                    <p className="mb-2 line-clamp-3 text-base font-thin tracking-wider text-gray-600">
                        {item.title}
                    </p>
                </div>
            </div>
        </Link>
    );
}
