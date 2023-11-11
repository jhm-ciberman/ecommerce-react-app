import ProductsService from "../services/ProductsService";
import ItemListContainer from "./item-list/ItemListContainer";
import { useParams } from "react-router";

export default function CategoryPage() {

    const { categorySlug } = useParams();

    return (
        <div className="container mx-auto mt-8">
            <h1>{categorySlug}</h1>

            <ItemListContainer
                key={categorySlug}
                fetchItemsCallback={() => ProductsService.instance.getCategory(categorySlug)}
            />
        </div>
    );
}
