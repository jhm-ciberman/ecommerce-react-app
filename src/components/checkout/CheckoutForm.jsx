import { useState } from 'react';
import { validate, confirmed, email, max, min, phone, required } from '../../services/validation';
import AppInput from '../common/AppInput';
import AppButtonPrimary from '../common/AppButtonPrimary';
import AppCard from '../common/AppCard';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function CheckoutForm({ onSubmit, isSubmitting }) {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        emailConfirm: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        emailConfirm: '',
    });

    const rules = {
        firstName: [required(), min(2), max(255)],
        lastName: [required(), min(2), max(255)],
        phone: [required(), phone()],
        email: [required(), email()],
        emailConfirm: [required(), email(), confirmed(form.email)],
    };

    function handleChange(event) {
        const { name, value } = event.target;

        const error = validate(value, rules[name]);

        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: error });
    }

    function revalidateForm() {
        const newErrors = {};

        for (const name in form) {
            newErrors[name] = validate(form[name], rules[name]);
        }

        setErrors(newErrors);

        return newErrors;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = revalidateForm();

        if (Object.keys(newErrors).length === 0) {
            onSubmit(form);
        }
    }

    function renderInput(name, label, type = 'text') {
        return (
            <div className="mb-4">
                <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <AppInput
                    type={type}
                    name={name}
                    id={name}
                    value={form[name]}
                    onChange={handleChange}
                    error={errors[name]}
                />
                {errors[name] && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors[name]}
                    </p>
                )}
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <AppCard className="p-8">
                <div className="grid grid-cols-1 gap-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Enter your details
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                        {renderInput('firstName', 'First name', 'text')}
                        {renderInput('lastName', 'Last name', 'text')}
                        {renderInput('phone', 'Phone', 'phone')}
                        <hr className="col-span-2 border-gray-200" />
                        {renderInput('email', 'Email', 'email')}
                        {renderInput('emailConfirm', 'Confirm email', 'email')}
                    </div>
                </div>
            </AppCard>
            <div className="mt-8 flex items-center justify-end">
                <AppButtonPrimary
                    as="button"
                    type="submit"
                    className="px-8 py-3"
                    disabled={isSubmitting}
                >
                    Confirm Order
                    <ChevronRightIcon className="ml-4 inline-block h-6 w-6 text-white" />
                </AppButtonPrimary>
            </div>
        </form>
    );
}
