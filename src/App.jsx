//import { useState } from 'react'
import Navbar from "@components/Navbar";
import HeroImage from "./components/HeroImage";

export default function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <Navbar className="sticky top-0 z-50" />

            <HeroImage />

            <main>
            </main>
        </>
    );
}
