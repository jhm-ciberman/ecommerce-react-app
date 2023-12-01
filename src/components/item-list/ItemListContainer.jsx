import AppHeader from "../AppHeader";
import LoadingSpinner from "../LoadingSpinner";
import NetworkErrorCard from "../NetworkErrorCard";
import ItemCard from "./ItemCard";

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
        <div className={`container mx-auto my-8 ${className}`}>
            {
                title ? (
                    <AppHeader tag="h2" size="h1" className="mb-6">
                        {title}
                    </AppHeader>
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
