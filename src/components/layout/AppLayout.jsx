import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar className="sticky top-0 z-50" />

            <main className="grow">
                {children}
            </main>

            <Footer />
        </div>
    );
}
