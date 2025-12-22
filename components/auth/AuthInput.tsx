import React from "react";

export interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  helper?: string;
  onValueChange?: (name: string, value: string) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({ label, name, error, helper, onValueChange, className, onChange, ...rest }) => {
  return (
    <div className="auth-field">
      <label htmlFor={name} className="auth-label">
          {label}
      </label>
      <input
        id={name}
        name={name}
        className={`auth-input ${className ?? ""}`.trim()}
        onChange={(e) => {
          onValueChange?.(name, e.target.value);
          onChange?.(e);
        }}
        {...rest}
      />
      {helper && !error &&
          <p className="auth-helper">
              {helper}
          </p>}
      {error &&
          <p className="auth-error">
              {error}
          </p>
      }
    </div>
  );
};

export default AuthInput;
