'use client';

import React, { useMemo, useState } from 'react';
import AuthInput from './AuthInput';
import Link from 'next/link';
import {openSans} from "@/lib/fonts";

interface SignInFormData {
  email: string;
  password: string;
}

const initialData: SignInFormData = {
  email: '',
  password: '',
};

const SignInForm: React.FC = () => {
  const [data, setData] = useState<SignInFormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof SignInFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  const onChange = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (success) setSuccess(null);
  };

  const validate = () => {
    const e: Partial<Record<keyof SignInFormData, string>> = {};

    if (!data.email.trim()) {
        e.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
        e.email = 'Enter a valid email';
    }

    if (!data.password) {
        e.password = 'Password is required';
    } else if (data.password.length < 8) {
        e.password = 'Minimum 8 characters';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess('Logged in (frontend demo).');
    }, 700);
  };

  return (
    <div>
      <div className="brand-row">
          <div className="mb-1 w-full flex justify-start">
              <Link href="/" className={`${openSans.className} text-left leading-none text-white font-semibold tracking-wide`}>
                  Aeris Forecast
              </Link>
          </div>
      </div>

      <h1 className="auth-title">Log In Your Account</h1>

      {success && (
        <div className="auth-success" role="status">
          {success}
        </div>
      )}

      <form onSubmit={onSubmit} className="auth-form">
        <AuthInput
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          value={data.email}
          onValueChange={onChange}
          error={errors.email}
        />

        <AuthInput
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={data.password}
          onValueChange={onChange}
          error={errors.password}
        />

        <button type="submit" className="btn btn-warning w-full mt-1" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>

        <p className="auth-footer">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="auth-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
