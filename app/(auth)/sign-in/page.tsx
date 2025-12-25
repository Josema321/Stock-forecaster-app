import React from "react";
import AuthShell from "@/components/auth/AuthShell";
import SignInForm from "@/components/auth/SignInForm";
import Image from "next/image";

const RightPanel: React.FC = () => {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="flex flex-col gap-3">

        <h2 className="text-zinc-100 text-xl leading-relaxed">
          Aeris turned my watchlist into a winning list.
          <br />
          The alerts are spot-on, and I feel more confident
          <br />
          making moves in the market
        </h2>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-zinc-100">— Ethan R.</p>
            <p className="text-zinc-400 text-sm mt-0.5">Retail Investor</p>
          </div>

          <div className="text-yellow-400 text-lg" aria-label="5 star rating">
            <span>★★★★★</span>
          </div>
        </div>
      </div>

      <div
        className="relative w-full min-h-[220px] overflow-hidden rounded-xl border border-white/10
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_24px_rgba(0,0,0,0.45)]
                     bg-[linear-gradient(135deg,#1a1c21_0%,#121317_45%,#1a1b1f_100%)]"
        aria-label="dashboard preview placeholder"
      >
          <Image
              src="/assets/images/home.png"
              alt="Dashboard Preview"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return <AuthShell left={<SignInForm />} right={<RightPanel />} />;
};

export default Page;



