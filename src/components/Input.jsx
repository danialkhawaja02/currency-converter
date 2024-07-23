

// eslint-disable-next-line react/prop-types
export default function Input({ label, disabledField = false, amount, onAmountChange, currency, onCurrencyChange, currencyOptions = [] }) {
    return (
        <div className="bg-[#181818] w-full px-4 py-10 rounded-[15px] shadowBox">
            <div className="flex justify-around items-center">
                <div>
                    <h2 className="text-[#875cf2] text-xl font-semibold">{label}</h2>
                    <input type="number" disabled={disabledField} value={amount} onChange={(e) => (e.target.value < 0) ? 0 : onAmountChange(Number(e.target.value))} />
                </div>
                <div>
                    <h2 className="text-[#875cf2] text-xl font-semibold">Type</h2>
                    <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
                        {currencyOptions.map((currencyOption) => (
                            <option key={currencyOption} value={currencyOption}>
                                {currencyOption.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

