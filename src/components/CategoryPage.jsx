import { useEffect, useState } from "react";
import ProductsService from "../services/ProductsService";
import ItemListContainer from "./item-list/ItemListContainer";
import { useParams } from "react-router";
import LoadingSpinner from "./LoadingSpinner";

export default function CategoryPage() {

    const { categorySlug } = useParams();

    const [items, setItems] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchItems() {
            setLoading(true);
            setError(null);
            setCategoryName('');
            setItems([]);

            try {
                const category = await ProductsService.instance.getCategory(categorySlug);
                setItems(category.items);
                setCategoryName(category.name);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, [categorySlug]);



    if (error) {
        return (
            <div className="container mx-auto flex h-[400px] items-center justify-center">
                <p className="text-2xl font-bold text-red-500">
                    Oops! Something went wrong when loading this page. Please refresh the page or try again later.
                </p>
            </div>
        );
    }

    const headerElement = (
        <div className="border-b-4 border-primary-200 bg-primary-100">
            <div className="container mx-auto flex h-[180px] items-center justify-center">
                <h1 className="font-display text-3xl font-bold uppercase tracking-5widest text-primary-600">
                    { categoryName }
                </h1>
            </div>
        </div>
    );

    const loadingElement = (
        <div className="container mx-auto flex h-[400px] items-center justify-center">
            <LoadingSpinner className="h-14 w-14" />
        </div>
    );

    return (
        <>
            { headerElement }
            {
                loading
                    ? loadingElement
                    : <ItemListContainer loading={loading} error={error} items={items} />
            }
        </>
    );
}
