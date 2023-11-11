//import { useState } from 'react'
import Navbar from "@components/Navbar";

import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import ItemDetailPage from "./components/ItemDetailPage";

export default function App() {
    //const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Navbar className="sticky top-0 z-50" />

            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/category/:categoryId" element={<CategoryPage />} />
                <Route exact path="/item/:itemId" element={<ItemDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}
