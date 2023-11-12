import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import CategoryPage from "./components/category/CategoryPage";
import ItemDetailPage from "./components/item-detail/ItemDetailPage";
import AppLayout from "./components/layout/AppLayout";

export default function App() {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/category/:categorySlug" element={<CategoryPage />} />
                    <Route exact path="/item/:itemId" element={<ItemDetailPage />} />
                </Routes>
            </AppLayout>
        </BrowserRouter>
    );
}
