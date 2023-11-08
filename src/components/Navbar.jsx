import { useState } from 'react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import CartWidget from './CartWidget';
import UserWidget from './UserWidget';

export default function Navbar() {

    // eslint-disable-next-line no-unused-vars
    const [navbarOpen, setNavbarOpen] = useState(true);

    const links = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: '/',
            label: 'Catalogue',
        },
        {
            href: '/',
            label: 'Deluxe Line',
        },
        {
            href: '/',
            label: 'About',
        },
    ];

    const desktopLinks = links.map((link) => (
        <li key={link.label} className='inline-block hover:text-primary-600'>
            <a href={link.href} className="p-4 font-thin transition duration-300  lg:px-8">
                {link.label}
            </a>
        </li>
    ));

    const mobileLinks = links.map((link) => (
        <li key={link.label} className='inline-block w-full border-b border-slate-600 p-4 text-center hover:text-primary-600'>
            <a href={link.href} className="font-thin lg:px-8">
                {link.label}
            </a>
        </li>
    ));

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
                <ul className="hidden uppercase md:block md:tracking-wide lg:tracking-widest">
                    { desktopLinks }
                </ul>
                <div className="flex">
                    { /* Hardcoded badge count for now */ }
                    <CartWidget badgeCount={ 42 } />
                    <UserWidget />
                </div>
            </div>

            <div className="bg-slate-700 uppercase tracking-widest text-slate-100 md:hidden">
                <ul className="container mx-auto flex flex-col">
                    { mobileLinks }
                </ul>
            </div>
        </nav>
    );
}
