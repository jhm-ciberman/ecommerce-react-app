import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

export default function ItemListContainer({ fetchItemsCallback }) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchItems() {
            setLoading(true);
            setError(null);
            setItems([]);
            try {
                const items = await fetchItemsCallback();
                setItems(items);
            } catch (error) {
                console.log(error.response);
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, [fetchItemsCallback]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>There was an error loading the items.</p>;
    }

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
