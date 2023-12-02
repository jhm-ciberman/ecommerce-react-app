import { SignalSlashIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function NetworkErrorCard({ status, error }) {
    // In a real world scenario, this component would have a button to retry the request (instead of reloading the whole page)

    status = status ?? error?.response?.status ?? 500;

    const display = {
        404: {
            title: "The page you are looking for does not exist.",
            message: "Please check the URL and try again.",
            icon: <ShoppingCartIcon className="h-14 w-14" />,
            canRefresh: false,
        },
        422: {
            title: "Error submitting the form.",
            message: "Please check the form and try again.",
            icon: null,
            canRefresh: false,
        },
    }[status ?? 500] ?? {
        title: "Oops! Something went wrong when loading this page.",
        message: "Please refresh the page or try again later.",
        icon: <SignalSlashIcon className="h-14 w-14" />,
        canRefresh: true,
    };

    return (
        <div className="container mx-auto my-16 flex items-center justify-center text-gray-500">
            <div className="mr-4 flex flex-col items-center justify-center rounded-lg border border-gray-500/20 bg-white p-10 shadow-md">
                {display.icon}
                <p className="mt-8 w-2/3 text-center text-xl font-bold">
                    {display.title}
                </p>
                <p className="mt-4 text-center text-lg">
                    {display.message}
                </p>

                { display.canRefresh && (
                    <button
                        className="mt-8 rounded-lg bg-primary-600 px-4 py-2 text-white shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600/50"
                        onClick={() => window.location.reload()}>
                        Refresh
                    </button>
                )}
            </div>
        </div>
    );
}
