import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import ProductsService from "../../services/ProductsService";
import { useEffect, useState } from "react";

export default function ItemDetailPage() {

    const { itemId } = useParams();

    const [item, setItem] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchItems() {
            setLoading(true);
            setError(null);
            setItem(null);

            try {
                const item = await ProductsService.instance.getProduct(itemId);
                setItem(item);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, [itemId]);



    return (
        <div className="container mx-auto mt-8">
            <h1>ItemDetailPage</h1>

            <ItemDetail item={item} loading={loading} error={error} />
        </div>
    );
}
