const InputField = ({ name, label, placeholder, type = "text", value, onChange, error }) => (
    <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>

        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            className={`input input-bordered w-full ${error ? "input-error" : ""}`}
        />

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);
export default InputField;
