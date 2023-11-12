//import { useState } from 'react'
import Navbar from "./components/layout/Navbar";

import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import CategoryPage from "./components/category/CategoryPage";
import ItemDetailPage from "./components/item-detail/ItemDetailPage";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar className="sticky top-0 z-50" />

            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/category/:categorySlug" element={<CategoryPage />} />
                <Route exact path="/item/:itemId" element={<ItemDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}
