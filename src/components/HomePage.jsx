import HeroImage from "@components/HeroImage";
import CategoryCard from "@components/CategoryCard";
import ItemLIstContainer from "@components/ItemListContainer";

import categoryForHimImage from "@assets/images/category-for-him.jpg";
import categoryHandbagsImage from "@assets/images/category-handbags.jpg";
import categoryWinterImage from "@assets/images/category-winter.jpg";

export default function HomePage() {
    return (
        <>
            <HeroImage />
            <main className="container mx-auto mb-10 px-4 py-6">
                <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <CategoryCard imgSrc={categoryForHimImage} imgAlt="For Him" title="For Him" />
                    <CategoryCard imgSrc={categoryHandbagsImage} imgAlt="Handbags" title="Handbags" />
                    <CategoryCard imgSrc={categoryWinterImage} imgAlt="Winter" title="Winter" />
                </div>

                <ItemLIstContainer items={[]} />
            </main>
        </>
    );
}
