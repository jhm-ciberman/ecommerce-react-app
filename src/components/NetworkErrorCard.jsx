import { SignalSlashIcon } from "@heroicons/react/24/solid";

export default function NetworkErrorCard() {
    // In a real world scenario, this component would have a button to retry the request,
    // handle offline mode and have different messages for 422 (validation errors), 404 (not found), etc.

    return (
        <div className="container mx-auto mt-16 flex items-center justify-center  text-gray-500">
            <div className="mr-4 flex flex-col items-center justify-center rounded-lg border border-gray-500/20 bg-white p-10 shadow-md">
                <SignalSlashIcon className="h-14 w-14" />
                <p className="mt-8 w-2/3 text-center text-xl font-bold">
                    Oops! Something went wrong when loading this page.
                </p>
                <p className="mt-4 text-center text-lg">
                    Please refresh the page or try again later.
                </p>
            </div>
        </div>
    );
}
