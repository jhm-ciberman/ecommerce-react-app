import LoadingSpinner from "../LoadingSpinner";
import NetworkErrorCard from "../NetworkErrorCard";
import ItemCard from "./ItemCard";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

export default function ItemListContainer({ items, loading, error, title, className }) {

    if (error) {
        return <NetworkErrorCard />;
    }

    if (loading) {
        return (
            <div className="container mx-auto flex h-[400px] items-center justify-center">
                <LoadingSpinner className="h-14 w-14" />
            </div>
        );
    }

    return (
        <div className={`container mx-auto mt-8 ${className}`}>
            {
                title ? (
                    <h2 className="mb-4 text-3xl tracking-2widest text-slate-600">
                        <ChevronDoubleRightIcon className="mr-4 inline-block h-8 w-8 text-primary-500" />
                        {title}
                    </h2>
                ) : null
            }
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {items.map((item, index) =>
                    <ItemCard key={index} item={item} />
                )}
            </div>
        </div>
    );
}
