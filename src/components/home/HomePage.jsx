import HeroImage from "./HeroImage";
import CategoryCard from "./CategoryCard";
import ItemLIstContainer from "../item-list/ItemListContainer";

import categoryForHimImage from "@assets/images/category-for-him.jpg";
import categoryHandbagsImage from "@assets/images/category-handbags.jpg";
import categoryWinterImage from "@assets/images/category-winter.jpg";

export default function HomePage() {
    return (
        <>
            <HeroImage />
            <main className="container mx-auto mb-10 px-4 py-6">
                <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
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

                <ItemLIstContainer items={[]} />
            </main>
        </>
    );
}
