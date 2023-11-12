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
        <footer className="min-h-[100px] border-t-8 border-t-slate-300 bg-white py-8 text-slate-800">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
                <div>
                    <a className="font-display text-xl font-normal tracking-widest text-slate-500 hover:text-primary-600" href="/">
                        Laretto
                    </a>
                    <p className="text-sm text-slate-800">© {new Date().getFullYear()}</p>
                    <p className="mt-4 text-sm text-slate-600">
                        <span>Demo e-commerce site for the </span>
                        <a href="https://coderhouse.com/" target="_blank" className="text-primary-500 hover:text-primary-600" rel="noreferrer">Coderhouse</a>
                        <span> ReactJS course.</span>
                    </p>
                </div>
                <ul className="flex list-inside list-disc flex-col text-slate-600">
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
