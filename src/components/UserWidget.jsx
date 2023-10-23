import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function UserWidget() {
    return (
        <a href="/" className="relative inline p-4 transition duration-300 hover:text-primary-600">
            <UserCircleIcon className="inline w-6" />
        </a>
    );
}
