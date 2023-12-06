import { useEffect, useState } from "react";
import DbService from "../../services/DbService";
import ItemListContainer from "../item-list/ItemListContainer";
import { useParams } from "react-router";

export default function CategoryPage() {

    const { categorySlug } = useParams();

    const [items, setItems] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        async function fetchItems() {
            setLoading(true);
            setError(null);
            setCategoryName('');
            setItems([]);

            try {
                const category = await DbService.instance.getCategory(categorySlug);
                if (cancelled) return;

                setItems(category.items);
                setCategoryName(category.name);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();

        return () => (cancelled = true);
    }, [categorySlug]);

    const headerElement = (
        <div className="border-b-2 border-primary-500 bg-gradient-to-br from-slate-200 to-gray-500">
            <div className="container mx-auto flex h-[160px] items-center justify-center">
                <h1 className="text-3xl font-light capitalize tracking-3widest text-white [text-shadow:_0_0_1.5em_rgba(0,0,0,1)]">
                    { categoryName }
                </h1>
            </div>
        </div>
    );

    return (
        <div className="mb-8">
            { !error ? headerElement : null }
            { <ItemListContainer loading={loading} error={error} items={items} /> }
        </div>
    );
}
