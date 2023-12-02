import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import CategoryPage from "./components/category/CategoryPage";
import ItemDetailPage from "./components/item-detail/ItemDetailPage";
import AppLayout from "./components/layout/AppLayout";
import NetworkErrorCard from "./components/common/NetworkErrorCard";
import CartPage from "./components/cart/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import { CartContextProvider } from "./context/CartContext";
import CheckoutSuccessPage from "./components/checkout/CheckoutSuccessPage";

export default function App() {
    return (
        <BrowserRouter>
            <AppLayout>
                <CartContextProvider>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/category/:categorySlug" element={<CategoryPage />} />
                        <Route exact path="/item/:itemId" element={<ItemDetailPage />} />
                        <Route exact path="/cart" element={<CartPage />} />
                        <Route exact path="/checkout" element={<CheckoutPage />} />
                        <Route exact path="/checkout/success" element={<CheckoutSuccessPage />} />

                        { /* 404 */}
                        <Route path="*" element={<NetworkErrorCard status={404} />} />
                    </Routes>
                </CartContextProvider>
            </AppLayout>
        </BrowserRouter>
    );
}
