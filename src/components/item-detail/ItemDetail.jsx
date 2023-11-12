import LoadingSpinner from "../LoadingSpinner";
import NetworkErrorCard from "../NetworkErrorCard";

export default function ItemDetail({ item, loading, error }) {

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
        <div className="grid grid-cols-1 gap-4 overflow-hidden rounded-xl bg-white shadow-md lg:grid-cols-2 xl:grid-cols-3">
            <div className="col-span-1 p-10 xl:col-span-2">
                <img
                    alt={item.title}
                    className="mx-auto block aspect-square h-auto max-h-[500px] w-full max-w-[500px] object-contain"
                    src={item.image} />
            </div>
            <div className="bg-orange-50 p-10">
                <p className="mb-2 text-base font-thin capitalize tracking-wider text-gray-600 dark:text-white">
                    {item.category}
                </p>
                <h1 className="mb-2 font-display text-3xl font-thin tracking-wider text-gray-700/90 dark:text-white ">
                    {item.title}
                </h1>
                <p className="mb-2 mt-8 text-3xl font-thin tracking-widest text-primary-600 dark:text-primary-400 ">
                    {item.price} USD
                </p>
                <p className="mb-2 mt-4 text-base font-thin tracking-wider text-gray-600 dark:text-white ">
                    {item.description}
                </p>
            </div>
        </div>
    );
}
