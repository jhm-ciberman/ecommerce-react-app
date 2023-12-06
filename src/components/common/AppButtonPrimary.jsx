import { Link } from "react-router-dom";

export default function AppButtonPrimary({ as, children, className, ...props }) {

    const Component = as || (
        props.to ? Link : 'button'
    );

    return (
        <Component
            className={`
                inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600
                px-4 py-2 text-base font-medium text-white shadow-sm
                hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500
                focus:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-50
                ${className}
            `}
            {...props}
        >
            {children}
        </Component>
    );
}
