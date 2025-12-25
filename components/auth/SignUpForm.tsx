'use client';

import React, { useMemo, useState } from 'react';
import AuthInput from './AuthInput';
import AuthSelect from './AuthSelect';
import Link from 'next/link';
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants';
import { openSans } from "@/lib/fonts";

export interface SignUpFormData {
  fullName: string;
  email: string;
  country: string;
  password: string;
  investmentGoals: string;
  riskTolerance: string;
  preferredIndustry: string;
}

const initialData: SignUpFormData = {
  fullName: '',
  email: '',
  country: '',
  password: '',
  investmentGoals: 'growth',
  riskTolerance: '',
  preferredIndustry: '',
};


const SignUpForm: React.FC = () => {
  const [data, setData] = useState<SignUpFormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  const onChange = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));

    if (success) setSuccess(null);
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof SignUpFormData, string>> = {};
    if (!data.fullName.trim()) e.fullName = 'Full name is required';

    if (!data.email.trim()) {
        e.email = 'Email is required';
    }
    else if (!emailRegex.test(data.email)) {
        e.email = 'Enter a valid email';
    }

    if (!data.country) e.country = 'Country is required';
    if (!data.password) e.password = 'Password is required';
    else if (data.password.length < 8) e.password = 'Minimum 8 characters';
    if (!data.investmentGoals) e.investmentGoals = 'Select your investment goal';
    if (!data.riskTolerance) e.riskTolerance = 'Select your risk level';
    if (!data.preferredIndustry) e.preferredIndustry = 'Select your industry';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess(null);
    setTimeout(() => {
          setLoading(false);
          setSuccess('Account created (frontend demo).');
      // You can choose to reset or keep values; keeping values here
    }, 700);
  };

  return (
    <div>
        <div className="mb-1 w-full flex justify-start">
            <Link href="/" className={`${openSans.className} text-left leading-none text-white font-semibold tracking-wide`}>
                Aeris Forecast
            </Link>
        </div>

        <h1 className="auth-title">
            Sign Up & Personalize
        </h1>

      {success &&
          <div className="auth-success" role="status">
              {success}
          </div>}

      <form onSubmit={onSubmit} className="auth-form">
        <AuthInput
          name="fullName"
          label="Full Name"
          placeholder="Jane Doe"
          value={data.fullName}
          onValueChange={onChange}
          error={errors.fullName}
        />

        <AuthInput
          name="email"
          type="email"
          label="Email"
          placeholder="jane@example.com"
          value={data.email}
          onValueChange={onChange}
          error={errors.email}
        />

        {/*<AuthSelect*/}
        {/*  name="country"*/}
        {/*  label="Country"*/}
        {/*  options={COUNTRIES}*/}
        {/*  value={data.country}*/}
        {/*  onValueChange={onChange}*/}
        {/*  error={errors.country}*/}
        {/*  helper="Helps us show market data and news relevant to you."*/}
        {/*/>*/}

        <AuthInput
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={data.password}
          onValueChange={onChange}
          error={errors.password}
        />

        <AuthSelect
          name="investmentGoals"
          label="Investment Goals"
          options={INVESTMENT_GOALS}
          value={data.investmentGoals}
          onValueChange={onChange}
          error={errors.investmentGoals}
        />

        <AuthSelect
          name="riskTolerance"
          label="Risk Tolerance"
          placeholderOption="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          value={data.riskTolerance}
          onValueChange={onChange}
          error={errors.riskTolerance}
        />

        <AuthSelect
          name="preferredIndustry"
          label="Preferred Industry"
          placeholderOption="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          value={data.preferredIndustry}
          onValueChange={onChange}
          error={errors.preferredIndustry}
        />

        <button type="submit" className="btn btn-warning w-full mt-1" disabled={loading}>
          {loading ? 'Creating account...' : 'Start Your Investing Journey'}
        </button>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link href="/sign-in" className="auth-link">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
