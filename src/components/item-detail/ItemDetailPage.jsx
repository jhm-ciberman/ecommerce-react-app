import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import ProductsService from "../../services/ProductsService";
import { useEffect, useState } from "react";
import ItemListContainer from "../item-list/ItemListContainer";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import AppButtonPrimary from "../common/AppButtonPrimary";

export default function ItemDetailPage() {

    const { itemId } = useParams();

    const [item, setItem] = useState(null);
    const [relatedItems, setRelatedItems] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showAddedToCartModal, setShowAddedToCartModal] = useState(false);

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


    function renderAddedToCartModal() {
        return (
            <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
                <div className="rounded-xl bg-white p-8">
                    <p className="mb-4 text-center text-xl font-bold">
                        <CheckCircleIcon className="mx-auto mb-4 block h-12 w-12 text-lime-600" />
                        Item added to cart
                    </p>
                    <AppButtonPrimary to="/cart" className="w-full">
                        Go to cart
                    </AppButtonPrimary>
                    <AppButtonPrimary to="/" onClick={() => setShowAddedToCartModal(false)} className="mt-4 w-full">
                        Continue shopping
                    </AppButtonPrimary>
                </div>
            </div>
        );
    }

    function handleAddedToCartChanged() {
        setShowAddedToCartModal(true);
    }

    return (
        <>
            {
                showAddedToCartModal && renderAddedToCartModal()
            }
            <div className="container mx-auto my-8">
                <ItemDetail
                    item={item}
                    loading={loading}
                    error={error}
                    carAddToCart={showAddedToCartModal}
                    onAddedToCart={handleAddedToCartChanged}
                />

                {relatedItems.length > 0 && !error && !loading
                    && <ItemListContainer items={relatedItems} title={`More from ${item?.category}`} />}
            </div>
        </>
    );
}
