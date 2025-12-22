import React, { ReactNode } from "react";

interface AuthShellProps {
  left: ReactNode;
  right: ReactNode;
}

const AuthShell: React.FC<AuthShellProps> = ({ left, right }) => {
  return (
    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 border border-zinc-800/60 bg-zinc-900/60 backdrop-blur rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 md:p-10 bg-gradient-to-b from-zinc-900 to-zinc-950 border-r border-zinc-800/60">
        {left}
      </div>
      <div className="hidden lg:block p-6 md:p-10 bg-gradient-to-b from-zinc-900/80 to-zinc-950">
        {right}
      </div>
    </div>
  );
};

export default AuthShell;
