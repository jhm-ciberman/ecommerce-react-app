import { Link } from "react-router-dom";

export default function ItemCard({ item }) {

    const price = item.price % 1 === 0 ? item.price : item.price.toFixed(2);

    return (
        <Link to={`/item/${item.id}`} className="block">
            <div className="
                h-full overflow-hidden rounded-lg border border-slate-200 p-4 shadow-md transition
                hover:border-primary-600/40 hover:shadow-lg hover:shadow-primary-600/20">
                <img
                    alt={item.title}
                    className="block aspect-square h-auto w-full object-contain"
                    src={item.image} />
                <div className="mt-8 w-full bg-white dark:bg-gray-800">
                    <p className="mb-2 text-lg font-thin tracking-widest text-primary-600 dark:text-primary-400 ">
                        {price} USD
                    </p>
                    <p className="mb-2 line-clamp-3 text-base font-thin tracking-wider text-gray-600 dark:text-white ">
                        {item.title}
                    </p>
                </div>
            </div>
        </Link>
    );
}
