import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import "./QuantitySelector.css";

export default function QuantitySelector({ min, max, value, onChange, size = 'md' }) {

    const canDecrease = value > min;
    const canIncrease = value < max;

    function handleDecrease() {
        if (canDecrease) {
            onChange(value - 1);
        }
    }

    function handleIncrease() {
        if (canIncrease) {
            onChange(value + 1);
        }
    }

    function handleChange(newValue) {
        let numValue = Number(newValue);
        numValue = Math.min(Math.max(numValue, min), max);
        onChange(numValue);
    }

    const sizeClasses = {
        'sm': {
            button: 'px-2 py-0.5 text-xs',
            input: 'w-8 min-w-[3rem] p-1',
            icon: 'h-3 w-3',
        },
        'md': {
            button: 'px-3 py-1 text-sm',
            input: 'w-10 min-w-[4rem] p-2',
            icon: 'h-4 w-4',
        },
        'lg': {
            button: 'px-4 py-3 text-2xl',
            input: 'w-12 min-w-[5rem] p-2',
            icon: 'h-5 w-5',
        },
    };

    const sizeClass = sizeClasses[size];

    return (
        <div className="quantity-selector flex items-stretch justify-center overflow-hidden rounded-full border border-slate-300 bg-white">
            <button
                className={`${sizeClass.button} text-slate-600 hover:bg-primary-50 hover:text-primary-600
                    disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-300`}
                onClick={handleDecrease}
                disabled={!canDecrease}
                aria-label='Decrease quantity'>
                <MinusIcon className={`${sizeClass.icon}`} />
            </button>

            <input
                type="number"
                inputMode='numeric'
                className={`${sizeClass.input} text-center text-slate-800 focus:-outline-offset-4 focus:outline-slate-200 active:text-slate-900`}
                value={value}
                onChange={(e) => handleChange(e.target.value)} />

            <button
                className={`${sizeClass.button} text-slate-600 hover:bg-primary-50 hover:text-primary-600
                    disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-300`}
                onClick={handleIncrease}
                disabled={!canIncrease}
                aria-label='Increase quantity'>
                <PlusIcon className={`${sizeClass.icon}`} />
            </button>
        </div>
    );
}
