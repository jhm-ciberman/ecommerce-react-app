import { Link } from "react-router-dom";

export default function CategoryCard({ imgSrc, imgAlt, title, to }) {

    return (
        <Link className="relative aspect-[3/1] cursor-pointer overflow-hidden rounded-lg shadow-lg md:aspect-[2/1]" to={to}>
            <img
                className="
                    aspect-video object-cover object-center
                    transition duration-300 ease-in-out hover:scale-105"
                src={imgSrc}
                alt={imgAlt}
            />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-slate-700/50 via-slate-700/30 to-transparent">
                <h2 className="
                    m-5 font-display text-3xl font-thin tracking-[0.25em] text-slate-100 [text-shadow:_0_0_2em_rgba(0,0,0,0.6)]
                    sm:m-3 sm:text-lg sm:tracking-widest
                    md:m-5 md:text-2xl md:tracking-[0.25em]
                    lg:text-3xl">
                    {title}
                </h2>
            </div>
        </Link>
    );
}
