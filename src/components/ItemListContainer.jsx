
export default function ItemListContainer({ greeting }) {

    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
    ];

    return (
        <div className="container mx-auto mt-8">
            <h1 className="mb-6 font-display text-4xl tracking-widest text-slate-500">
                {greeting}
            </h1>

            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-4 md:grid-cols-6">
                {items.map((item, index) =>
                    <li
                        key={index}
                        className="cursor-pointer rounded-lg border border-slate-500/10 bg-white p-4 shadow-sm transition duration-300 hover:bg-slate-100 hover:shadow-md">
                        {item}
                    </li>
                )}
            </ul>
        </div>
    );
}
