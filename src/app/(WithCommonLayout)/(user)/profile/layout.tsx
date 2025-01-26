import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>User layout</h1>
      {children}
    </div>
  );
}
