import { useEffect, useState } from "react";
import HeroImage from "./HeroImage";
import CategoryCard from "./CategoryCard";
import ItemLIstContainer from "../item-list/ItemListContainer";
import DbService from "../../services/DbService";

import categoryForHimImage from "@assets/images/category-for-him.jpg";
import categoryHandbagsImage from "@assets/images/category-handbags.jpg";
import categoryWinterImage from "@assets/images/category-winter.jpg";

export default function HomePage() {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchItems() {
            setLoading(true);
            setError(null);
            setItems([]);

            try {
                const items = await DbService.instance.getIndexProducts();
                setItems(items);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, []);

    return (
        <>
            <HeroImage />
            <div className="mb-10 bg-slate-200 p-6">
                <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <CategoryCard
                        to="/category/mens-clothing"
                        imgSrc={categoryForHimImage}
                        imgAlt="For Him"
                        title="For Him"
                    />
                    <CategoryCard
                        to="/category/womens-clothing"
                        imgSrc={categoryHandbagsImage}
                        imgAlt="Handbags"
                        title="Handbags"
                    />
                    <CategoryCard
                        to="/category/jewelery"
                        imgSrc={categoryWinterImage}
                        imgAlt="Winter"
                        title="Winter"
                    />
                </div>
            </div>

            {
                <ItemLIstContainer loading={loading} error={error} items={items} title={"Latest trends"} />
            }
        </>
    );
}
