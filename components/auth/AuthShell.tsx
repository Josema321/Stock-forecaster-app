import React, { ReactNode } from "react";

interface AuthShellProps {
  left: ReactNode;
  right?: ReactNode;
}

const AuthShell: React.FC<AuthShellProps> = ({ left, right }) => {
    const hasRight = Boolean(right);

    return (
        <div
            className={[
                "mx-auto w-full",
                hasRight ? "max-w-5xl" : "max-w-xl",
                hasRight ? "grid grid-cols-1 lg:grid-cols-2" : "grid grid-cols-1",
                "border border-zinc-800/60 bg-zinc-900/60 backdrop-blur rounded-2xl shadow-xl overflow-hidden",
            ].join(" ")}
        >
            <div
                className={[
                    "p-6 md:p-10 bg-gradient-to-b from-zinc-900 to-zinc-950",
                    hasRight ? "lg:border-r border-zinc-800/60" : "",
                ].join(" ")}
            >
                {left}
            </div>

            {hasRight ? (
                <div className="hidden lg:block p-6 md:p-10 bg-gradient-to-b from-zinc-900/80 to-zinc-950">
                    {right}
                </div>
            ) : null}
        </div>
    );
};

export default AuthShell;
