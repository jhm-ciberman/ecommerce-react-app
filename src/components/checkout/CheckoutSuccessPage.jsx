import AppButton from "../common/AppButtonPrimary";
import AppCard from "../common/AppCard";
import {
    CheckCircleIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function CheckoutSuccessPage() {

    return (
        <div className="container mx-auto my-16 max-w-lg">
            <AppCard className="p-10 text-center">
                <CheckCircleIcon className="mx-auto mb-8 h-20 w-20 text-lime-600" />
                <p className="text-2xl font-semibold">Thank you for your order!</p>
                <p className="mt-4">We will send you an email with your order details.</p>

                <AppButton to="/" className="mt-12">
                    Continue shopping
                    <ChevronRightIcon className="ml-2 inline-block h-6 w-6 text-white" />
                </AppButton>
            </AppCard>
        </div>
    );
}
