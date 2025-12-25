const SelectField = ({
                         name,
                         label,
                         options,
                         value,
                         onChange,
                         error,
                     }) => (
    <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>

        <select
            className={`select select-bordered w-full ${error ? "select-error" : ""}`}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
        >
            {options.map((o) => (
                <option key={o.value} value={o.value}>
                    {o.label}
                </option>
            ))}
        </select>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);
export default SelectField;
