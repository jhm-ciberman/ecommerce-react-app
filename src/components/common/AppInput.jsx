export default function AppInput({ className, ...props }) {

    return (
        <input
            className={`${className || ''}
                block w-full rounded-md border border-gray-300 px-4 py-2
                shadow-sm
            `}
            {...props}
        />
    );
}
