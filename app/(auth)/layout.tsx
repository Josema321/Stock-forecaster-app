import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      {children}
    </main>
  );
};

export default Layout;