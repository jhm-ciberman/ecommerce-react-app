import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import ProductsService from "../../services/ProductsService";
import { useEffect, useState } from "react";
import ItemListContainer from "../item-list/ItemListContainer";

export default function ItemDetailPage() {

    const { itemId } = useParams();

    const [item, setItem] = useState(null);
    const [relatedItems, setRelatedItems] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        async function fetchItems() {
            setLoading(true);
            setError(null);
            setItem(null);

            try {
                const item = await ProductsService.instance.getProduct(itemId);
                if (cancelled) return;

                setItem(item);
                setRelatedItems(item.related || []);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();

        return () => (cancelled = true);
    }, [itemId]);


    return (
        <div className="container mx-auto my-8">
            <ItemDetail item={item} loading={loading} error={error} />

            {relatedItems.length > 0 && !error && !loading
                && <ItemListContainer items={relatedItems} title={`More from ${item?.category}`} />}
        </div>
    );
}
