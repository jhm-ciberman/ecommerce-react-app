import { Link } from "react-router-dom";

export default function ItemCard({ item }) {


    return (
        <Link to={`/item/${item.id}`} className="block">
            <div className="overflow-hidden rounded-lg border border-slate-200 shadow-md transition hover:border-primary-600/40 hover:shadow-lg hover:shadow-primary-600/20">
                <img alt={item.title} className="block h-auto w-full" src={item.pictureUrl} />
                <div className="w-full bg-white p-4 dark:bg-gray-800">
                    <p className="text-base font-medium text-primary-600">
                        {item.title}
                    </p>
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        {item.price} USD
                    </p>
                    <p className="text-base font-light text-gray-400 dark:text-gray-300">
                        {item.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
