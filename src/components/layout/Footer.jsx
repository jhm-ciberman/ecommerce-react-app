import { NavLink } from "react-router-dom";


export default function Footer() {

    const links = [
        {
            to: '/',
            label: 'Home',
        },
        {
            to: '/category/mens-clothing',
            label: 'For Him',
        },
        {
            to: '/category/womens-clothing',
            label: 'For Her',
        },
        {
            to: '/category/jewelery',
            label: 'Jewelery',
        },
    ];

    return (
        <footer className="min-h-[100px] bg-gray-800 py-8 text-gray-300">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
                <div>
                    <p className="text-xl font-semibold">Laretto</p>
                    <p className="text-sm text-gray-300">© 2021</p>
                    <p className="mt-4 text-sm text-gray-300/70">
                        <span>Demo e-commerce site for the </span>
                        <a href="https://coderhouse.com/" target="_blank" className="text-primary-500 hover:text-primary-600" rel="noreferrer">Coderhouse</a>
                        <span> ReactJS course.</span>
                    </p>
                </div>
                <ul className="flex list-inside list-disc flex-col text-gray-300">
                    { links.map((link) => (
                        <li key={link.label} className="mb-1">
                            <NavLink to={link.to} className="hover:text-primary-500">
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
