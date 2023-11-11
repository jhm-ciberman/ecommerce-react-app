import ItemCard from "./ItemCard";

export default function ItemListContainer({ items }) {

    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {items.map((item, index) =>
                    <ItemCard key={index} item={item} />
                )}
            </div>
        </div>
    );
}
