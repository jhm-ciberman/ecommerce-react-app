export default function AppCard({ children, className, ...props }) {

    return (
        <div
            className={`
                flex flex-col overflow-hidden rounded-lg border border-gray-500/20 bg-white shadow-md ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
}
