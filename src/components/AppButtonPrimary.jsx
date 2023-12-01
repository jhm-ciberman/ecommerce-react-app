import { Link } from "react-router-dom";

export default function AppButton({ children, className, ...props }) {

    return (
        <Link
            className={`
                inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600
                px-4 py-2 text-base font-medium text-white shadow-sm
                hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500
                focus:ring-offset-2 ${className}
            `}
            {...props}
        >
            {children}
        </Link>
    );
}
