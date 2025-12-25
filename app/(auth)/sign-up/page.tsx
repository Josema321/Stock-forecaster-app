import React from "react";
import AuthShell from "@/components/auth/AuthShell";
import SignUpForm from "@/components/auth/SignUpForm";


const Page: React.FC = () => {
  return (
      <div className="min-h-[100dvh] w-full overflow-x-hidden bg-black">
          <div className="mx-auto flex min-h-[100dvh] items-start justify-center px-4 py-8 lg:items-center lg:py-0">
              <AuthShell left={<SignUpForm />} />
          </div>
      </div>
  )
};

export default Page;
