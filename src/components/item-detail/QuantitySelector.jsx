import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import "./QuantitySelector.css";

export default function QuantitySelector({ min, max, value, onChange }) {

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



    return (
        <div className="quantity-selector flex items-stretch justify-center overflow-hidden rounded-full border border-slate-300 bg-white">
            <button
                className="
                    px-4 py-3 text-2xl text-slate-600 hover:bg-primary-50 hover:text-primary-600
                    disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-300"
                onClick={handleDecrease}
                disabled={!canDecrease}
                aria-label='Decrease quantity'>
                <MinusIcon className="h-5 w-5" />
            </button>

            <input
                type="number"
                inputMode='numeric'
                className="w-12 min-w-[5rem] p-2 text-center text-slate-800 focus:-outline-offset-4 focus:outline-slate-200 active:text-slate-900"
                value={value}
                onChange={(e) => handleChange(e.target.value)} />

            <button
                className="
                    px-4 py-3 text-2xl text-slate-600 hover:bg-primary-50 hover:text-primary-600
                    disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-300"
                onClick={handleIncrease}
                disabled={!canIncrease}
                aria-label='Increase quantity'>
                <PlusIcon className="h-5 w-5" />
            </button>
        </div>
    );
}
