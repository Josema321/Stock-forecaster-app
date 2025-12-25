import React from "react";

export interface AuthSelectOption {
  value: string;
  label: string;
}

export interface AuthSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: AuthSelectOption[];
  error?: string;
  helper?: string;
  placeholderOption?: string;
  onValueChange?: (name: string, value: string) => void;
}

const AuthSelect: React.FC<AuthSelectProps> = ({
  label,
  name,
  options,
  error,
  helper,
  placeholderOption,
  onValueChange,
  className,
  onChange,
  ...rest
}) => {
  return (
    <div className="auth-field">
      <label htmlFor={name} className="auth-label">{label}</label>
      <select
        id={name}
        name={name}
        className={`auth-select ${className ?? ""}`.trim()}
        onChange={(e) => {
          onValueChange?.(name, e.target.value);
          onChange?.(e);
        }}
        {...rest}
      >
        {placeholderOption && (
          <option value="" disabled>
            {placeholderOption}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {helper && !error && <p className="auth-helper">{helper}</p>}
      {error && <p className="auth-error">{error}</p>}
    </div>
  );
};

export default AuthSelect;
