// components/MaxWidthContainer.tsx
import React from "react";

const MaxWidthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default MaxWidthContainer;
