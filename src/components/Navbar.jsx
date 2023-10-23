import { useState } from 'react';
import {
    ShoppingBagIcon,
    UserCircleIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';

export default function Navbar() {

    // eslint-disable-next-line no-unused-vars
    const [navbarOpen, setNavbarOpen] = useState(true);

    // TODO: Add functionality to the menu button

    return (
        <nav className="bg-white text-slate-700 shadow md:backdrop-blur" role="navigation">
            <div className="container relative mx-auto flex h-16 items-center justify-between">
                <button className="inset-y-0 block p-4 transition duration-300 hover:text-primary-600 md:hidden">
                    <span className="sr-only">Open main menu</span>
                    { navbarOpen
                        ? <Bars3Icon className="inline w-6" aria-hidden="true" />
                        : <XMarkIcon className="inline w-6" aria-hidden="true" />
                    }
                </button>
                <a href="/" className="block p-4 font-display text-2xl tracking-wider transition duration-300 hover:text-primary-600">
                    Laretto
                </a>
                <div className="hidden uppercase md:block md:tracking-wide lg:tracking-widest">
                    <a href="/" className="p-4 font-thin transition duration-300 hover:text-primary-600 lg:px-8">
                        Home
                    </a>
                    <a href="/" className="p-4 font-thin transition duration-300 hover:text-primary-600 lg:px-8">
                        Catalogue
                    </a>
                    <a href="/" className="p-4 font-thin transition duration-300 hover:text-primary-600 lg:px-8">
                        Deluxe Line
                    </a>
                    <a href="/" className="p-4 font-thin transition duration-300 hover:text-primary-600 lg:px-8">
                        About
                    </a>
                </div>
                <div className="flex">
                    <a href="/" className="inline p-4 transition duration-300 hover:text-primary-600">
                        <ShoppingBagIcon className="inline w-6" />
                    </a>
                    <a href="/" className="inline p-4 transition duration-300 hover:text-primary-600">
                        <UserCircleIcon className="inline w-6" />
                    </a>
                </div>
            </div>

            <div className="bg-slate-700 uppercase tracking-widest text-slate-100 md:hidden">
                <div className="container mx-auto flex flex-col">
                    <a href="/" className="p-4 font-thin hover:text-primary-600 lg:px-8">
                        Home
                    </a>
                    <a href="/" className="p-4 font-thin hover:text-primary-600 lg:px-8">
                        Catalogue
                    </a>
                    <a href="/" className="p-4 font-thin hover:text-primary-600 lg:px-8">
                        Deluxe Line
                    </a>
                    <a href="/" className="p-4 font-thin hover:text-primary-600 lg:px-8">
                        About
                    </a>
                </div>
            </div>

        </nav>
    );
}
