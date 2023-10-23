//import { useState } from 'react'
import Navbar from "@components/Navbar";
import HeroImage from "@components/HeroImage";
import ItemListContainer from "@components/ItemListContainer";
import CategoryCard from "@components/CategoryCard";
import categoryForHimImage from "@assets/images/category-for-him.jpg";
import categoryHandbagsImage from "@assets/images/category-handbags.jpg";
import categoryWinterImage from "@assets/images/category-winter.jpg";

export default function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <Navbar className="sticky top-0 z-50" />

            <HeroImage />

            <main className="container mx-auto mb-10 px-4 py-6">
                <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <CategoryCard imgSrc={categoryForHimImage} imgAlt="For Him" title="For Him" />
                    <CategoryCard imgSrc={categoryHandbagsImage} imgAlt="Handbags" title="Handbags" />
                    <CategoryCard imgSrc={categoryWinterImage} imgAlt="Winter" title="Winter" />
                </div>

                <ItemListContainer greeting="Welcome to Laretto" />
            </main>
        </>
    );
}
